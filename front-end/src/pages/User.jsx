import React, { useState, useEffect, useContext } from 'react';
import { UserContext, } from '../utils/context';
import ActivityChart from '../components/Charts/ActivityChart';



export default function User() {
    const userContext = useContext(UserContext)

    return (
        <div className='main'>
            {userContext.hasLoaded && (
                <>
                    <h1>Bonjour,
                        <span className='user-name'> {userContext.userInfos.userInfos.firstName}
                        </span>
                    </h1>
                    <section className='charts'>
                        <article>
                            <div className='activityChart'>
                                <ActivityChart />
                            </div>
                            <div className='chartsContainer'>
                                <div className='sessionDurationChart'>Durée moyenne des sessions</div>
                                <div className='performanceChart'>Peformances</div>
                                <div className='scoreChart'>Score</div>
                            </div>
                        </article>
                        <aside>
                            Nutrition cards :
                            <ul>calories</ul>
                            <ul>Protéines</ul>
                            <ul>Glucides</ul>
                            <ul>Lipides</ul>
                        </aside>
                    </section>
                </>
            )
            }


        </div >
    )
}