module.exports = {
  'bundles': {
    'dist/app-build': {
      'includes': [
        '[**/*.js]',
        '**/*.html!text',
        '**/*.css!text'
      ],
      'options': {
        'inject': true,
        'minify': true,
        'depCache': true,
        'rev': false
      }
    },
    'dist/plugins': {
      'includes': [
        '[aurelia-kendoui-bridge]',
        '[aurelia-kendoui-bridge/**/*.js]',
        'aurelia-kendoui-bridge/**/*.html!text'
      ],
      'options': {
        'inject': true,
        'minify': true,
        'depCache': false,
        'rev': false
      }
    },
    'dist/aurelia': {
      'includes': [
        'aurelia-framework',
        'aurelia-bootstrapper',
        'aurelia-fetch-client',
        'aurelia-router',
        'aurelia-animator-css',
        'aurelia-templating-binding',
        'aurelia-polyfills',
        'aurelia-templating-resources',
        'aurelia-templating-router',
        'aurelia-loader-default',
        'aurelia-history-browser',
        'aurelia-logging-console',
        'bootstrap',
        'bootstrap/css/bootstrap.css!text',
        'fetch',
        'jquery'
      ],
      'options': {
        'inject': true,
        'minify': true,
        'depCache': false,
        'rev': false
      }
    },
    'dist/kendo-build': {
      'includes': ['kendo-ui/js/*.min.js'],
      'excludes': ['kendo-ui/js/kendo.all.min.js'],
      'options': {
        'inject': true,
        'minify': true,
        'rev': true
      }
    }
  }
};
