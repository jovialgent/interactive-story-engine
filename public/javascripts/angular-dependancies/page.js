(function() {
    define([
        'jquery',
        'underscore',
        'alertify',
        'angular',
    ], function($, _, Alertify, angular) {
        var Page = {};
        var app = angular.module('page', []);

        Page.createPage = function(){
            app.controller('RegularPage', ['$http', '$scope', function($http, $scope){
                var page = this;

                $http.get('/test/1')
                .success(function(data, status, headers, config){

                   
                    
                    page.titlebar = data.titleBar;
                    page.pageBody = data.pageBody;

                }).
                error(function(err){
                    console.log(err);
                })
                
            }])
            .directive('regularPage', function(){
                return {
                    templateUrl : './templates/page/regular.html'
                };
            })
        }


        return Page
    })

})()