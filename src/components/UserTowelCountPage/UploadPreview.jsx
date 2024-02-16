import React from 'react';

const UploadPreview = ({ files }) => {
  return (
    <div>
      {files.map((file, index) => (
        <div key={index}>
          <h3>{file.name}</h3>
          <img src={URL.createObjectURL(file)} alt={file.name} />
        </div>
      ))}
    </div>
  );
}

export default UploadPreview;
