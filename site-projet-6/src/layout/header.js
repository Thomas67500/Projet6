import React from "react";
import { Link } from "react-router-dom"
import logo from '../img/LOGO.png'
import '../styles/styles.css'




export const Header=() =>{
return (
    <div className="Header">
    <img src={logo} alt="Logo"/>
 <nav className="Header-nav">
<Link to='/' className="link-decoration">Accueil</Link>
<Link to='/A_Propos' className="link-decoration">A Propos</Link>
 </nav>
 </div>
)

}