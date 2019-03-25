module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['browserify', 'jasmine'],
        files: [
            {
                pattern: 'spec/**/*.spec.js',
                watched: true
            }
        ],
        exclude: [],
        preprocessors: {
            'spec/**/*.spec.js': ['browserify']
        },
        coverageReporter: {
            type: 'html'
        },
        babelPreprocessor: {
            options: {
                presets: ['env'],
                sourceMap: 'inline'
            },
            filename: function (file) {
                return file.originalPath.replace(/\.js$/, '.es5.js');
            },
            sourceFileName: function (file) {
                return file.originalPath;
            }
        },
        browserify: {
            debug: true,
            transform: [ ['babelify', {presets: ['env']}] ],
        },
        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_DEBUG,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity
    });
};
