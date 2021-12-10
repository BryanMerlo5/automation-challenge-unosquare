const data = require('../../data/enum.json');
const config = require('../nightwatch.conf');
const nightwatch = require('nightwatch/bin/runner.js');
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class ExplorePage {
    /**
     * define selectors using getter methods
     */
    get lblTitle() { return $('.title');}
    get lblOffice() { return $('#shellmenu_0');}
    get lblWindows() { return $('#shellmenu_2');}
    get lblSurface() { return $('#shellmenu_3');}
    get lblXbox() { return $('#shellmenu_4');}
    get lblDeals() { return $('#shellmenu_5');}
    get lblSupport() { return $('#l1_support');}
    get lblWindowOs() { return $('#c-shellmenu_56');}
    get lblOptions() { return $('ul li span[style="display:none"]');}
    get btnSearch() { return $('#search');}
    get btnShop() { return $('[href="/en-us/search/shop?q=Visual Studio"]');}
    get btnCloseUnitedStates() {return $('button[class="c-glyph glyph-cancel"]');}
    get lblPriceItems() {return $('[itemprop="price"]');}
    get lnkFirstItemProduct() {return $('[data-id="coreui-productplacement-30l7ywa_dg7gmgf0dst3"]');}
    get btnCloseSignMeUp() {return $('[class="close"]');}
    get lblPriceItem() {return $('[class="pb-4 pr-lg-4"] p span');}
    get btnAddToCart() {return $('[class="btn  btn-primary btn-block"]');}
    get ddlQuantity() {return $('select[aria-label="Visual Studio Professional Subscription  Quantity selection"]');}

    /**
     * a method to get the title of the cart page
     * e.g. returns the title
     */
    async getTitlePage () {
    }

    /**
     * a method to get the title of the cart page
     * e.g. returns the title
     */
     async checkItemAdded (nameOfItem) {
    }

}

module.exports = new ExplorePage();