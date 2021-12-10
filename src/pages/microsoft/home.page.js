const data = require('../../data/enum.json');
const config = require('../nightwatch.conf');
const nightwatch = require('nightwatch/bin/runner.js');

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class HomePage {
    /**
     * define selectors using getter methods
     */
    get imgLogo() { return $('[itemprop="logo"]');}
    get lblOffice() { return $('#shellmenu_0');}
    get lblWindows() { return $('#shellmenu_2');}
    get lblSurface() { return $('#shellmenu_3');}
    get lblXbox() { return $('#shellmenu_4');}
    get lblDeals() { return $('#shellmenu_5');}
    get lblSupport() { return $('#l1_support');}
    get lblWindowOs() { return $('#c-shellmenu_56');}

    /**
     * a method to get the title of the Home page
     * e.g. returns the title
     */
    async getTitlePage () {
        let title;
        return title = await browser.getTitle();
    }
}

module.exports = new HomePage();