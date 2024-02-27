import React, { useContext, useEffect, useState } from 'react'
import uploading from '../../image/uploading.png'
import resultImg from '../../image/resultImg.png'
import { UserCountTowelContext } from '../../context/UserCountTowelContext'
import AWS from "aws-sdk";
import axios from 'axios'
import UserCountTowelResult from './UserCountTowelResult';


const UserCountTowelButtons = () => {
  const { setImageUrl, results, setResults ,imageUrl } = useContext(UserCountTowelContext);
  const [files, setFiles] = useState([]);
  const [countnoti,setCountNoti]=useState(0)
  const uploadS3 = async (file) => {
    const REGION = 'us-east-1';
    const ACCESS_KEY_ID = process.env.REACT_APP_ACCESS_KEY_ID;
    const SECRET_ACCESS_KEY_ID = process.env.REACT_APP_SECRET_ACCESS_KEY_ID;

    AWS.config.update({
      region: REGION,
      accessKeyId: ACCESS_KEY_ID,
      secretAccessKey: SECRET_ACCESS_KEY_ID,
    });

    const s3 = new AWS.S3();

    try {
      const params = {
        Bucket: 'kingsmanbucket',
        Key: `${Date.now()}.${file.name}`,
        Body: file
      };
      const result = await s3.upload(params).promise();
      const imageUrl = result.Location; // 업로드된 파일의 URL을 가져옴
      setImageUrl(imageUrl); // setImageUrl로 설정
    } catch (error) {
    }
  };

  const onChangeFile = async (e) => {
    const fileList = e.target.files;
    if (fileList) {
      const filesArray = Array.from(fileList).map(file => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setFiles(filesArray);
      if (filesArray.length > 0) {
        await uploadS3(filesArray[0].file); // 첫 번째 파일만 업로드
      }
    }
  };

  const handleUploadClick = async () => {
    let payload2; // payload2를 먼저 선언

    // 이미지 업로드 및 결과 받아오기
    const formData = new FormData();
    formData.append('image', files[0].file); // 첫 번째 파일을 formData에 추가

    try {
      const res = await axios.post('http://localhost:5000', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // 결과 출력
      setResults(res.data[0].message);
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0'); // 시
      const minutes = now.getMinutes().toString().padStart(2, '0'); // 분
      const seconds = now.getSeconds().toString().padStart(2, '0'); // 초
  
      // 현재 시간을 '시:분:초' 형식의 문자열로 구성
      const currentTime = `${hours}:${minutes}:${seconds}`;
  
      const t_COUNT = res.data[0].message === "50개 입니다." ? 50 : 0;
      const reultgo = t_COUNT === 0 ? "FALSE" : "TRUE";
      
     
      payload2 = { // payload2에 값 할당
          t_IMAGE: imageUrl,
          t_COUNT: t_COUNT,
          t_RESULT: reultgo,
          t_ID: id,
          t_TIME: currentTime // Set the current time
      };
    } catch (error) {
    }

    Upnoti();
    const sendCountData = () => {
      // 현재 시간을 가져와서 포맷팅
      
  
  
      axios
          .post('http://18.209.180.46:8085/kingsman/CountTowel', payload2, { withCredentials: true })
          .then((response) => {
          })
          .catch((error) => {
          });
  };
    sendCountData();
  };
  useEffect(() => {
    const fetchData = async () => {
        try {
            const url = "http://43.201.66.47:8085/kingsman/Notilist";
            const res = await axios.get(url);
            setCountNoti(res.data[0].b_NOTIFICATION)
          } catch (error) {
        }
    };
  
    fetchData(); 
}, []);
const data = {
  b_NOTIFICATION: countnoti
};
  const Upnoti=()=>{
    axios
  .post('http://43.201.66.47:8085/kingsman/Upnoti', data, { withCredentials: true })
  .then((response) => {
    
  })
  .catch((error) => {
  });

  }
  const id  = sessionStorage.getItem("user")
 

  const { handlerUploadButton, handlerResultButton } = useContext(UserCountTowelContext);
  return (
    <div className='UserCountTowelButtons'>
      <div className='uploadButton'>
        <label htmlFor="uploadInput" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={uploading} style={{ height: "25px", marginRight: "15px" }} />
          <input id="uploadInput" type="file" onChange={onChangeFile} multiple style={{ display: 'none' }} />
          <p style={{ margin: "0px" }}>UPLOAD</p>
        </label>
      </div>
      <div className='checkResultButton' onClick={handleUploadClick}>
        <img src={resultImg} style={{ height: "45px", marginRight: "10px", marginTop: "10px" }} />
        <p style={{ margin: "0px" }}>분석하기</p>
        
      </div>
    </div>
  );
};

export default UserCountTowelButtons;
