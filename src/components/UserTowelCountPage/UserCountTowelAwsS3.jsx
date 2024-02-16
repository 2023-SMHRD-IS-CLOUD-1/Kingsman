import React, { useContext, useState } from 'react'
import { UserCountTowelContext } from '../../context/UserCountTowelContext';

const UserCountTowelAwsS3 = () => {

    const {imageFile, setImageFile, imageSrc, setImageSrc}= useContext(UserCountTowelContext)

    const onUpload = (e)=>{
        const file = e.target.files[0];
        const fileExt = file.name.split('.').pop();


        if(!['jpeg','png','jpg','JPG','PNG','JPEG'].includes(fileExt)){
            window.alert('jpg,png,jpg 파일만 업로드가 가능합니다.')
            return;
        }

   
        const reader = new FileReader()
        reader.readAsDataURL(file);

    
        return new Promise((resolve) =>{
            reader.onload=()=>{
         
                setImageSrc(reader.result || null);
          
                setImageFile(file);
                resolve();
            };
        });
    }

  return (
    <div>
        <input 
        accept='image/*'
        type="file"
        onChange={onUpload} />
    </div>
  )
}

export default UserCountTowelAwsS3