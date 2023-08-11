import '../styles/styles.css'
import Fleche_DropDown from '../img/Fleche_DropDown.png'
import { useState } from 'react'




 //fonction qui va afficher le nom des dropdown et verifier si la barre est cliquée pour declencher l'animation
 
export const DropDown = ({ title }: { title: string }) => {

  const [selected, setSelected] = useState(true)

  const toggle = () => {
      setSelected(selected ? false : true)
  }

  return ( 
    <div className = {selected === true ?  `dropdown_bloc ${title}_animated` : `dropdown_bloc ${title}`}onClick = { toggle }>
        <h2 > { title } </h2> 
        <img src = { Fleche_DropDown } alt = "" /> 
        </div >

  )
}

export default DropDown

