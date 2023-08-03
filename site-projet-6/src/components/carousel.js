import { useState,useEffect } from 'react';
import {CarouselDataDisplay} from '../components/data/DataCarousel'
import CarouselItem from '../components/carousel-item';
import CarouselControls from '../components/Carousel-control';
import CarouselIndicators from '../components/Carousel-indicator';
import listes from '../components/data/logements.json'
import '../components/Sass/component/carousel.css'

export const Carousel = ()=> {

    const [currentSlide,setCurrentSlide] = useState(0)


    const prev = () => {
        const index = currentSlide > 0 ? currentSlide -1 : slides.length - 1
        setCurrentSlide (index)
    }


    const next = () => {
        const index = currentSlide < slides.length -1 ? currentSlide + 1 : 0
        setCurrentSlide (index)
    }


const slides = [
 "https://picsum.photos/id/5/800/400",
 'https://picsum.photos/id/4/800/400',
 'https://picsum.photos/id/15/800/400',
 "https://picsum.photos/id/17/800/400", 



]

return (
<div className='container'>

 <div className='carousel'>

   <div className='carousel-inner' style={{transform:`translateX(${-currentSlide * 100}%)`}}>

    {slides.map((slide,index) =>(
      <CarouselItem slide={slide} key={index} />


    ))}
    </div> 
 </div>
 <CarouselIndicators slides={slides} currentIndex={currentSlide} />
 <CarouselControls prev={prev} next={next} />
</div>

);
};



export default Carousel;