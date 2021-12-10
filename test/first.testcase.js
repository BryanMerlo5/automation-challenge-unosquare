const config = require('../nightwatch.conf');
const nightwatch = require('nightwatch/bin/runner.js');

module.exports = {
    'First Test Case': async function (browser) {
        await browser.url('https://www.google.com');
        await browser.fullscreenWindow();
    }
};

