import '../Sass/layout/Erreur.css'
import { Link } from "react-router-dom"
import {Header} from '../header'
import { Footer } from '../footer'


export const Erreur = () => {
    return (

<>
     <Header /> 
    <div className='bloc-erreur'>
     <div className="bloc-erreur__chiffre">
        404
     </div>

     <div className='bloc-erreur__chiffre__texte'>
        Oups! La page que vous demandez n'existe pas.
     </div>
    

    <nav className='bloc-erreur__chiffre__texte__lien'>

      <Link to ='/'> Retourner sur la page d'accueil </Link>
    </nav>
    </div>
    <Footer />
    </>
    )
}