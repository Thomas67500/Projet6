
const CarouselIndicators = ({ slides, currentIndex }) => {


  //fonction l'indicateur du slider
  let nb = slides.length;

  return (

      <div className = "carousel-indicators" >
           <button key = "carousel-indicators-item" className = "carousel-indicators-item" >

               { currentIndex + 1 } / { nb }

           </button >
      </div>

  );
};


export default CarouselIndicators;