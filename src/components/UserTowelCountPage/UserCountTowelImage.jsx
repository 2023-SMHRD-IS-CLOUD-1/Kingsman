import React, { useRef, useState, useEffect } from 'react';
import { useContext } from 'react';
import { UserCountTowelContext } from '../../context/UserCountTowelContext';
import UploadButtonClickContext from './UploadButtonClickContext'; // UploadButtonClickContext를 가져옵니다.
import cameraImage from '../../image/camera2.png';

const UserCountTowelImage = () => {
  const { imageUrl, result } = useContext(UserCountTowelContext);
  const videoRef = useRef(null);
  const { uploadClicked } = useContext(UploadButtonClickContext);
  const [stream, setStream] = useState(null);
  const [cameraStarted, setCameraStarted] = useState(false);
  const [marginTop, setMarginTop] = useState(155);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  const stopStreamAndRemoveVideo = () => {
    if (stream) {
      stream.getTracks().forEach(track => {
        track.stop(); // 미디어 스트림 중지
      });
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null; // 비디오 요소의 소스 객체 제거
    }
  };

  useEffect(() => {
    if (!cameraStarted && !uploadClicked) { // 카메라가 시작되지 않았고 업로드 버튼이 클릭되지 않았을 때만 카메라 시작
      startCamera();
      setCameraStarted(true);
    }
    return () => {
      if (stream && uploadClicked) { // 업로드 버튼이 클릭되었을 때만 카메라 스트림 중지하고 비디오 요소 제거
        stopStreamAndRemoveVideo();
        setMarginTop(150); // 업로드 후 marginTop 변경
      }
    };
  }, [cameraStarted, uploadClicked]); // cameraStarted 또는 uploadClicked가 변경될 때마다 실행

  useEffect(() => {
    if (imageUrl) {
      setMarginTop(150); // 이미지가 업로드된 후 marginTop 변경
    }
  }, [imageUrl]);

  return (
    <div className='UserCountTowelImage' style={{ marginTop: `${marginTop}px`, maxHeight: "100px" }}>
      <div className='UserCountTowelImage'>
        {imageUrl ? (
          <div className={`uploadImage ${result === undefined || result === null ? null : result ? 'green' : 'red'}`}>
            <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />
          </div>
        ) : (
          !uploadClicked && (
            <div>
              {cameraStarted && <UsesrCountTowelCamera />}
              <video ref={videoRef} autoPlay muted style={{ width: '500px', minHeight: "350px", marginBottom: "120px", display: imageUrl ? 'none' : 'block' }} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default UserCountTowelImage;

// 아래에 이 부분을 추가하거나 위에 코드에 포함시켜도 됩니다.
const UsesrCountTowelCamera = () => {
  return (
    <div className='UsesrCountTowelCamera' >
    <img src={cameraImage} className='cameraImage' style={{ marginTop: "750px" ,zIndex: 1}} />
</div>
  )
}