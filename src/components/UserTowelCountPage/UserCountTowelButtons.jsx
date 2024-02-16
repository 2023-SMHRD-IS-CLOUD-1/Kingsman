import React, { useContext, useState } from 'react'
import uploading from '../../image/uploading.png'
import resultImg from '../../image/resultImg.png'
import { UserCountTowelContext } from '../../context/UserCountTowelContext'
import AWS from "aws-sdk";

const UserCountTowelButtons = () => {
  const { setImageUrl } = useContext(UserCountTowelContext);
  const [files, setFiles] = useState([]);

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
      console.log("파일을 s3에 업로드했습니다. URL:", imageUrl);
    } catch (error) {
      console.error("파일 업로드 중 오류가 발생했습니다:", error);
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

  return (
    <div className='UserCountTowelButtons'>
      <div className='uploadButton'>
        <label htmlFor="uploadInput" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={uploading} style={{ height: "25px", marginRight: "15px" }} />
          <input id="uploadInput" type="file" onChange={onChangeFile} multiple style={{ display: 'none' }} />
          <p style={{ margin: "0px" }}>UPLOAD</p>
        </label>
      </div>
      <div className='checkResultButton'>
        <img src={resultImg} style={{ height: "45px", marginRight: "10px", marginTop: "10px" }} />
        <p style={{ margin: "0px" }}>분석하기</p>
      </div>
    </div>
  );
};

export default UserCountTowelButtons;
