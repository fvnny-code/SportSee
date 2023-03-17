
import React, { useState, createContext, useEffect } from 'react';
import { getUserinfos } from '../api/api';

// User Context //

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [infos, setInfos] = useState({ userInfos: null })
    const [hasLoaded, setHasLoaded] = useState(false)
    const userId = 12 // or 18

    useEffect(async () => {
        const userInfos = await getUserinfos(userId)

        setInfos((state) => {
            state.userInfos = userInfos
            return state
        })
        setHasLoaded(true)
    }, [])


    return (
        <UserContext.Provider value={{ ...infos, hasLoaded }}>
            {children}
        </UserContext.Provider>
    )

}