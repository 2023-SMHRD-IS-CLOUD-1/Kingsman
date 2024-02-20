import React, { useState } from 'react'
import analyzing from '../../image/analyzing.png'
import { CircularProgress } from '@mui/material'
import { useContext } from 'react'
import { UserCountTowelContext } from '../../context/UserCountTowelContext'
import axios from 'axios'

const UserCountTowelResult = () => {

  const { results, setResults } = useContext(UserCountTowelContext);
  const id  = sessionStorage.getItem("user")
  const sendPromotionalData = () => {
   
    let t_COUNT = results === "50개 입니다." ? 50 : 0;
        const payload2 = {
          
            t_COUNT :t_COUNT ,
            t_RESULT : results,
            t_ID : id
        };
        console.log('payload2 값 확인:', payload2);
        axios
            .post('http://localhost:8085/kingsman/CountTowel', payload2, { withCredentials: true })
            .then((response) => {
                console.log('데이터 전송 성공:', response.data);
            })
            .catch((error) => {
                console.error('데이터 전송 중 오류:', error);
            });
    
};

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