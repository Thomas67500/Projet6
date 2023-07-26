import JsonData from "../data/logements.json"
import React from "react"

export function JsonDataDescEquip(){
	return JsonData.map(infoData => 
    
      (
		[infoData.description,infoData.equipments]
	  ))}

      export default JsonDataDescEquip;