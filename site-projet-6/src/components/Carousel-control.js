import left from '../img/left.png'
import right from '../img/right.png'

const CarouselControls = ({ prev, next}) => {



    //fonction pour la navigation du slider
return (
 <>
 <button className="carousel-control left" onClick={prev}> <img src={left} alt ="gauche"/>  </button>
 <button className="carousel-control right"onClick={next}> <img src={right} alt='droite' /> </button>

 </>
 




)
}

export default CarouselControls