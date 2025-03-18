const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
let slideIndex = 0;
function showSlide(index) {
    if(index >= slides.length - 2){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex += slides.length - 2; 
    }
    else{
        slideIndex = index;
    }
    slider.style.transform = `translateX(-${slideIndex * 440}px)`;
}
document.getElementById('prev').addEventListener('click', () => showSlide(slideIndex -= 1));
document.getElementById('next').addEventListener('click', () => showSlide(slideIndex += 1));