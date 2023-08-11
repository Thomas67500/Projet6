import JsonData from "../data/logements.json"
import React from "react"

export function JsonDataDisplay(){
	return JsonData.map(infoListe => 
    
      (
		[infoListe.id,infoListe.cover,infoListe.title]
	  ))
	} 
		
		
	
		
		
	



export default JsonDataDisplay;

