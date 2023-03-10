import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png';
import './headerStyle.css'


export default function Header() {
    return (
        <header>
            <figure>
                <img src={logo} alt="sportSee logo" />
            </figure>
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="#">Profil</NavLink>
                <NavLink to="#">Réglages</NavLink>
                <NavLink to="#">Communauté</NavLink>
            </nav>
        </header>
    )


}