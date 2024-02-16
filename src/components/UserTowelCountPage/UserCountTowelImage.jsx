import React, { useContext } from 'react'
import { UserCountTowelContext } from '../../context/UserCountTowelContext'

const UserCountTowelImage = () => {

  const { imageUrl, result, imageSrc } = useContext(UserCountTowelContext);

  return (
    <div className='UserCountTowelImage'>
      <div className='UserCountTowelImage'>
        {imageUrl && (
          <div className={`uploadImage ${result === undefined || result === null ? null : result ? 'green' : 'red'}`}>
            <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />
          </div>
        )}
      </div>

    </div>
  )
}

export default UserCountTowelImage