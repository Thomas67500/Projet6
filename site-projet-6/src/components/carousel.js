import { useState } from 'react';
import CarouselItem from '../components/carousel-item';
import CarouselControls from '../components/Carousel-control';
import CarouselIndicators from '../components/Carousel-indicator';
import '../styles/styles.css'


// const qui permettent l'affichage des images et de la bonne navigation entre elles

export const Carousel = ({images})=> {

    const [currentSlide,setCurrentSlide] = useState(0)
    const slides = images


    const prev = () => {
        const index = currentSlide > 0 ? currentSlide -1 : slides.length - 1
        setCurrentSlide (index)
    }


    const next = () => {
        const index = currentSlide < slides.length -1 ? currentSlide + 1 : 0
        setCurrentSlide (index)
    }




return (
<div className='container-carousel'>


 <div className='carousel'>
 <CarouselControls prev={prev} next={next} />
  <CarouselIndicators slides={slides} currentIndex={currentSlide} />
  
   <div className='carousel-inner' style={{transform:`translateX(${-currentSlide * 100}%)`}}>;
    
    {slides.map((slide,index) =>(
      <CarouselItem slide={slide} key={index} />

      
    ))}
    </div> 
    
 </div>
 
 
</div>

);


};



export default Carousel;