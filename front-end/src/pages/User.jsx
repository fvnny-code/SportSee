import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../utils/context';



export default function User() {
    const userContext = useContext(UserContext)
    return (
        <div className='user-infos'>
            {userContext.hasLoaded && (
                <>
                    <h1>Bonjour,
                        <span className='user-name'> {userContext.userInfos.userInfos.firstName}
                        </span>
                    </h1>
                </>
            )}


        </div>
    )
}