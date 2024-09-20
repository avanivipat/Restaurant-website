document.addEventListener('DOMContentLoaded', function () {
    const nextButtons = document.querySelectorAll('.next-slide');
    const prevButtons = document.querySelectorAll('.prev-slide');

    nextButtons.forEach(button => {
        button.addEventListener('click', function () {
            console.log('Next button clicked'); // Debugging log
            const currentSlide = this.closest('.hero-slider');
            const nextSlide = document.querySelector(this.getAttribute('data-next'));
            console.log('Current Slide:', currentSlide.id); // Debugging log
            console.log('Next Slide:', nextSlide.id); // Debugging log

            if (nextSlide) {
                currentSlide.style.display = 'none';
                nextSlide.style.display = 'flex';
            } else {
                console.error('Next slide not found!'); // Debugging log
            }
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', function () {
            console.log('Previous button clicked'); // Debugging log
            const currentSlide = this.closest('.hero-slider');
            const prevSlide = document.querySelector(this.getAttribute('data-prev'));
            console.log('Current Slide:', currentSlide.id); // Debugging log
            console.log('Previous Slide:', prevSlide.id); // Debugging log

            if (prevSlide) {
                currentSlide.style.display = 'none';
                prevSlide.style.display = 'flex';
            } else {
                console.error('Previous slide not found!'); // Debugging log
            }
        });
    });
});
