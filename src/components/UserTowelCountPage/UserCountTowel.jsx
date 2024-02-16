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




  return (
    <UserCountTowelContext.Provider
      value={{
        handlerUploadButton,
        handlerResultButton,
        handlerShowLog,
        imageFile, setImageFile,
        imageSrc, setImageSrc
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