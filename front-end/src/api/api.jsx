//import React from 'react';
import axios from 'axios';

// axios instance

/**
 * @returns client HTTP request to retrieve data
 */
const clientHTTP = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // mockData
    headers: {
        "Content-Type": "application/json"
    }
})
/**
 * @returns the json formated url suffix for macked data api calls
 */
const urlSuffix = process.env.REACT_APP_USE_MOCK === "true" ? ".json" : ""// mocked routes

/**
 * 
 * @param {number} userId 
 * @returns an object containing userInfos (firstName, lastName, age).
 */
export async function getUserinfos(userId) {
    return await clientHTTP.get(`/user/${userId}${urlSuffix}`)
        .then(response => response.data)
}

/**
 * 
 * @param {number} userId 
 * @returns and array of objects containing activity infos (date, kilogram, calories)
 */
export async function getUserActivityInfos(userId) {
    return await clientHTTP.get(`/user/${userId}/activity${urlSuffix}`)
        .then(response => response.data)
}
/**
 * 
 * @param {number} userId 
 * @returns and array of objects containing sessions infos (day and sessionLength)
 */
export async function getUserAverageSessionsInfos(userId) {
    return await clientHTTP.get(`/user/${userId}/average-sessions${urlSuffix}`)
        .then(response => response.data)
}
/**
 * 
 * @param {number} userId 
 * @returns an array containing the kind of activities, and an array of objects containing the kind of activities and their value
 */
export async function getUserPerformanceInfos(userId) {
    return await clientHTTP.get(`/user/${userId}/performance${urlSuffix}`)
        .then(response => response.data)
}
/**
 * 
 * @param {number} userId 
 * @returns the performance score value
 */
export async function getUserScoreInfos(userId) {
    return await clientHTTP.get(`/user/${userId}${urlSuffix}`)
        .then(response => response.data)
}


