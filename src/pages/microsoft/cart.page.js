const data = require('../../data/enum.json');
const config = require('../nightwatch.conf');
const nightwatch = require('nightwatch/bin/runner.js');

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class CartPage {
    /**
     * define selectors using getter methods
     */
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

module.exports = new CartPage();