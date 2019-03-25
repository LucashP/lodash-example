const _ = require('./node_modules/lodash');

// const defaultTestFiles = 'spec/your-first-suite/*.spec.js';
const defaultTestFiles = 'spec/**/*.spec.js';

class BaseConfiguration {
    constructor(config, testFiles) {
        this.testFiles = _.defaultTo(testFiles, defaultTestFiles);
        this.configuration = {
            basePath: '',
            frameworks: ['jasmine'],
            files: [
                {
                    pattern: this.testFiles,
                    watched: true
                }
            ],
            exclude: [],
            coverageReporter: {
                type: 'html'
            },
            reporters: ['progress', 'kjhtml'],
            port: 9876,
            colors: true,
            logLevel: config.LOG_DEBUG,
            autoWatch: true,
            browsers: ['Chrome'],
            singleRun: false,
            concurrency: Infinity
        };
    }
}

module.exports = {
    BaseConfiguration
};