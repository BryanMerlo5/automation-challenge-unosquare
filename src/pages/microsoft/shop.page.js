const data = require('../../data/enum.json');
const config = require('../../../nightwatch.conf');
const nightwatch = require('nightwatch/bin/runner.js');
const { BrowserName } = require('nightwatch/lib/utils');
const browserName = require('nightwatch/lib/utils/browsername');

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class ShopPage {
    /**
     * define selectors using getter methods
     */
    get btnCloseUnitedStates() {return ('button[class="c-glyph glyph-cancel"]');}
    get lblPriceItems() {return ('span[itemprop="price"]');}
    get lnkFirstItemProduct() {return ('[data-id="coreui-productplacement-30l7ywa_dg7gmgf0dst3"]');}
    get btnCloseSignMeUp() {return ('[class="close"]');}
    get lblPriceItem() {return ('[class="pb-4 pr-lg-4"] p span');}
    get btnAddToCart() {return ('[class="btn  btn-primary btn-block"]');}
    get ddlQuantity() {return ('select[aria-label="Visual Studio Professional Subscription  Quantity selection"]');}
    get lblDepartments() { return ('#coreui-refinemenulist-nnq5m1e');}
    get lblFirstPrice() { return ('#coreui-refinemenulist-nnq5m1e');}
    get lblSecondPrice() { return ('#coreui-refinemenulist-nnq5m1e');}
    get lblThirdPrice() { return ('#coreui-refinemenulist-nnq5m1e');}


    /**
     * a method to get the title of the cart page
     * e.g. returns the title
     */
    async printPrices (browser, pricesToPrint) {
        let elements = await browser.findElements(this.lblPriceItems);
        let elem = elements.length;
        for(let i = 0; i <= pricesToPrint; i++) {
            return console.log('the price is:', await browser.getAttribute(elements[i], 'content'));
        }
    }
}

module.exports = new ShopPage();