
import React, { useState, createContext } from 'react';

// User Context //

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [infos, setInfos] = useState({})
    const saveInfos = (newInfos) => {
        setInfos({ ...infos, ...newInfos })
    }
    return (
        <UserContext.Provider value={{ infos, saveInfos }}>
            {children}
        </UserContext.Provider>
    )

}