(function() {
    define([
        'jquery',
        'underscore',
        'alertify',
        'angular',
        './angular-dependancies/test'
    ], function($, _, Alertify, angular, Test) {
        var initialize = function() {
            Test.runTest();
            angular.bootstrap(document, ['demo']);

        }

        return {
            initialize: initialize

        };
    });

})()