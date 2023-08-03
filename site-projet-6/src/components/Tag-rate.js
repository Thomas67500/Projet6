import { useState } from "react"
import DisplayDataTagRate from "../components/data/Data-Tag-Rate" 


export const TagRate= (DisplayDataTagRate) => {

const [rating, setRating] = useState(0)

return (

<div className="box-tags-rate">

<div className="tags-box">

<p className="tags">{DisplayDataTagRate.tags} </p>

</div>


<div className="rate">
    {DisplayDataTagRate.rating}
    
</div>

</div>



)
}