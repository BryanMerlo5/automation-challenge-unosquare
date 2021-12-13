const data = require('../../data/enum.json');
const config = require('../../../nightwatch.conf');
const nightwatch = require('nightwatch/bin/runner.js');
const homePage = require('./home.page');
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class WindowPage {
    /**
     * define selectors using getter methods
     */
    get lblWindowOs() { return ('#c-shellmenu_56');}
    get lblOptions() { return ('#uhf-g-nav > ul > li:nth-child(2) > div > ul > li:nth-child(2) > ul > li > a');}
    get lblWindowsEleven() { return ('#uhf-navbtn-c-shellmenu_57-button')}
    get lblWindowsTen() { return ('#uhf-navbtn-c-shellmenu_63-button');}
    get lblWindowsSeven() {return ('#c-shellmenu_68');}
    get btnSearch() { return ('#search');}
    get lblWindowTenHome() {return ('#c-shellmenu_64');}
    get lblWindowTenPro() {return ('#c-shellmenu_65');}
    get lblCompareWindow() {return ('#c-shellmenu_66');}
    get lblWindowTenSpecs() {return ('#c-shellmenu_67');}
    get txtSearch() { return ('#cli_shellHeaderSearchInput');}

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
            return console.log('Printing window version', version[i].getText());
        }
    }

}

module.exports = new WindowPage();