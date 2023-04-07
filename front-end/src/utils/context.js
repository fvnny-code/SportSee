
import React, { useState, createContext, useEffect } from 'react';
import { getUserAverageSessionsInfos, getUserPerformanceInfos, getUserinfos, getUserActivityInfos } from '../api/api';

// User Context //

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [infos, setInfos] = useState({ userInfos: null })
    const [activity, setActivity] = useState({ sessions: [] })
    const [averageSessions, setAverageSessions] = useState({ sessions: [] })
    const [performance, setPerformance] = useState({ kind: null, data: null })

    const [hasLoaded, setHasLoaded] = useState(false)

    const userId = 12 // or 18
    useEffect(async () => {
        const [userInfos, activity] = await Promise.all([
            getUserinfos(userId),
            getUserActivityInfos(userId),
            getUserAverageSessionsInfos(userId),
            getUserPerformanceInfos(userId)

        ])
        setInfos((state) => {
            state.userInfos = userInfos
            return state
        })

        setActivity((state) => {
            state.sessions = activity
            return state
        })
        setAverageSessions((state) => {
            state.sessions = averageSessions
            return state
        })
        setPerformance((state) => {
            state.kind = performance.kind
            state.data = performance.data
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

