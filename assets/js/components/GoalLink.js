class GoalLink {
    constructor (goalLink) {
        if (typeof goalLink === 'undefined') {
            return;
        }
        
        this.goalLinks = document.querySelectorAll(goalLink);

        if (typeof this.goalLinks === 'undefined' || !this.cookiesAlreadyAccepted() || !isProduction) {
            return false;
        }

        this.goalLinks.forEach((goalLink) => {
            goalLink.addEventListener('click', this.goalClickEvent);
        });
    }

    cookiesAlreadyAccepted () {
        let 
            trackGoogle = localStorage.getItem('track-google')
        ;

        return (typeof trackGoogle != 'undefined' && trackGoogle);
    }

    goalClickEvent (event) {
        var
            goalLink = event.target
        ;

        if (typeof gtag != 'function' || !goalLink.dataset.eventCategory || !goalLink.dataset.eventAction || !goalLink.dataset.eventLabel) {
            return;
        }

        gtag('event', goalLink.dataset.eventAction, {
            'event_category': goalLink.dataset.eventCategory,
            'event_label': goalLink.dataset.eventLabel
        });

        return;
    }
}

window.addEventListener('load', function () {
    new GoalLink('.goal-link');
});
