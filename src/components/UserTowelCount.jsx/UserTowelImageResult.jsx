import React from 'react'

const UserTowelImageResult = ({result}) => {
  return result !== undefined && result !== null ? (
    <div>
      {result ?
        <h3 className='green'>50개 입니다.</h3> :
        <h3 className='red'>50개가 아닙니다.</h3>
      }
    </div>
  ) : null;
}

export default UserTowelImageResult