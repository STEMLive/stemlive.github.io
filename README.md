# Welcome to STEMLive

This site has been built using the following technologies:

- Jekyll 4
- CSS Grid
- JavaScript (ES6)
- Fontello (for CSS icons)

You must have both Ruby and Jekyll (and ideally Bundler) installed to set up locally.

## Quickstart (for developers)

1. Run `jekyll serve` - or `JEKYLL_ENV=production jekyll serve` (to run your local site in production mode)
2. Browse to http://localhost:4000/ in a browser of your choice to view your local version of the site.
3. Jekyll is set to autoregenerate by default, so any changes to files you make will trigger the compilation process - so you should be able to view the changes in-browser.

### Using Fontello

To add new Fontello icons, you must take the following steps:

1. Go to the [Fontello](http://fontello.com/) website
2. Click on the button with a spanner icon in the top bar. You will see that a dropdown menu appears and that the first item is named `Import`. Click on that item, then navigate to the `assets/fontello/config.json` file on the repository (relative to the base directory) and upload that.
3. Use the leftmost search field to search for any icons.
4. Click on any icons you want to add to circle them in red.
5. Click on the red button with the download icon when you are satisfied to download the icons.
6. Unzip, rename the decompressed folder `fontello`, and move into `assets`

Please note: You can add custom Fontello icons by dragging and dropping them into the `Custom Icons` area from your file manager. Refer [here](https://github.com/fontello/fontello/wiki/How-to-use-custom-images) for more information.

### How to add a new educator

Please copy and paste [this template](https://raw.githubusercontent.com/STEMLive/stemlive.github.io/master/models/templates/EDUCATOR.md) into the text field on https://github.com/stemlive/stemlive.github.io/new/master/models/_educators, amending it as you see fit.

All questions on this project are to be addressed to [enquiries.stemlive@gmail.com](mailto:enquiries.stemlive@gmail.com).
