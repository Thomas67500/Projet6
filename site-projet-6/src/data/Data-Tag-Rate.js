import JsonData from "../data/logements.json"
import React from "react"



export function DisplayDataTagRate(){
    return JsonData.map(infoData => (
        [infoData.tags,infoData.ratings,]
      ));
}	

export default DisplayDataTagRate;