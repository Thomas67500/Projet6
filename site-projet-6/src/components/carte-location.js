import '../styles/styles.css'
import { Link } from 'react-router-dom'




export const Carte__location=(JsonDataDisplay) => {
return(
<div className='carte'>
<Link to ={`Fiche_logement/${JsonDataDisplay.id}`}> 
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