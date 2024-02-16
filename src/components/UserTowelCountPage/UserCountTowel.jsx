import React, { useState } from 'react'
import UserCountTowelHeader from './UserCountTowelHeader'
import UserCountTowelResult from './UserCountTowelResult'
import UserCountTowelButtons from './UserCountTowelButtons'
import UserCountTowelLogCheck from './UserCountTowelLogCheck'
import UserCountTowelMain from './UserCountTowelMain'
import { UserCountTowelContext } from '../../context/UserCountTowelContext'
import { useNavigate } from 'react-router-dom';
const UserCountTowel = () => {

  const nav = useNavigate()

  const [imageFile, setImageFile] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handlerUploadButton = () => {
    console.log("업로드버튼 클릭");
  }

  const handlerResultButton = () => {
    console.log("분석하기버튼 클릭");
  }

  const handlerShowLog = () => {
    console.log("나의 기록 보기");
    nav('/UserActivityLog')
  }

  const handleImageUpload = (image) => {
    // 여기에서 이미지 업로드를 서버에 요청하고, 성공 시에 state 업데이트
    setUploadedImage(URL.createObjectURL(image));
  };


  return (
    <UserCountTowelContext.Provider
      value={{
        handlerUploadButton,
        handlerResultButton,
        handlerShowLog,
        imageFile, setImageFile,
        imageSrc, setImageSrc,
        handleImageUpload,
        uploadedImage, setUploadedImage,
        imageUrl, setImageUrl
      }}>
      <div>
        <UserCountTowelHeader />
        <UserCountTowelMain />
        <UserCountTowelResult />
        <UserCountTowelButtons />
        <UserCountTowelLogCheck />
      </div>
    </UserCountTowelContext.Provider>
  )
}

export default UserCountTowel