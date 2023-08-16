import { Header } from "../layout/header"
import { Footer } from "../layout/footer"
import { Carousel } from "../components/carousel"
import listes from "../data/logements.json"
import { useParams } from "react-router-dom"
import {DropDown} from '../components/DropDown'
import fullStar from '../img/fullstar.svg'
import emptyStar from '../img/emptystar.svg'
import '../styles/styles.css'




const Fiche_Logement = () => {

    

    const { id } = useParams();

   
   
    for (let i = 0; i < listes.length; i++) {
        if (listes[i].id === id) {
            let liste = listes[i]
           
           


            return (
                    
                    <>
                    <Header />
                    <main className="bloc-produit">
                    <Carousel images = {liste.pictures}  /> 
                    <div className = "productPage__pres" >
                    <div className = "productPage__title" >
                    <h1> { liste.title } </h1> 
                    <p> { liste.location } </p>
                    <div className="blocTag">
                    {liste.tags.map((tag: string, index) => {
                        return ( 
                            
                            <span key = { index } className = 'tagBox' > { tag } </span>
                            

                        )
                       
                    })
                }
                </div>  
                </div> 
                <div className = 'productPage__rating' >
                <div className="rating-star"> {[...Array(parseInt(liste.rating))].map((data, index) => {
                        return ( 
                            <img key = { index } src = { fullStar } alt = ''className = 'star' />
                        )
                    })
                } 
                {[...Array(5 - parseInt(liste.rating))].map((data, index) => {
                        return ( 
                            <img key = { index } src = { emptyStar } alt = '' className = 'star' />
                        )
                    })
                } 
                
                </div> 
                
                <div className = "host" >
                <span className="nom-hote" > { liste.host.name } </span> 
                <img className="image-hote" src = { liste.host.picture } alt = { liste.host.name }/> 
                </div > 
                </div> 
                </div> 
                 <div className="bloc-logement-dropdown">
                <div className = "standard-box__logement" >
                <DropDown title = 'Description' />
                <p className = 'box' > { liste.description } </p> 
                </div > 
                <div className = "standard-box__logement" >
                <DropDown title = 'Equipements' />
                <ul className = 'Equipments__list box'> 
                {liste.equipments.map((equipment: string, index) => {
                        return ( 
                            <li key = { index } > { equipment } </li>
                        )
                    })
                } 
                </ul> 
                </div>
                </div>
                </main>
                <Footer /> 
                </>

        )
    }
    

    

     
}
}





export default Fiche_Logement

