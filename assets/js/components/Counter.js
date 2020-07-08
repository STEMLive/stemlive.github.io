class Counter {
    constructor (counters) {
        if (typeof counters === 'undefined') {
            return;
        }

        this.counters = document.querySelectorAll(counters);

        if (this.counters === null) {
            return;
        }

        this.startCount();

    }

    startCount () {
        this.counters.forEach(counter => {
            let
                currentValue = 0,
                total = parseInt(counter.innerText.match(/[0-9]+/)[0])
            ;

            if (typeof total === 'undefined') {
                return;
            }

            counter.innerText = counter.innerText.replace(/[0-9]+/, currentValue);

            let
                timer = setInterval(() => {
                    currentValue += 1;
                    counter.innerText = currentValue;

                    if (currentValue === total) {
                        clearInterval(timer);
                    }
                }, 500)
            ;

        });
    }
}

window.addEventListener('load', function () {
    new Counter('.counter');
});
