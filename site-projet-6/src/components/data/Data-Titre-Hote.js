import JsonData from "../data/logements.json"
import React from "react"

export function JsonDataTitreHote(){
	return JsonData.map(infoHote => 
    
      (
		[infoHote.title]
	  ))
	} 

    export default JsonDataTitreHote;