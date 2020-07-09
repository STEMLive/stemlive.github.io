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
            setInterval((slideshow) => {
                let
                    activeSlide = slideshow.querySelector('.slideshow-item.active'),
                    previousSlide = activeSlide.previousElementSibling,
                    nextSlide = activeSlide.nextElementSibling,
                    lastSlide = slideshow.querySelector('.slideshow-item:last-child')
                ;

                if (previousSlide === null && lastSlide.classList.contains('is-sliding')) {
                    lastSlide.classList.remove('is-sliding');
                }

                if (nextSlide === null) {
                    nextSlide = slideshow.querySelector('.slideshow-item');
                }

                if (previousSlide != null) {
                    previousSlide.classList.remove('is-sliding');
                }

                activeSlide.classList.add('is-sliding');
                activeSlide.classList.toggle('active');
                nextSlide.classList.toggle('active');
            }, 8000, slideshow);
        });
    }
}


window.addEventListener('load', function () {
    new Slideshow('.slideshow');
});
