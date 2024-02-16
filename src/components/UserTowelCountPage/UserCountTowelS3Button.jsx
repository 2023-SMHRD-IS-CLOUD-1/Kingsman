import React, { useContext, useState } from 'react';
import AWS from "aws-sdk";
import { UserCountTowelContext } from '../../context/UserCountTowelContext';
import UploadPreview from './UploadPreview';

const UserCountTowelS3Button = () => {
    const { imageFile, setImageFile, imageSrc, setImageSrc } = useContext(UserCountTowelContext);
    const [files, setFiles] = useState([]);

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
        console.log("s3에업로드");
    };

    return (
        <div>
            <input type="file" onChange={onChangeFile} multiple />
            {/* <UploadPreview files={files} /> */}
            <button onClick={handleUploadClick}>저장</button>
        </div>
    );
}

export default UserCountTowelS3Button;
