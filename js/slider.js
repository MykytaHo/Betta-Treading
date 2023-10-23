//document.addEventListener('DOMContentLoaded', function() {
//    let elems = document.querySelectorAll('.corousel');
//    let instances = M.Carousel.init(elems, {
//        fullWidth: true,
//        indicators: true
//    });
//})


//$(document)(function(){
//    $('.slider').slick();
//});

if (window.innerWidth < 768){
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider__item");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.lenght) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex=slides.length
    }
    for (i=0; i<slides.length; i++){
        slides[i].style.display= "none";

    }
    for (i=0; i<dots.length;i++){
        dots[i].className= dots[i].className.replace("active","");
    }
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className+= "active";
}
}