module.exports = function (config) {
    return {
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            {
                pattern: 'spec/your-first-suite/*.spec.js',
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
};


