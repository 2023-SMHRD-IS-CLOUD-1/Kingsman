import React, { useState } from 'react'
import UserTowelImageResult from './UserTowelImageResult'
import UserTowelImageUpload from './UserTowelImageUpload'
import UserTowelImageButton from './UserTowelImageButton'
import UserTowelCountLog from './UserTowelCountLog'
import UserMainHeader from './UserMainHeader'


const TowelCountMain = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (image) => {
    // 여기에서 이미지 업로드를 서버에 요청하고, 성공 시에 state 업데이트
    setUploadedImage(URL.createObjectURL(image));
  };
  
  return (
    <div className='TowelCountMain'>
      <UserMainHeader></UserMainHeader>
      <UserTowelImageUpload imageUrl={uploadedImage}></UserTowelImageUpload>
      <UserTowelImageResult></UserTowelImageResult>
      <UserTowelImageButton onImageUpload={handleImageUpload}></UserTowelImageButton>
      <UserTowelCountLog></UserTowelCountLog>
    </div>
  )
}

export default TowelCountMain