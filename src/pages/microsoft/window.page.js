const data = require('../../data/enum.json');
const config = require('../nightwatch.conf');
const nightwatch = require('nightwatch/bin/runner.js');
const homePage = require('./home.page');
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class WindowPage extends homePage {
    /**
     * define selectors using getter methods
     */
    get lblWindowOs() { return $('#c-shellmenu_56');}
    get lblOptions() { return $('ul li span[style="display:none"]');}
    get btnSearch() { return $('#search');}

    /**
     * a method to get the title of the window page
     * e.g. returns the title
     */
    async getTitlePage () {
        homePage.getTitlePage();
    }

    /**
     * a method to get the title of the cart page
     * e.g. returns the title
     */
    async printWindowVersions () {
        let version = browser.elements(this.lblOptions);
        let versions = version.length;

        for(let i = 0; i < versions; i++) {
            version[i].getText();
            return console.log('Printing window version', version[i].getText(););
        }
    }

}

module.exports = new WindowPage();