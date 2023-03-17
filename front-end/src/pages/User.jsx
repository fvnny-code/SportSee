import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../utils/context';



export default function User() {

    return (
        <div className='user-infos'>
            <h1>Bonjour,
                <span className='user-name'></span>
            </h1>

        </div>
    )
}