import React from 'react'

const UserTowelImageUpload =  ({ imageUrl, result }) => {
  return (
    
    <div className={`uploadImage ${result === undefined || result === null ? null : result? 'green' : 'red'}`}>
      {imageUrl && <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />}
    </div>
  );
  
};

export default UserTowelImageUpload