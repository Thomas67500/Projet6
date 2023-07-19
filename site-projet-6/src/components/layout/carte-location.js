import '../styles/carte.css'
import {JsonDataDisplay} from '../data/logement'
import JsonData from "../data/logements.json"
import { Link } from 'react-router-dom'




export const Carte__location=(JsonDataDisplay) => {
return(
<div className='carte'>
<Link to ='Fiche_logement'> 
   <article className='carte__contenu'>
     
     <img  className='carte__img'src={JsonDataDisplay.cover}  />
       <div className='carte__titre'>
       {JsonDataDisplay.title}
       </div>
       
      </article>

   </Link>

</div>





)
}