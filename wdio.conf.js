exports.config = {
    runner: 'local',
    specs: [
        './lib/test/**/*.spec.js',
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1,
      capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
    }],
    logLevel: 'error',
    deprecationWarnings: true,
    baseUrl: 'https://vegas.williamhill.com/en-gb/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [
        'dot',
        'spec',
        ['allure',
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: false,
                disableWebdriverScreenshotsReporting: false,
            }
        ]],
    mochaOpts: {
        ui: 'bdd',
        require: [
            'tsconfig-paths/register'
        ],
        timeout: 180000
    },
    before: function () {
        browser.maximizeWindow();
        var chai = require('chai');
        chai.Should();

        require('ts-node').register({files: true});
    },

};
