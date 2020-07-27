import AnalyticsModule from '../models/AnalyticsModule.js';

class ConsentBar {
    constructor (consentBar) {
        if (typeof consentBar === 'undefined') {
            return;
        }
        
        this.consentBar = document.querySelector(consentBar);
        let cookiesAlreadyAccepted = this.cookiesAlreadyAccepted();
        
        if (typeof this.consentBar === 'undefined') {
            return false;
        }

        this.consentBar.classList.toggle('display-block', !cookiesAlreadyAccepted);

        if (cookiesAlreadyAccepted) {
            AnalyticsModule.loadGoogleAnalytics();
            document.body.classList.add('terms-accepted');
            return;
        }

        let acceptCookiesBtn = this.consentBar.querySelector('.accept-cookies-btn');
        acceptCookiesBtn.addEventListener('click', this.cookiesAccepted.bind(this));
    }

    cookiesAlreadyAccepted () {
        let 
            trackGoogle = localStorage.getItem('track-google')
        ;

        return (typeof trackGoogle != 'undefined' && trackGoogle);
    }

    cookiesAccepted (e) {
        e.preventDefault();

        let
            acceptCookiesBtn = e.target,
            consentBar = acceptCookiesBtn.parentElement.parentElement,
            cookiesAlreadyAccepted = this.cookiesAlreadyAccepted()
        ;

        if (!consentBar.classList.contains('consent-bar') || cookiesAlreadyAccepted) {
            return false;
        }

        localStorage.setItem('track-google', true);
        AnalyticsModule.loadGoogleAnalytics();

        consentBar.classList.remove('display-block');
        document.body.classList.add('terms-accepted');
    }
}

window.addEventListener('load', function () {
    new ConsentBar('.consent-bar');
});
