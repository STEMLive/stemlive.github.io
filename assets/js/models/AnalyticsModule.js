class AnalyticsModule {
    loadGoogleAnalytics () {
        if (typeof googleAnalyticsId === 'undefined' || window.doNotTrack) {
            return false;
        }

        let analyticsScript = document.createElement('script');
        analyticsScript.setAttribute('async', 'async');
        analyticsScript.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=' + googleAnalyticsId);

        let analyticsBootstrapScript = document.createElement('script');
        let analyticsBootstrapCode = 'window.dataLayer = window.dataLayer || [];';
        analyticsBootstrapCode += 'function gtag() { dataLayer.push(arguments); }';
        analyticsBootstrapCode += 'gtag(\'js\', new Date());';
        analyticsBootstrapCode += ('gtag(\'config\', \'' + googleAnalyticsId + '\')');

        document.body.appendChild(analyticsScript);

        try {
            analyticsBootstrapScript.appendChild(document.createTextNode(analyticsBootstrapCode));
            document.body.appendChild(analyticsBootstrapScript);
        } catch (e) {
            analyticsBootstrapScript.text = analyticsBootstrapCode;
            document.body.appendChild(analyticsBootstrapScript);
        }
    }
}

export default new AnalyticsModule;
