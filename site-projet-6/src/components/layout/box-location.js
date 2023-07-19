import '../styles/box-location.css'
import { Carte__location } from './carte-location'
import JsonData from "../data/logements.json"



export const BoxLocation=() => {
return(
<div className='box-location'>
{JsonData.map((infos)=>{
            return (
          <Carte__location {...infos} key={infos.id} />   
        )})}
   
   

      

</div>





)
}