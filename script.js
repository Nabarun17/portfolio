let currentIndex = 0;

function showNextSlide() {
    const slides = document.querySelectorAll('.slide');
    currentIndex = (currentIndex + 1) % slides.length;
    document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 3000); 
