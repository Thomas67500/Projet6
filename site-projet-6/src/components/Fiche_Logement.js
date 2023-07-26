import { Header } from "./layout/header"
import { Footer } from "./footer"
import { Carousel } from "./layout/carousel"
import JsonData from './data/logements.json'
//import {ImageSlider} from'./layout/carousel'
import listes from "../components/data/logements.json"
import {CarouselDataDisplay} from '../components/data/DataCarousel'
import TitreHote from "./layout/Logement-Titre-Hote"
import { TagRate } from "./layout/Tag-rate"


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
