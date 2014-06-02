module.exports = function(config) {
  config.set({
    basePath : '.',
    files : [
      './node_modules/chai/chai.js',
      './bower_components/angular/angular.js',
      './bower_components/angular-ui-router/release/angular-ui-router.js',
      './src/ngMidwayTester.js',
      './test/lib/chai.js',
      './test/spec/ngMidwayTesterSpec.js'
    ],
    singleRun: true,
    frameworks: ['mocha'],
    browsers: ['Chrome'],
    proxies: {
      '/': 'http://localhost:8844/'
    }
  });
};
