// UserCountTowelContextProvider.js
import React, { useState } from 'react';
import UploadButtonClickContext from './UploadButtonClickContext';

const UserCountTowelContextProvider = ({ children }) => {
    const [uploadClicked, setUploadClicked] = useState(false);

    return (
        <UploadButtonClickContext.Provider value={{ uploadClicked, setUploadClicked }}>
            {children}
        </UploadButtonClickContext.Provider>
    );
};

export default UserCountTowelContextProvider;