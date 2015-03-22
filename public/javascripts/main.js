// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
	baseUrl: "javascripts",
    paths: {
        jquery: 'libs/jquery/jquery-2.1.1',
        underscore: 'libs/underscore/underscore',
        backbone: 'libs/backbone/backbone',
        cytoscape : "libs/cytoscape/build/cytoscape",
        alertify : "libs/alertify/alertify.min"
    },
    shim : {
        "cytoscape" : {
            deps : ["jquery"]
        }
    }

});

require([

    // Load our app module and pass it to our definition function
    'app',
], function(App){
    // The "app" dependency is passed in as "App"
    App.initialize();
});