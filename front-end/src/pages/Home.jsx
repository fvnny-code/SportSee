import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { USER_MAIN_DATA } from '../data/mockedData';
import { UserContext } from '../utils/context';



export default function Home() {
    const UserData = USER_MAIN_DATA
    const userContext = useContext(UserContext)
    console.log(userContext)
    return (
        <>
            <h1>Select a User :</h1>
            <div className='user-container'>
                <ul className='home-users'>
                    {userContext.hasLoaded && (
                        <>
                            {UserData.map(UserData =>
                                <Link to={`/user/${UserData.id}`} key={UserData.id}>
                                    {userContext.userInfos.userInfos.firstName}
                                </Link>
                            )}
                        </>
                    )}


                </ul>
            </div>

        </>
    )
}