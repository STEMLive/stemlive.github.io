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
            if (typeof elem.dataset.targets === 'undefined' || (typeof elem.dataset.minWidth != 'undefined' && typeof parseInt(elem.dataset.minWidth) != 'number') || (typeof elem.dataset.minWidth  != 'undefined' && window.outerWidth < parseInt(elem.dataset.minWidth))) {
                return;
            }

            let
                tagName = elem.tagName.toLowerCase(),
                elemClasses = new Array(elem.classList),
                elemCssSelector = new String(tagName + '.' + elemClasses.join().replace(/\s/g, '.')),
                targetsSelector = new String(elemCssSelector + ' ' + elem.dataset.targets),
                targets = document.querySelectorAll(targetsSelector),
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
