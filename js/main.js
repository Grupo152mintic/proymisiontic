document.addEventListener('DOMContentLoaded',()=>{
const elementosCarousel= document.querySelectorAll('.carousel');
M.Carousel.init(elementosCarousel,{

    duration:800,
    shift: 5,
    padding: 5,
    numVisible: 1,
    indicators: true,
    
});



});