const CarouselIndicators = ({slides,currentIndex}) => {


  //fonction l'indicateur du slider

return (

 <div className="carousel-indicators" >

  {slides.map(( _,index)  =>  ( 

<button key={`carousel-indicators-item-${index}`} className={`carousel-indicators-item${currentIndex=== index ? ' active ':''}`}></button>

  ))}


 </div>

);
};


export default CarouselIndicators;