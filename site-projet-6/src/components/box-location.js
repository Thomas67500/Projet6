import '../styles/styles.css'
import { Carte__location } from '../components/carte-location'
import JsonData from "../data/logements.json"



export const BoxLocation=() => {
return(
<main className='box-location'>
{JsonData.map((infos)=>{
            return (
          <Carte__location {...infos} key={infos.id} />   
        )})}
   
   

      

</main>





)
}