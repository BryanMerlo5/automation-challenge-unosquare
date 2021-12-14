const data = require('../../data/enum.json');
const config = require('../../../nightwatch.conf');
const nightwatch = require('nightwatch/bin/runner.js');

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class ProductDetailPage {
    /**
     * define selectors using getter methods
     */
    get btnCloseSignMeUp() {return ('[class="close"]');}
    get lblPriceItem() {return ('[class="pb-4 pr-lg-4"] p span');}
    get btnAddToCart() {return ('div[class="buy-box-buy-buttons mb-3"] a[aria-label="Add to cart"]');}
    get ddlQuantity() {return ('select[aria-label="Visual Studio Professional Subscription  Quantity selection"]');}
    get closeModal() { return ('button.close.geo-selector-localized-copy.preferred-redirect-cancel');}
    get btnCloseSign() { return ('//*[@id="emailSup-modal"]/div/div/div[1]/button');}

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

module.exports = new ProductDetailPage();