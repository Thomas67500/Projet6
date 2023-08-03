import '../components/Sass/component/Dropdown.css'
import Fleche_DropDown from '../components/img/Fleche_DropDown.png'
import { useEffect, useState } from 'react'
import { render } from 'react-dom'
import { useParams } from "react-router-dom"
import DataAccordeon from './data/Data-A-Propos'




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

