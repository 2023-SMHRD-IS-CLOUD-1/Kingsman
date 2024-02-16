import React from 'react'
import analyzing from '../../image/analyzing.png'
import { CircularProgress } from '@mui/material'

const UserCountTowelResult = ({ result }) => {
  return (
    <div className='UserCountTowelResult'>
      {result !== undefined && result !== null ? (
        <>
          {result ? (
            <h3 className='green'>50개입니다.</h3>
          ) : (
            <h3 className='red'>50개가 아닙니다.</h3>
          )}
          <CircularProgress style={{ height: "40px", marginRight: "20px", color: "gray" }} />
          <p style={{ margin: "0px", color: "gray" }}>분석중입니다....</p>
        </>
      ) : (
        <p style={{ margin: "0px", color: "gray" }}>이미지를 올려주세요.</p>
      )}
    </div>
  );
}

export default UserCountTowelResult
