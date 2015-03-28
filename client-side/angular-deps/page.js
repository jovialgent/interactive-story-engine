(function() {
    var RegularPage = {};
    var angular = require('angular');
    var app = angular.module('regularPage', []);

    RegularPage.createPage = function() {

        app.controller('RegularPage', ['$http', '$scope',
            function($http, $scope) {
                var page = this;

                $http.get('/test/1')
                    .success(function(data, status, headers, config) {

                        page.titlebar = data.titleBar;
                        page.pageBody = data.pageBody;

                    }).
                error(function(err) {
                    console.log(err);
                })

            }
        ])
            .directive('regularPage', function() {
                return {
                    templateUrl: './templates/page/regular.html'
                };
            })
    }

    RegularPage.createPage();


    module.exports = RegularPage;
})();