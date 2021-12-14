const data = require('../../data/enum.json');
const config = require('../../../nightwatch.conf');
const nightwatch = require('nightwatch/bin/runner.js');

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class CartPage {
    /**
     * define selectors using getter methods
     */
    get ddlQuantity() {return ('select[aria-label="Visual Studio Professional Subscription  Quantity selection"]');}
    get btnCheckout() { return ('div[class="greyBox--H5SnxNlC"] button[class="c-button f-primary f-flex"]');}
    get quantityToSelect() { return ('[aria-label="Visual Studio Professional Subscription  Quantity selection"] option[value="20"]');}
    get firstTotal() { return ('[class="group--O4G9xvBt"] [aria-live="polite"] [itemprop="price"]');}
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