module.exports = function (config) {

	config.set({

		basePath: '../',

		frameworks: [
			'mocha',
			'requirejs'
		],

		files: [
			{pattern: 'node_modules/chai/chai.js', included: false},
			{pattern: 'src/*.js', included: false}, // raw source
			{pattern: 'test/*.test.js', included: false},
			{pattern: 'test/catch-test-helpers.js', included: false},
			'test/karma-runner.js',
		],

		reporters: ['progress'],

		port: 9876,

		colors: true,

		runnerPort: 9100,

		logLevel: 'LOG_INFO',

		autoWatch: true,

		browsers: ['Chrome', 'IE', 'Opera', 'Firefox'],

		captureTimeout: 60000,

		singleRun: false

	});

};