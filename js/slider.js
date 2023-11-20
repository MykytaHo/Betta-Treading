
let currentSlide = 0;
let touchStartX = 0;
let touchEndX = 0;

function showSlide(index) {
    const slides = document.getElementById('slides');
    const slideWidth = document.querySelector('.slide').offsetWidth;
    slides.style.transform = `translateX(${-index * slideWidth}px)`;
    currentSlide = index;
}

function nextSlide() {
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Добавляем обработчики событий для касания
document.getElementById('slider-container').addEventListener('touchstart', handleTouchStart);
document.getElementById('slider-container').addEventListener('touchend', handleTouchEnd);

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
    touchEndX = event.changedTouches[0].clientX;
    handleGesture();
}

function handleGesture() {
    if (touchEndX < touchStartX) {
        nextSlide();
    } else if (touchEndX > touchStartX) {
        prevSlide();
    }
}