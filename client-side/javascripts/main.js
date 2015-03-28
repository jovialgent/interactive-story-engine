(function() {
    require.config({
        baseUrl: "javascripts",
        paths: {
            jquery: 'libs/jquery/jquery-2.1.1',
            underscore: 'libs/underscore/underscore',
            angular: 'libs/angular/angular.min',
            cytoscape: "libs/cytoscape/build/cytoscape",
            alertify: "libs/alertify/alertify.min"
        },
        shim: {
            "cytoscape": {
                deps: ["jquery"]
            },
            'angular': {
                exports: 'angular'
            }


        }

    });

    require([
        'app',
    ], function(App) {
        App.initialize();

    });

})()