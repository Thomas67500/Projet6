import '../styles/Dropdown.css'
import Fleche_DropDown from '../img/Fleche_DropDown.png'
import { useState } from 'react'
import { render } from 'react-dom'



export const DropDown = () => {
  const [show,setShow] = useState(true)
  
   const showState = () => {
    setShow(show ? false:true)
   }


console.log(show);
    return (
     <>
     <div className='DropDown_Boite' onClick={showState}>
          <div className='DropDown_Boite__Barre'> Fiabilité
          
          <img src={Fleche_DropDown} alt='Fleche' className={show ?'DropDown_Boite__Barre__Fleche__Animated' : 
          'DropDown_Boite_Barre_Fleche'} 
             
          />
          
         </div>

            <div className={show ?'DropDown_Boite__Barre__Fleche__Toggle_Animated' :'DropDown_Boite__Barre__Fleche__Toggle'} 
            >
            <p aria-hidden= {show ? 'true' : 'false'}>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
 régulièrement vérifiées par nos  équipes.</p>


            </div>

            </div>

        
      
     </>



    )
}


