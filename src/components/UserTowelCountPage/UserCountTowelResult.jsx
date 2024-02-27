import React, { useState } from 'react'
import analyzing from '../../image/analyzing.png'
import { CircularProgress } from '@mui/material'
import { useContext } from 'react'
import { UserCountTowelContext } from '../../context/UserCountTowelContext'

const UserCountTowelResult = () => {

  const { results } = useContext(UserCountTowelContext);

  return (
    <div className='UserCountTowelResult'>
      {results !== undefined && results !== null ? (
        <>
          {results === "50개 입니다." ? (
            <h4 className='green' style={{margin:"0px"}}>50개 입니다.</h4>
          ) : (
            <h4 className='red' style={{margin:"0px"}}>50개가 아닙니다.</h4>
          )}
        </>
      ) : (
        <div style={{ display: "flex" }}>
          <CircularProgress style={{ height: "40px", marginRight: "20px",marginBottom:"3px", color: "gray" }} />
          <p style={{ margin: "0px",marginTop:"5px", color: "gray" }}>분석중입니다....</p>
        </div>
      )}
    </div>
  );
}

export default UserCountTowelResult