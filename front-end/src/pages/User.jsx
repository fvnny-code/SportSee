import React, { useState, useEffect, useContext } from 'react';
import { UserContext, UserActivityContext } from '../utils/context';



export default function User() {
    const userContext = useContext(UserContext)
    const userActivityContext = useContext(UserActivityContext)
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
            {userActivityContext.hasLoaded && (
                <>
                    <h1>Bonjour,
                        <span> {userActivityContext.sessions}
                        </span>
                    </h1>
                </>
            )}

        </div>
    )
}