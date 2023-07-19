import JsonData from "../data/logements.json"
import React from "react"

export function JsonDataDisplay(){
	return JsonData.map(infoListe => 
    
      (
		[infoListe.id,infoListe.cover,infoListe.title]
	  ))

	 
	/*const DisplayDataDetails=JsonData.map(infoDetails) => {
    
		return(
		  [infoDetails.description,infoDetails.host,infoDetails.ratings,infoDetails.location,infoDetails.equipments,infoDetails.tags]
		);
  
  
	  }  
	  const DisplayDataImage=JsonData.map(infoImage) => {
    
		return(
		  [infoImage.pictures]
		);
  
  
	  } ; */
	} 
		
		
	export function DisplayDataDetails(){
		return JsonData.map(infoDetails => (
			[infoDetails.description,infoDetails.host,infoDetails.ratings,infoDetails.location,infoDetails.equipments,infoDetails.tags]
		  ));
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

