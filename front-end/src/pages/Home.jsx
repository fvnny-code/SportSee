import React from 'react';
import { Link } from 'react-router-dom';
import { USER_MAIN_DATA } from '../data/mockedData';



export default function Home() {
    const UserData = USER_MAIN_DATA

    return (
        <>
            <h1>Select a User :</h1>
            <div className='user-container'>
                <ul className='home-users'>
                    {UserData.map(UserData =>
                        <Link to={`/user/${UserData.id}`} key={UserData.id}>
                            {UserData.userInfos.firstName}
                        </Link>
                    )}

                </ul>
            </div>

        </>
    )
}