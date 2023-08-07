import { Header } from "../header"
import {Banner_Propos} from "../Banner_A_Propos"
import {DropDown} from '../DropDown'
import { Footer } from "../footer"
import DataAccordeon from "../data/Data-A-Propos"



export const A_Propos = () => {
    return (
     <>
        <Header   />
        <Banner_Propos />
       
       
        <div className = "standard-box" >
        <DropDown title = "fiabilite" />
        <div className = "box" >
        Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes aux logements,
        et toutes les informations sont régulièrement vérifiées par nos équipes. 
        </div> 
        <DropDown title = "respect" />
        <div className = "box">
        La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme. 
        </div>
        <DropDown title = "service" />
        <div className = "box" >
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
        perturbation du voisinage entraînera une exclusion de notre plateforme.
        </div>
        <DropDown title = "sécurité" />
        <div className = "box" >
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logementcorrespond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
        également des ateliers sur la sécurité domestique pour nos hôtes.
        </div>    
        </div>
        <Footer />  
        </>
        
    
     



    )
}