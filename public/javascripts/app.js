(function() {
    define([
        'jquery',
        'underscore',
        'alertify',
        'angular',
        './angular-dependancies/page'
    ], function($, _, Alertify, angular, Page) {
        var initialize = function() {
            Page.createPage();

            angular.bootstrap(document, ['page']);

        }

        return {
            initialize: initialize

        };
    });

})()