import React, { useState, useEffect, useContext } from 'react';
import { UserContext, } from '../utils/context';
import ActivityChart from '../components/Charts/ActivityChart';
import { AverageSessionsChart } from '../components/Charts/AverageSessionsChart';
import { PerformanceChart } from '../components/Charts/PerformanceChart';
import { ScoreChart } from '../components/Charts/ScoreChart';



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
                                <div className='sessionDurationChart'>
                                    <AverageSessionsChart />
                                </div>
                                <div className='performanceChart'>
                                    <PerformanceChart />
                                </div>
                                <div className='scoreChart'>
                                    <ScoreChart/>
                                </div>
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