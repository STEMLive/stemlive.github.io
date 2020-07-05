class StickyHeader {
    constructor (header) {
        if (typeof header === 'undefined') {
            return;
        }

        this.header = document.querySelector(header);
        window.addEventListener('scroll', this.setupHeaderScroll.bind(this));
    }

    setupHeaderScroll () {
        this.header.classList.toggle('scrolled', window.pageYOffset > 50);
    }
}

window.addEventListener('load', function () {
    new StickyHeader('header');
});
