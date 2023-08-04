import { Header } from "../header"
import { Footer } from "../footer"
import { Carousel } from "../carousel"
import listes from "../data/logements.json"
import { useParams } from "react-router-dom"
import {DropDown} from '../DropDown'
import fullStar from '../img/fullstar.png'
import emptyStar from '../img/emptystar.png'
import '../Sass/layout/Fiche_Logement.css'




const Fiche_Logement = () => {

    //const id = window.location.href.split('Fiche_logement/')[1];

    const { id } = useParams();
   
    for (let i = 0; i < listes.length; i++) {
        if (listes[i].id === id) {
            let liste = listes[i]


            return (
                    /*<Slider images={product.pictures} />*/
                    <>
                    <Header />
                    <div>
                    <Carousel />
                    </div> 
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
                <div> {[...Array(parseInt(liste.rating))].map((data, index) => {
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
                <DropDown title = 'description' />
                <p className = 'box' > { liste.description } </p> 
                </div > 
                <div className = "standard-box__logement" >
                <DropDown title = 'equipements' />
                <ul className = 'equipments__list box'> 
                {liste.equipments.map((equipment: string, index) => {
                        return ( 
                            <li key = { index } > { equipment } </li>
                        )
                    })
                } 
                </ul> 
                </div>
                </div>
                <Footer /> 
                </>

        )
    }
}
}




export default Fiche_Logement

