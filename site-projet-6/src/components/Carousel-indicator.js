
const CarouselIndicators = ({ slides, currentIndex }) => {


  //fonction l'indicateur du slider
  let nb = slides.length;

  return (

      <div className = "carousel-indicators" >
           <p key = "carousel-indicators-item" className = "carousel-indicators-item" >

               { currentIndex + 1 } / { nb }

           </p >
      </div>

  );
};


export default CarouselIndicators;