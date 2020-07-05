class EqualiseHeights {
    constructor (elems) {
        if (typeof elems === 'undefined') {
            return;
        }
        
        this.elems = document.querySelectorAll(elems);
        this.equaliseHeights();

        window.addEventListener('resize', this.equaliseHeights.bind(this));
    }

    equaliseHeights () {
        this.elems.forEach((elem) => {
            if (typeof elem.dataset.targets === 'undefined' || (typeof parseInt(elem.dataset.minWidth) != 'number' || window.outerWidth < parseInt(elem.dataset.minWidth))) {
                return;
            }

            var 
                targets = elem.querySelectorAll(elem.dataset.targets),
                maxHeights = []
            ;

            targets.forEach(target => {
                if (!maxHeights[target.nodeName.toLowerCase()]) {
                    maxHeights[target.nodeName.toLowerCase()] = target.offsetHeight;
                    target.style.height = new String(maxHeights[target.nodeName.toLowerCase()] + 'px');
                    return;
                }

                if (target.offsetHeight > maxHeights[target.nodeName.toLowerCase()]) {
                    maxHeights[target.nodeName.toLowerCase()] = target.offsetHeight;
                }
            });

            targets.forEach(target => {
                target.style.height = new String(maxHeights[target.nodeName.toLowerCase()] + 'px');
            });
        });
    }
}

window.addEventListener('load', function () {
    new EqualiseHeights('.equalise-heights');
});
