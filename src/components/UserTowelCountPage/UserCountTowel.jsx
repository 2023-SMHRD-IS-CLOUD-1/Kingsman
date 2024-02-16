import React, { useEffect, useState } from 'react';
import UserCountTowelHeader from './UserCountTowelHeader';
import UserCountTowelResult from './UserCountTowelResult';
import UserCountTowelButtons from './UserCountTowelButtons';
import UserCountTowelLogCheck from './UserCountTowelLogCheck';
import UserCountTowelMain from './UserCountTowelMain';
import { UserCountTowelContext } from '../../context/UserCountTowelContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const UserCountTowel = () => {
  const nav = useNavigate()
  const [countnoti,setCountNoti]=useState(0)
  const [imageFile, setImageFile] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

  const handlerUploadButton = () => {
    console.log("업로드버튼 클릭");
   
    
  }

  const handlerResultButton = () => {
    console.log("분석하기버튼 클릭");
    setCountNoti(countnoti)
    console.log(countnoti)
    Upnoti();
  }

  const handlerShowLog = () => {
    console.log("나의 기록 보기");
    nav('/UserActivityLog')
  }
  useEffect(() => {
    const fetchData = async () => {
        try {
            const url = "http://localhost:8085/kingsman/Notilist";
            const res = await axios.get(url);
            console.log('알림', res.data[0].b_NOTIFICATION); 
            setCountNoti(res.data[0].b_NOTIFICATION)
          } catch (error) {
            console.error(error);
        }
    };
  
    fetchData(); 
}, []);
const data = {
  b_NOTIFICATION: countnoti
};
  const Upnoti=()=>{
    axios
  .post('http://localhost:8085/kingsman/Upnoti', data, { withCredentials: true })
  .then((response) => {
    console.log("말")
    console.log('데이터 전송 성공:', response.data);
    
  })
  .catch((error) => {
    console.error('데이터 전송 중 오류:', error);
  });

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