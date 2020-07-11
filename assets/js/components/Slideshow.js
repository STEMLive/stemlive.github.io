class Slideshow {
    constructor (slideshows) {
        if (typeof slideshows === 'undefined') {
            return;
        }

        this.slideshows = document.querySelectorAll(slideshows);
        this.configureSlideshow();
    }

    configureSlideshow () {
        if (typeof this.slideshows === 'undefined' || this.slideshows.length < 1) {
            return;
        }

        this.slideshows.forEach(slideshow => {
            let
                slideTransition = setInterval((slideshow) => {
                    if (slideshow.classList.contains('manual-sliding')) {
                        clearInterval(slideTransition);
                        return;
                    }

                    let
                        activeSlide = slideshow.querySelector('.slideshow-item.active'),
                        previousSlide = activeSlide.previousElementSibling,
                        nextSlide = activeSlide.nextElementSibling,
                        lastSlide = slideshow.querySelector('.slideshow-item:last-of-type')
                    ;


                    if (previousSlide === null && lastSlide.classList.contains('is-sliding')) {
                        lastSlide.classList.remove('is-sliding');
                    }

                    if (nextSlide === null || !nextSlide.classList.contains('slideshow-item')) {
                        nextSlide = slideshow.querySelector('.slideshow-item');
                    }

                    if (previousSlide != null) {
                        previousSlide.classList.remove('is-sliding');
                    }

                    activeSlide.classList.add('is-sliding');
                    activeSlide.classList.toggle('active');
                    nextSlide.classList.toggle('active');
                }, 10000, slideshow),
                slideArrows = slideshow.querySelectorAll('.slide-arrow') 
            ;

            slideArrows.forEach(slideArrow => {
                slideArrow.addEventListener('click', this.triggerManualSliding);
            });
        });
    }

    triggerManualSliding (e) {
        e.preventDefault();

        let
            arrow = e.currentTarget,
            slideshow = arrow.parentElement,
            slidePosition = arrow.dataset.slidePosition
        ;

        if (!slideshow || !slideshow.classList.contains('slideshow')) {
            return false;
        }

        if (!slideshow.classList.contains('manual-sliding')) {
            slideshow.classList.add('manual-sliding');
        }

        let
            animatedSlides = slideshow.querySelectorAll('.slideshow-item.is-sliding'),
            activeSlide = slideshow.querySelector('.slideshow-item.active'),
            lastSlide = slideshow.querySelector('.slideshow-item:last-of-type'),
            previousSlide = (activeSlide != null && activeSlide.previousElementSibling != null && activeSlide.previousElementSibling.classList.contains('slideshow-item')) ? activeSlide.previousElementSibling : lastSlide,
            nextSlide = (activeSlide != null && activeSlide.nextElementSibling != null && activeSlide.nextElementSibling.classList.contains('slideshow-item')) ? activeSlide.nextElementSibling : slideshow.querySelector('.slideshow-item')
        ;

        if (animatedSlides.length > 0) {
            animatedSlides.forEach(animatedSlide => {
                animatedSlide.classList.remove('is-sliding');
            });
        }

        activeSlide.classList.add('is-sliding');
        activeSlide.classList.toggle('active');

        if (slidePosition === 'prev') {
            previousSlide.classList.toggle('active');
        } else if (slidePosition === 'next') {
            nextSlide.classList.toggle('active');
        }
    }
}


window.addEventListener('load', function () {
    new Slideshow('.slideshow');
});
