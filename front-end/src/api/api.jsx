import React from 'react';
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

export async function getActivityInfos() {

}
export async function getSessionsInfos() {

}
export async function getPerformanceInfos() {

}
