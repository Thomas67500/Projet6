import React from "react"
import '../index.css'
import logoFooter from '../components/img/LOGO-FOOTER.png'

export const Footer=() =>{
    return (
        <>
        <div className="Footer">
        <img src={logoFooter}  className="footer-logo" alt="Logo du footer"/>
        <h3 className="footer-texte"> © 2020 Kasa. All rights reserved </h3>
     </div>
     </>
    )
    
    }