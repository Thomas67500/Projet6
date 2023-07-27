import { Header } from "./layout/header"
import { Footer } from "./footer"
import { Carousel } from "./layout/carousel"
import JsonData from './data/logements.json'
import listes from "../components/data/logements.json"
import {CarouselDataDisplay} from '../components/data/DataCarousel'
import TitreHote from "./layout/Logement-Titre-Hote"
import { TagRate } from "./layout/Tag-rate"
import Rating from "./layout/rating"
import Fleche_DropDown from '../img/Fleche_DropDown.png'



const Fiche_Logement = () =>{

const id = window.location.href.split('Fiche_logement/')[1];

    for(let i=0; i < listes.length; i++) {
        if(listes[i].id === id) {
            let liste = listes[i]
            return(
               
                     <section className='fiche'>
                        <div className="fiche__presta">
                            <div className="fiche__presta__title">
                                <h1>{liste.title}</h1>
                                <p>{liste.location}</p>
                                <div className="hote">
                                 <p>{liste.host.name}</p>
                                 <img src={liste.host.picture}/>   
                                </div>
                               <div className="tags-ratings">
                                <div className="tag-box">
                                 <div className="tags"> 
                                 <p> {liste.tags}</p>
                                 </div>
                                 <Rating />
                                </div>
                                </div>
                                <div className="Dropdown-box">
                                <div className='DropDown_Boite__Barre'>

                                </div>


                                </div>
                                
        
           </div>
           </div>
           </section>
           
        )}
        
        }
    }
     


      
export default Fiche_Logement

//const slides = []






/*export const Fiche_Logement = () => {
    return (
     <>
     <Header />
     <div>
        <Carousel />
     </div>
     <TitreHote />
     <TagRate />
 
     
     
     </>


    )
} 
*/
