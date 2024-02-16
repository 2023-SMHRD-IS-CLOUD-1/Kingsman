import React, { useContext, useEffect, useState } from 'react'
import uploading from '../../image/uploading.png'
import resultImg from '../../image/resultImg.png'
import { UserCountTowelContext } from '../../context/UserCountTowelContext'
import UserCountTowelAwsS3 from './UserCountTowelAwsS3'
import UserCountTowelS3Button from './UserCountTowelS3Button'
import AWS from "aws-sdk";
import axios from 'axios'


const UserCountTowelButtons = () => {


  const { imageFile, setImageFile, imageSrc, setImageSrc } = useContext(UserCountTowelContext);
  const [files, setFiles] = useState([]);
  const [countnoti,setCountNoti]=useState(0)

  const uploadS3 = async () => {
    const REGION = 'us-east-1';
    const ACCESS_KEY_ID = process.env.REACT_APP_ACCESS_KEY_ID;
    const SECRET_ACCESS_KEY_ID = process.env.REACT_APP_SECRET_ACCESS_KEY_ID;

    AWS.config.update({
      region: REGION,
      accessKeyId: ACCESS_KEY_ID,
      secretAccessKey: SECRET_ACCESS_KEY_ID,
    });

    const s3 = new AWS.S3();

    if (files.length === 0) return;

    const uploadPromise = files.map(({ file }) => {
      const params = {
        Bucket: 'kingsmanbucket',
        Key: `${Date.now()}.${file.name}`,
        Body: file
      };
      return s3.upload(params).promise();
    })

    const results = await Promise.all(uploadPromise);
    const locations = results.map(result => result.Location);
    // 백엔드로 저장하는 요청 로케이션과 같이 보내주기
  }

  const onChangeFile = (e) => {
    const fileList = e.target.files;
    if (fileList) {
      const filesArray = Array.from(fileList).map(file => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setFiles(prevFiles => [...prevFiles, ...filesArray]);
    }
  };

  const handleUploadClick = () => {
    uploadS3();
    Upnoti();
    
    console.log("s3에업로드");
  };
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


  const { handlerUploadButton, handlerResultButton } = useContext(UserCountTowelContext);
  return (
    <div className='UserCountTowelButtons'>
      {/* <div className='uploadButton' onClick={onChangeFile} >
        <img src={uploading} style={{ height: "25px", marginRight: "15px" }} />
        <input type="file" onChange={onChangeFile} multiple />
        <p style={{ margin: "0px" }}>UPLOAD
        </p>
      </div> */}
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
  )
}

export default UserCountTowelButtons