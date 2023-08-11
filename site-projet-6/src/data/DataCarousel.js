import JsonData from "../data/logements.json"


export function CarouselDataDisplay(){
	return JsonData.map(infoCarousel => 
    
      (
		[infoCarousel.pictures]
	  )) }


      export default CarouselDataDisplay;