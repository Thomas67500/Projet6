import '../styles/Dropdown.css'
import Fleche_DropDown from '../img/Fleche_DropDown.png'
import { useEffect, useState } from 'react'
import { render } from 'react-dom'



const DataAccordeon =[
  {
      id:'1',
      title:"Fiabilité",
   content:"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
},


{
  id:'2',
  title:"Respect",
content :"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
},



{  id:'3',
  title:"Service",
content :"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
},


{ id :'4',
  title:"Sécurité",
content :"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'aulocataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisonségalement des ateliers sur la sécurité domestique pour nos hôtes."
}
];


export const DropDown = () => {

const [selected,setSelected] = useState(null)

  const toggle= (i) => {
     if (selected == i){
      return setSelected(null)
     }
     setSelected(i)
  }
    return (
     <>
     <div className='DropDown_Boite'>
      {DataAccordeon.map((item,i) =>(
       <>
        <div className='DropDown_Boite__Barre'> <h3>{item.title}</h3>
        <img src={Fleche_DropDown} alt='Fleche'className={selected ===i ?'DropDown_Boite__Barre__Fleche__Animated' 
        :'DropDown_Boite__Barre__Fleche'} onClick={()=> toggle(i)}/> 

            </div>

            <div className={selected === i ?`DropDown_Boite__Barre__Texte__Toggle_` :`DropDown_Boite__Barre__Texte_`}> 
        
            <p>{item.content}</p>
            </div>
            </>

      ))}

     </div>

     </>

    
)}
    



