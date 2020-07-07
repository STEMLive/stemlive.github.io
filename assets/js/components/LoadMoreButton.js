import FeaturedEducator from '../models/FeaturedEducator.js';

class LoadMoreButton {
    constructor (buttons) {
        if (typeof buttons === 'undefined') {
            return;
        }
        
        this.buttons = document.querySelectorAll(buttons);
        this.buttons.forEach(button => {
            button.addEventListener('click', this.initLazyLoad);
        });
    }

    initLazyLoad (e) {
        e.preventDefault();

        let
            button = e.target,
            targetElem = document.querySelector(button.dataset.targetElem)
        ;

        switch (true) {
            case targetElem.classList.contains('featured-educators'):
                let 
                    featuredEducators = document.querySelectorAll('.featured-educator');
                
                FeaturedEducator.getEducatorData(featuredEducators.length);
            break;
        }
    }
}

window.addEventListener('load', function () {
    new LoadMoreButton('.load-more-button');
});
