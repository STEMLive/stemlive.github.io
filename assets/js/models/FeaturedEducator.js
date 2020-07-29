class FeaturedEducator {
    constructor () {
        this.endpoint = '/data/streamers.json'
        this.featuredEducators = []
        this.loadMoreButton = false
    }

    getEducatorData (offset = 0) {
       fetch(this.endpoint, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            let featuredEducators = data[0].streamers

            if (offset > 0) {
                let filteredEducators = featuredEducators.slice(offset)

                if (parseInt(offset + Object.keys(filteredEducators).length) === Object.keys(featuredEducators).length) {
                    let loadMoreButton = document.querySelector('.featured-educators').nextElementSibling;

                    if (loadMoreButton.classList.contains('load-more-button')) {
                        this.loadMoreButton = loadMoreButton
                        this.loadMoreButton.setAttribute('data-continue-loading', false);
                    }
                }

                featuredEducators = filteredEducators
            }

            this.lazyLoad(featuredEducators)
        })
    }

    lazyLoad (streamers = false) {
        if (!streamers) {
            return;
        }

        for (let index in streamers) {
            let
                streamer = streamers[index],
                educatorGridItem = document.createElement('div'),
                educatorLink = document.createElement('a'),
                educatorBio = document.createElement('div')
            ;

            if (typeof streamer.collectives != 'undefined' && streamer.collectives != null) {
                var collectives = streamer.collectives.toString().replace(/,/g, ' ');
            }
            
            if (typeof streamer.sciences != 'undefined' && streamer.sciences != null) {
                var sciences = streamer.sciences.toString().replace(/,/g, ' ');
            }

            if (typeof streamer.streaming_platforms != 'undefined' && streamer.streaming_platforms != null) {
                var streamingPlatforms = Object.keys(streamer.streaming_platforms).toString().replace(/,/g, ' ');
            }

            educatorGridItem.classList.add('featured-educator');
            educatorGridItem.setAttribute('data-ajax-loaded', true);
            educatorGridItem.setAttribute('role', 'img');
            educatorGridItem.setAttribute('aria-label', typeof streamer.name != 'undefined' ? streamer.name : streamer.title);

            if (typeof streamer.sciences != 'undefined' && sciences != 'undefined') {
                educatorGridItem.className += (' ' + sciences);
            }

            if (typeof streamer.science_platforms != 'undefined' && streamingPlatforms != 'undefined') {
                educatorGridItem.className += (' ' + streamingPlatforms);
            }

            if (typeof streamer.collectives != 'undefined' && collectives != 'undefined') {
                educatorGridItem.className += (' ' + collectives);
            }

            if (typeof streamer.images.thumbnail.filename != 'undefined' && streamer.images.thumbnail.filename != null && streamer.images.thumbnail.filename.length > 0) {
                educatorGridItem.setAttribute('style', 'background-image: url(/assets/images/educators/thumbnails/' + streamer.images.thumbnail.filename + ');');
            } else if (typeof streamer.sciences != 'undefined' && streamer.sciences != null) {
                educatorGridItem.setAttribute('style', 'background-image: url(/assets/images/educators/thumbnails/' + streamer.sciences[0] + '/default.jpg);');
            }

            educatorLink.setAttribute('href', streamer.url);
            educatorBio.classList.add('educator-minibio');

            let educatorBioTitle = document.createElement('h3');
            educatorBioTitle.classList.add('h4');
            
            if (typeof streamer.name != 'undefined') {
                let displayName = '<span class="display-name">(' + new String(streamer.title).toLowerCase() + ')</span>';
                educatorBioTitle.innerHTML = streamer.name;
                educatorBioTitle.innerHTML += displayName;
            } else {
                educatorBioTitle.innerHTML = streamer.title;
            }

            educatorGridItem.appendChild(educatorLink);
            educatorBio.appendChild(educatorBioTitle);
            educatorGridItem.appendChild(educatorLink);
            educatorGridItem.appendChild(educatorBio);
            this.featuredEducators.push(educatorGridItem);
        }

        if (this.featuredEducators.length > 0 && typeof window.featuredEducatorsGrid != 'undefined') {
            let featuredEducators = this.featuredEducators;
            window.featuredEducatorsGrid.insert(featuredEducators);

            if (this.loadMoreButton && this.loadMoreButton.dataset.continueLoading != true) {
                this.loadMoreButton.setAttribute('disabled', 'disabled');
            }
        }
    }
}

export default new FeaturedEducator;
