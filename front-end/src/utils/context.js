
import React, { useState, createContext, useEffect } from 'react';
import { getUserAverageSessionsInfos, getUserPerformanceInfos, getUserinfos, getUserActivityInfos, getUserScoreInfos, getUserKeyData } from '../api/api';

// User Context //

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [infos, setInfos] = useState({ userInfos: null })
    const [activity, setActivity] = useState({ sessions: [] })
    const [averageSessions, setAverageSessions] = useState({ sessions: [] })
    const [performance, setPerformance] = useState({ kind: null, data: null })
    const [score, setScore] = useState({todayScore: null})
    const [keyData, setKeyData] = useState({keyData: null})

    const [hasLoaded, setHasLoaded] = useState(false)

    const userId = 12 // or 18
    useEffect(async () => {
        const [userInfos, activity, averageSession, performance, score, keyData] = await Promise.all([
            getUserinfos(userId),
            getUserActivityInfos(userId),
            getUserAverageSessionsInfos(userId),
            getUserPerformanceInfos(userId),
            getUserScoreInfos(userId),
            getUserKeyData(userId),

        ])
        setInfos((state) => {
            state.userInfos = userInfos
            return state
        })

        setActivity((state) => {
            state.sessions = activity.sessions
            return state
        })
        setAverageSessions((state) => {
            
            state.sessions = averageSession.sessions
            return state
        })
        setPerformance((state) => {
            state.kind = performance.kind
            state.data = performance.data
            return state
        })
        setScore((state)=> {
            state.todayScore = score.todayScore
            state.score = score.score
            return state
        })
        setKeyData((state)=>{
            state.keyData = keyData
            return state
        })

        setHasLoaded(true)
    }, [])


    return (
        <UserContext.Provider value={{ ...infos, hasLoaded, activity, averageSessions, performance, score }}>
            {children}
        </UserContext.Provider>
    )

}

