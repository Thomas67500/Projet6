import JsonDataTitreHote from "./data/Data-Titre-Hote";

export const TitreHote = (JsonDataTitreHote) => {
return (
<>
<div className="Titre-Hote">

    <div className="Titre-Location">
    <h2 className="Titre"> {JsonDataTitreHote.title}</h2>
    <p className="Location"> Paris,ile-de-France</p>
    </div>

         <div className="Hote-Logement">
         <p className="Nom-hote"> Alexandre Dumas</p>
         <img src="https://fastly.picsum.photos/id/662/200/300.jpg?hmac=jdGUtAdbjqLXAnuKsUBMfmHw-1uVMo7pgJZTdttSRb8" className="Photo-Hote"/>
    
        </div>

</div>

</>
)
}

export default TitreHote;