import React, { useRef, useState } from 'react';

const UserTowelImageButton = ({ onImageUpload }) => {
  const inputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    onImageUpload(file);
  };

  const handleImageCheck = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result.split(',')[1];

        const serverEndpoint = 'http://localhost:8080/upload'; // 실제 서버 URL로 변경

        fetch(serverEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ imageData }),
        })
          .then(response => response.json())
          .then(data => {
            console.log('Image uploaded successfully:', data);
            // 이미지 업로드 후 추가적인 작업 수행 가능
          })
          .catch(error => {
            console.error('Error uploading image:', error);
            // 에러 처리 로직 추가
          });
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div>

      <div className='upload'>
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          style={{ display: 'none' }}
          onChange={handleImageChange}
          />
          
        <button onClick={handleButtonClick}><h3>업로드</h3></button>
        <button onClick={handleImageCheck}><h3>수량 확인</h3></button>
      </div>
    </div>
  );
};

export default UserTowelImageButton;