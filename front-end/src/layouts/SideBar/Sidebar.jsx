import React from "react";
import { NavLink } from "react-router-dom";

import iconMeditation from "../../assets/side-nav-icons/meditation-icon.png"
import iconCycling from "../../assets/side-nav-icons/cycling-icon.png"
import iconSwimming from "../../assets/side-nav-icons/swimming-icon.png"
import iconWeightlifting from "../../assets/side-nav-icons/weightlifting-icon.png"

import './sideBarStyle.css'

export default function SideBar() {
    return (
        <div className="sideBar-container">
            <nav className="sideBar">
                <div className="nav-wrapper">
                    <NavLink to="#">
                        <img src={iconMeditation} alt="meditation icon" />
                    </NavLink>
                    <NavLink to="#">
                        <img src={iconCycling} alt="swimming icon" />
                    </NavLink>
                    <NavLink to="#">
                        <img src={iconSwimming} alt="Cycling icon" />
                    </NavLink>
                    <NavLink to="#">
                        <img src={iconWeightlifting} alt="weight-lifting icon" />
                    </NavLink>
                </div>
                <p className="nav-text">Copyright, SportSee 2020</p>
            </nav>
        </div>
    )
}
