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
                    nextSlide = activeSlide.nextElementSibling
                ;

                activeSlide.classList.toggle('active');
                nextSlide.classList.toggle('active');
            }, 8000, slideshow);
        });
    }
}


window.addEventListener('load', function () {
    new Slideshow('.slideshow');
});
