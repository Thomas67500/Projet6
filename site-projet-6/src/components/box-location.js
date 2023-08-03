import '../components/Sass/component/box-location.css'
import { Carte__location } from '../components/carte-location'
import JsonData from "../components/data/logements.json"



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