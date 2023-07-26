import JsonData from "../data/logements.json"
import React from "react"

export function JsonDataDisplay(){
	return JsonData.map(infoListe => 
    
      (
		[infoListe.id,infoListe.cover,infoListe.title]
	  ))
	} 
		
		
	
		
		
		
		


/* export function JsonDataDisplay(){
	const DisplayData=JsonData.map(
		(info)=>{
			return(

             

				<tr>
					<td>{info.id}</td>
					<td>{info.title}</td>
					<td>{info.cover}</td>
                    <td>{info.pictures}</td>
					<td>{info.description}</td>
					<td>{info.host}</td>


                    <td>{info.rating}</td>
					<td>{info.location}</td>
					<td>{info.equipments}</td>



                    <td>{info.tags}</td>


				</tr>
			)
		}
	)
 */

export default JsonDataDisplay;

