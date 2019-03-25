const _ = require('../../node_modules/lodash');
const base = require('./base-karma.conf');

// import _ from 'lodash';
// import {BaseConfiguration} from './base-karma.conf';

module.exports = function (config) {
    const baseConfiguration = new base.BaseConfiguration(config);
    const conf = baseConfiguration.configuration;
    const patternForTestFiles = baseConfiguration.testFiles;

    const webpackKarmaConfiguration = {
        singleRun: true,
        preprocessors: {},
        webpack: {
            mode: 'development'
        },
        browsers: ['ChromeHeadless']
    };
    webpackKarmaConfiguration.preprocessors[patternForTestFiles] = ['webpack'];

    _.assign(conf, webpackKarmaConfiguration);
    config.set(conf);
};
