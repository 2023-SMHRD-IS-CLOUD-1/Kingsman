import React from 'react'

const UserTowelImageUpload =  ({ imageUrl, result }) => {
  return (
    <div>

      <div className={`uploadImage ${result === undefined || result === null ? null : result? 'green' : 'red'}`}>
        {imageUrl && <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />}
      </div>
    </div>
  );
  
};

export default UserTowelImageUpload