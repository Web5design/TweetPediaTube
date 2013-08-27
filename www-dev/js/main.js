require.config({
    baseUrl: 'js',
    enforceDefine: true,
    paths: {
        zepto: '../bower_components/zepto/zepto',
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        hogan: '../bower_components/hogan/web/builds/2.0.0/hogan-2.0.0.amd',
        templates: '../templates/templates'
    },
    shim: {
        zepto: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['zepto', 'underscore'],
            exports: 'Backbone'
        }        
    }
});

define([
    'zepto',
    'app'
], function ($, AppRouter) {
    $(document).ready(function () {
        AppRouter.initialize();
    });
});