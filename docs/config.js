System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "kendo.*": "kendo-sdk/js/kendo.*.js",
    "kendo-ui/*": "kendo-sdk/*"
  },
  meta: {
    "bootstrap": {
      "deps": [
        "jquery"
      ]
    }
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.1",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.6",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
    "aurelia-kendoui-bridge": "npm:aurelia-kendoui-bridge@1.6.4",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
    "aurelia-router": "npm:aurelia-router@1.3.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.4.0",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0",
    "bluebird": "npm:bluebird@3.4.1",
    "bootstrap": "github:twbs/bootstrap@3.3.7",
    "css": "github:systemjs/plugin-css@0.1.35",
    "fetch": "github:github/fetch@1.0.0",
    "font-awesome": "npm:font-awesome@4.6.3",
    "jquery": "npm:jquery@2.2.4",
    "text": "github:systemjs/plugin-text@0.0.8",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:twbs/bootstrap@3.3.7": {
      "jquery": "npm:jquery@2.2.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-binding@1.2.2": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0"
    },
    "npm:aurelia-bootstrapper@1.0.0": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.6",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.4.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.4.0",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0"
    },
    "npm:aurelia-dependency-injection@1.3.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-event-aggregator@1.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1"
    },
    "npm:aurelia-framework@1.0.6": {
      "aurelia-binding": "npm:aurelia-binding@1.2.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-history-browser@1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-kendoui-bridge@1.6.4": {
      "aurelia-binding": "npm:aurelia-binding@1.2.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0",
      "aurelia-router": "npm:aurelia-router@1.3.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.4.0"
    },
    "npm:aurelia-loader-default@1.0.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1"
    },
    "npm:aurelia-metadata@1.0.3": {
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-pal-browser@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-polyfills@1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-route-recognizer@1.1.0": {
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-router@1.3.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0"
    },
    "npm:aurelia-task-queue@1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    },
    "npm:aurelia-templating-binding@1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.2",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-templating-resources@1.4.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-templating-router@1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-templating@1.4.2": {
      "aurelia-binding": "npm:aurelia-binding@1.2.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.4.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0"
    },
    "npm:bluebird@3.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:font-awesome@4.6.3": {
      "css": "github:systemjs/plugin-css@0.1.35"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  },
  bundles: {
    "kendo-build-607d3d9260.js": [
      "kendo-ui/js/jquery.min.js",
      "kendo-ui/js/jszip.min.js",
      "kendo.all.min",
      "kendo.custom.min"
    ],
    "app-build.js": [
      "app.html!github:systemjs/plugin-text@0.0.8.js",
      "app.js",
      "autocomplete.css!github:systemjs/plugin-text@0.0.8.js",
      "autocomplete.html!github:systemjs/plugin-text@0.0.8.js",
      "autocomplete.js",
      "blur-image.js",
      "child-router.html!github:systemjs/plugin-text@0.0.8.js",
      "child-router.js",
      "main.js",
      "nav-bar.html!github:systemjs/plugin-text@0.0.8.js",
      "users.html!github:systemjs/plugin-text@0.0.8.js",
      "users.js",
      "welcome.html!github:systemjs/plugin-text@0.0.8.js",
      "welcome.js"
    ],
    "aurelia.js": [
      "github:github/fetch@1.0.0.js",
      "github:github/fetch@1.0.0/fetch.js",
      "github:twbs/bootstrap@3.3.7.js",
      "github:twbs/bootstrap@3.3.7/css/bootstrap.css!github:systemjs/plugin-text@0.0.8.js",
      "github:twbs/bootstrap@3.3.7/js/bootstrap.js",
      "npm:aurelia-animator-css@1.0.1.js",
      "npm:aurelia-animator-css@1.0.1/aurelia-animator-css.js",
      "npm:aurelia-binding@1.2.2.js",
      "npm:aurelia-binding@1.2.2/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0.js",
      "npm:aurelia-bootstrapper@1.0.0/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.3.2.js",
      "npm:aurelia-dependency-injection@1.3.2/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.1.js",
      "npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.0.1.js",
      "npm:aurelia-fetch-client@1.0.1/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.6.js",
      "npm:aurelia-framework@1.0.6/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0.js",
      "npm:aurelia-history-browser@1.0.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0.js",
      "npm:aurelia-history@1.0.0/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.0.js",
      "npm:aurelia-loader-default@1.0.0/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0.js",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0.js",
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.3.1.js",
      "npm:aurelia-logging@1.3.1/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.3.js",
      "npm:aurelia-metadata@1.0.3/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0.js",
      "npm:aurelia-pal-browser@1.0.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.4.0.js",
      "npm:aurelia-pal@1.4.0/aurelia-pal.js",
      "npm:aurelia-path@1.1.1.js",
      "npm:aurelia-path@1.1.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.1.1.js",
      "npm:aurelia-polyfills@1.1.1/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.1.0.js",
      "npm:aurelia-route-recognizer@1.1.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.3.0.js",
      "npm:aurelia-router@1.3.0/aurelia-router.js",
      "npm:aurelia-task-queue@1.2.0.js",
      "npm:aurelia-task-queue@1.2.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0.js",
      "npm:aurelia-templating-binding@1.0.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.4.0.js",
      "npm:aurelia-templating-resources@1.4.0/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.4.0/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.4.0/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/attr-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.4.0/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.4.0/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.4.0/binding-signaler.js",
      "npm:aurelia-templating-resources@1.4.0/compose.js",
      "npm:aurelia-templating-resources@1.4.0/css-resource.js",
      "npm:aurelia-templating-resources@1.4.0/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/dynamic-element.js",
      "npm:aurelia-templating-resources@1.4.0/focus.js",
      "npm:aurelia-templating-resources@1.4.0/hide.js",
      "npm:aurelia-templating-resources@1.4.0/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.4.0/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.4.0/if.js",
      "npm:aurelia-templating-resources@1.4.0/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.4.0/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.4.0/repeat.js",
      "npm:aurelia-templating-resources@1.4.0/replaceable.js",
      "npm:aurelia-templating-resources@1.4.0/sanitize-html.js",
      "npm:aurelia-templating-resources@1.4.0/self-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.4.0/show.js",
      "npm:aurelia-templating-resources@1.4.0/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.4.0/with.js",
      "npm:aurelia-templating-router@1.0.0.js",
      "npm:aurelia-templating-router@1.0.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0/route-href.js",
      "npm:aurelia-templating-router@1.0.0/route-loader.js",
      "npm:aurelia-templating-router@1.0.0/router-view.js",
      "npm:aurelia-templating@1.4.2.js",
      "npm:aurelia-templating@1.4.2/aurelia-templating.js",
      "npm:jquery@2.2.4.js",
      "npm:jquery@2.2.4/dist/jquery.js"
    ],
    "plugins.js": [
      "npm:aurelia-kendoui-bridge@1.6.4.js",
      "npm:aurelia-kendoui-bridge@1.6.4/autocomplete/autocomplete.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/autocomplete/autocomplete.js",
      "npm:aurelia-kendoui-bridge@1.6.4/barcode/barcode.js",
      "npm:aurelia-kendoui-bridge@1.6.4/button/button.js",
      "npm:aurelia-kendoui-bridge@1.6.4/buttongroup/buttongroup.js",
      "npm:aurelia-kendoui-bridge@1.6.4/calendar/calendar.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/calendar/calendar.js",
      "npm:aurelia-kendoui-bridge@1.6.4/chart/chart.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/chart/chart.js",
      "npm:aurelia-kendoui-bridge@1.6.4/chart/sparkline.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/chart/sparkline.js",
      "npm:aurelia-kendoui-bridge@1.6.4/chart/stock.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/chart/stock.js",
      "npm:aurelia-kendoui-bridge@1.6.4/chart/treemap.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/chart/treemap.js",
      "npm:aurelia-kendoui-bridge@1.6.4/colorpalette/colorpalette.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/colorpalette/colorpalette.js",
      "npm:aurelia-kendoui-bridge@1.6.4/colorpicker/colorpicker.js",
      "npm:aurelia-kendoui-bridge@1.6.4/combobox/combobox.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/combobox/combobox.js",
      "npm:aurelia-kendoui-bridge@1.6.4/common/bindables.js",
      "npm:aurelia-kendoui-bridge@1.6.4/common/constants.js",
      "npm:aurelia-kendoui-bridge@1.6.4/common/control-properties.js",
      "npm:aurelia-kendoui-bridge@1.6.4/common/decorators.js",
      "npm:aurelia-kendoui-bridge@1.6.4/common/notify-binding-behavior.js",
      "npm:aurelia-kendoui-bridge@1.6.4/common/observer.js",
      "npm:aurelia-kendoui-bridge@1.6.4/common/options-builder.js",
      "npm:aurelia-kendoui-bridge@1.6.4/common/template-compiler.js",
      "npm:aurelia-kendoui-bridge@1.6.4/common/template-gatherer.js",
      "npm:aurelia-kendoui-bridge@1.6.4/common/template.js",
      "npm:aurelia-kendoui-bridge@1.6.4/common/util.js",
      "npm:aurelia-kendoui-bridge@1.6.4/common/widget-base.js",
      "npm:aurelia-kendoui-bridge@1.6.4/config-builder.js",
      "npm:aurelia-kendoui-bridge@1.6.4/contextmenu/contextmenu.js",
      "npm:aurelia-kendoui-bridge@1.6.4/dateinput/dateinput.js",
      "npm:aurelia-kendoui-bridge@1.6.4/datepicker/datepicker.js",
      "npm:aurelia-kendoui-bridge@1.6.4/datetimepicker/datetimepicker.js",
      "npm:aurelia-kendoui-bridge@1.6.4/diagram/diagram.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/diagram/diagram.js",
      "npm:aurelia-kendoui-bridge@1.6.4/dialog/dialog.js",
      "npm:aurelia-kendoui-bridge@1.6.4/draggable/draggable.js",
      "npm:aurelia-kendoui-bridge@1.6.4/drop-target/drop-target-area.js",
      "npm:aurelia-kendoui-bridge@1.6.4/drop-target/drop-target.js",
      "npm:aurelia-kendoui-bridge@1.6.4/dropdownlist/dropdownlist.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/dropdownlist/dropdownlist.js",
      "npm:aurelia-kendoui-bridge@1.6.4/editor/editor.js",
      "npm:aurelia-kendoui-bridge@1.6.4/filter-menu/filter-menu.js",
      "npm:aurelia-kendoui-bridge@1.6.4/flatcolorpicker/flatcolorpicker.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/flatcolorpicker/flatcolorpicker.js",
      "npm:aurelia-kendoui-bridge@1.6.4/gantt/gantt-col.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/gantt/gantt-col.js",
      "npm:aurelia-kendoui-bridge@1.6.4/gantt/gantt.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/gantt/gantt.js",
      "npm:aurelia-kendoui-bridge@1.6.4/gauges/linear-gauge.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/gauges/linear-gauge.js",
      "npm:aurelia-kendoui-bridge@1.6.4/gauges/radial-gauge.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/gauges/radial-gauge.js",
      "npm:aurelia-kendoui-bridge@1.6.4/grid/col.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/grid/col.js",
      "npm:aurelia-kendoui-bridge@1.6.4/grid/grid-command.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/grid/grid-command.js",
      "npm:aurelia-kendoui-bridge@1.6.4/grid/grid-toolbar.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/grid/grid-toolbar.js",
      "npm:aurelia-kendoui-bridge@1.6.4/grid/grid.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/grid/grid.js",
      "npm:aurelia-kendoui-bridge@1.6.4/index.js",
      "npm:aurelia-kendoui-bridge@1.6.4/listbox/listbox.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/listbox/listbox.js",
      "npm:aurelia-kendoui-bridge@1.6.4/listview/listview.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/listview/listview.js",
      "npm:aurelia-kendoui-bridge@1.6.4/map/map.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/map/map.js",
      "npm:aurelia-kendoui-bridge@1.6.4/maskedtextbox/maskedtextbox.js",
      "npm:aurelia-kendoui-bridge@1.6.4/mediaplayer/mediaplayer.js",
      "npm:aurelia-kendoui-bridge@1.6.4/menu/menu.js",
      "npm:aurelia-kendoui-bridge@1.6.4/multiselect/multiselect.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/multiselect/multiselect.js",
      "npm:aurelia-kendoui-bridge@1.6.4/notification/notification-template.js",
      "npm:aurelia-kendoui-bridge@1.6.4/notification/notification.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/notification/notification.js",
      "npm:aurelia-kendoui-bridge@1.6.4/numerictextbox/numerictextbox.js",
      "npm:aurelia-kendoui-bridge@1.6.4/panelbar/panelbar.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/panelbar/panelbar.js",
      "npm:aurelia-kendoui-bridge@1.6.4/pdf/pdf.js",
      "npm:aurelia-kendoui-bridge@1.6.4/pivotgrid/pivotconfigurator.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/pivotgrid/pivotconfigurator.js",
      "npm:aurelia-kendoui-bridge@1.6.4/pivotgrid/pivotgrid.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/pivotgrid/pivotgrid.js",
      "npm:aurelia-kendoui-bridge@1.6.4/popup/popup.js",
      "npm:aurelia-kendoui-bridge@1.6.4/progressbar/progressbar.js",
      "npm:aurelia-kendoui-bridge@1.6.4/qrcode/qrcode.js",
      "npm:aurelia-kendoui-bridge@1.6.4/rangeslider/rangeslider.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/rangeslider/rangeslider.js",
      "npm:aurelia-kendoui-bridge@1.6.4/responsivepanel/responsivepanel.js",
      "npm:aurelia-kendoui-bridge@1.6.4/scheduler/scheduler.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/scheduler/scheduler.js",
      "npm:aurelia-kendoui-bridge@1.6.4/scrollview/scrollview.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/scrollview/scrollview.js",
      "npm:aurelia-kendoui-bridge@1.6.4/slider/slider.js",
      "npm:aurelia-kendoui-bridge@1.6.4/sortable/sortable.js",
      "npm:aurelia-kendoui-bridge@1.6.4/splitter/splitter.js",
      "npm:aurelia-kendoui-bridge@1.6.4/spreadsheet/spreadsheet.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/spreadsheet/spreadsheet.js",
      "npm:aurelia-kendoui-bridge@1.6.4/switch/switch.js",
      "npm:aurelia-kendoui-bridge@1.6.4/tabstrip/tabstrip.js",
      "npm:aurelia-kendoui-bridge@1.6.4/timepicker/timepicker.js",
      "npm:aurelia-kendoui-bridge@1.6.4/toolbar/toolbar-item-button.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/toolbar/toolbar-item-button.js",
      "npm:aurelia-kendoui-bridge@1.6.4/toolbar/toolbar-item.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/toolbar/toolbar-item.js",
      "npm:aurelia-kendoui-bridge@1.6.4/toolbar/toolbar.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/toolbar/toolbar.js",
      "npm:aurelia-kendoui-bridge@1.6.4/tooltip/tooltip.js",
      "npm:aurelia-kendoui-bridge@1.6.4/treelist/tree-col.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/treelist/tree-col.js",
      "npm:aurelia-kendoui-bridge@1.6.4/treelist/treelist.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/treelist/treelist.js",
      "npm:aurelia-kendoui-bridge@1.6.4/treeview/treeview.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/treeview/treeview.js",
      "npm:aurelia-kendoui-bridge@1.6.4/upload/upload.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-kendoui-bridge@1.6.4/upload/upload.js",
      "npm:aurelia-kendoui-bridge@1.6.4/validator/validator.js",
      "npm:aurelia-kendoui-bridge@1.6.4/valueconverters/valueconverters.js",
      "npm:aurelia-kendoui-bridge@1.6.4/version.js",
      "npm:aurelia-kendoui-bridge@1.6.4/window/window.js"
    ]
  },
  depCache: {
    "autocomplete.js": [
      "kendo-ui/js/kendo.all.min"
    ],
    "blur-image.js": [
      "aurelia-framework"
    ],
    "main.js": [
      "bootstrap"
    ],
    "users.js": [
      "aurelia-framework",
      "aurelia-fetch-client",
      "fetch"
    ]
  }
});