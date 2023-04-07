
import React, { useState, createContext, useEffect } from 'react';
import { getUserAverageSessionsInfos, getUserPerformanceInfos, getUserinfos, getUserActivityInfos } from '../api/api';

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

export const UserActivityContext = createContext();
export const UserActivityProvider = ({ children }) => {
    const [activity, setActivity] = useState({ sessions: [] })
    const [hasLoaded, setHasLoaded] = useState(false)

    const userId = 12
    const sessions = [
        {
            day: '2020-07-01',
            kilogram: 80,
            calories: 240
        },
        {
            day: '2020-07-02',
            kilogram: 80,
            calories: 220
        },
        {
            day: '2020-07-03',
            kilogram: 81,
            calories: 280
        },
        {
            day: '2020-07-04',
            kilogram: 81,
            calories: 290
        },
        {
            day: '2020-07-05',
            kilogram: 80,
            calories: 160
        },
        {
            day: '2020-07-06',
            kilogram: 78,
            calories: 162
        },
        {
            day: '2020-07-07',
            kilogram: 76,
            calories: 390
        }
    ]
    useEffect(async () => {
        const sessions = await getUserActivityInfos(userId)
        setActivity((state) => {
            state.sessions = activity
            return state
        })
        setHasLoaded(true)

    }, [])
}