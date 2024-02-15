import React, { useContext } from 'react'
import uploading from '../../image/uploading.png'
import resultImg from '../../image/resultImg.png'
import { UserCountTowelContext } from '../../context/UserCountTowelContext'

const UserCountTowelButtons = () => {

  const {handlerUploadButton,handlerResultButton} = useContext(UserCountTowelContext);
  return (
    <div className='UserCountTowelButtons'>
      <div className='uploadButton' onClick={handlerUploadButton}>
        <img src={uploading} style={{height:"25px", marginRight:"15px"}}/>
        <p style={{margin:"0px"}}>UPLOAD</p>
      </div>
      <div className='checkResultButton' onClick={handlerResultButton}>
        <img src={resultImg} style={{height:"45px", marginRight:"10px", marginTop:"10px"}} />
        <p style={{margin:"0px"}}>분석하기</p>
      </div>
    </div>
  )
}

export default UserCountTowelButtons