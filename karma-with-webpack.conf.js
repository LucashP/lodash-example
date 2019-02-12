let baseKarmaConf = require('./base-karma.conf.js');

module.exports = function (config) {
    const baseConfiguration = baseKarmaConf(config);

    baseConfiguration.preprocessors[baseConfiguration.files.pattern] =  ['webpack'];

    config.set(baseConfiguration);
};
