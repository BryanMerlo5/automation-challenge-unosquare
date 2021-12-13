const config = require('../nightwatch.conf');
const nightwatch = require('nightwatch/bin/runner.js');
const page = require('../app.conf');
const home = require('../src/pages/microsoft/home.page');
const window = require('../src/pages/microsoft/window.page');
const data = require('../src/data/enum.json');
const explore = require('../src/pages/microsoft/explore.page');
const shop = require('../src/pages/microsoft/shop.page');

module.exports = {
    'Step One: Go to Microsoft': async function (browser) {
        await browser.url(page.externals.ConfigData.envs.microsoft.serverURL);
    },

    'Step two: Validate all menu items are present (Office - Windows - Surface - Xbox - Deals - Support)' : async function (browser) {
        await browser.expect.element(home.imgLogo).to.be.present.after(5000);
        await browser.expect.element(home.lblOffice).to.be.present;
        await browser.expect.element(home.lblWindows).to.be.present;
        await browser.expect.element(home.lblSurface).to.be.present;
        await browser.expect.element(home.lblXbox).to.be.present;
        await browser.expect.element(home.lblDeals).to.be.present;
        await browser.expect.element(home.lblSupport).to.be.present;
    },

    'Step three: Once in Windows page, click on Windows 10 Menu' : async function (browser) {
        await browser.click(home.lblWindows);
        await browser.expect.element(window.lblWindowOs).to.be.present.after(5000);
    },

    'Step four: Once in Windows page, click on Windows 10 Menu' : async function (browser) {
        await browser.click(window.lblWindowOs);
        await browser.expect.element(window.lblWindowsTen).to.be.present.after(5000);
        await browser.waitForElementVisible(window.lblWindowsEleven, 5000);
        await browser.waitForElementVisible(window.lblWindowsTen, 5000);
        await browser.waitForElementVisible(window.lblWindowsSeven, 5000);
        await browser.click(window.lblWindowsTen);
    },

    'Step five: Print all Elements in the dropdown' : async function (browser) {
        await browser.moveTo(window.lblWindowTenHome, 10, 10);
        let text = await browser.getText(window.lblWindowTenHome);
        console.log('the result is:', text);
       
        text = await browser.getText(window.lblWindowTenPro);
        console.log('the result is:', text);

        text = await browser.getText(window.lblCompareWindow);
        console.log('the result is:', text);

        text = await browser.getText(window.lblWindowTenSpecs);
        console.log('the result is:', text);
    },

    'Step six: Go to Search next to the shopping cart' : async function (browser) {
        await browser.click(window.btnSearch);
        await browser.waitForElementVisible(window.txtSearch, 5000);
    },

    'Step seven: Search for Visual Studio' : async function (browser) {
        await browser.setValue(window.txtSearch, data.textToSearch);
        await browser.click(window.btnSearch);
    },

    'Step eight: Print the price for the 3 first elements listed in Software result list' : function (browser) {
        browser.click(explore.btnCloseUnitedStates);
        browser.assert.title(data.title.explore);
        //browser.waitForElementVisible(explore.btnShop, 5000);
        browser.pause(5000);
        browser.click(explore.btnShop);
        //await shop.printPrices(browser, 3);
        browser.click(explore.btnCloseU);
        browser.pause(5000);
        //browser.waitForElementVisible(explore.lblDepartments, 5000);

        // const firstPrice = browser.getAttribute(shop.lblFirstPrice);
        // console.log('The first price is: ', firstPrice);
        
        let price = browser.getAttribute(shop.lblFirstPrice, "content", function (result) {
            console.log(result.value);
        });
        //console.log('The price is:', price);
        
        // const secondPrice = browser.getText(shop.lblSecondPrice);
        // console.log('The first price is: ', secondPrice);

        // const thirdPrice = browser.getText(shop.lblThirdPrice);
        // console.log('The first price is: ', thirdPrice);
    },


    // 'Step nine: Store the price of the first one' : async function (browser) {
        
    // },

    // 'Step ten: Click on the first one to go to the details page' : async function (browser) {
        
    // },

    // 'Step eleven: Once in the details page, validate both prices are the same' : async function (browser) {
        
    // },

    // 'Step twelve:  Click Add To Cart' : async function (browser) {
        
    // },

    // 'Step thirteen: Verify all 3 price amounts are the same' : async function (browser) {
        
    // },

    // 'Step fourteen: On the # of items dropdown select 20 and validate the Total amount is Unit Price * 20' : async function (browser) {
        
    // }
}
