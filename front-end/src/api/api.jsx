//import React from 'react';
import axios from 'axios';

// axios instance
const clientHTTP = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // mockData
    headers: {
        "Content-Type": "application/json"
    }
})

const urlSuffix = process.env.REACT_APP_USE_MOCK === "true" ? ".json" : ""// mocked routes


export async function getUserinfos(userId) {
    return await clientHTTP.get(`/user/${userId}${urlSuffix}`)
        .then(response => response.data)
}

export async function getUserActivityInfos(userId) {
    return await clientHTTP.get(`/user/${userId}/activity${urlSuffix}`)
        .then(response => response.data)
}
export async function getUserAverageSessionsInfos(userId) {
    return await clientHTTP.get(`/user/${userId}/average-sessions${urlSuffix}`)
        .then(response => response.data)
}
export async function getUserPerformanceInfos(userId) {
    return await clientHTTP.get(`/user/${userId}/performance${urlSuffix}`)
        .then(response => response.data)
}
