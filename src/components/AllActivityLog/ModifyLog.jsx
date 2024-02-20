import React from 'react'
import {useNavigate} from 'react-router-dom';

const ModifyLog = () => {

  const nav = useNavigate();

  return (
    <div className='modifyLog'>
        <button className='modifyButton' onClick={() => { nav('/usercounttowel') }}>수정</button>
    </div>
  )
}

export default ModifyLog