//import React from 'react';
import axios from 'axios';

// axios instance
const clientHTTP = axios.create({
    baseURL: "http://localhost:3000/", // mockData
    headers: {
        "Content-Type": "application/json"
    }
})
const urlSuffix = ".json" // mocked routes


export async function getUserinfos(userId) {
    return await clientHTTP.get(`/user/${userId}${urlSuffix}`)
        .then(response => response.data)

}

export async function getUserActivityInfos(userId) {
    return await clientHTTP.get(`/user/${userId}/activity`)
        .then(response => response.data)
}
export async function getUserAverageSessionsInfos(userId) {
    return await clientHTTP.get(`/user/${userId}/average-sessions`)
        .then(response => response.data)
}
export async function getUserPerformanceInfos(userId) {
    return await clientHTTP.get(`/user/${userId}/performance`)
        .then(response => response.data)
}
