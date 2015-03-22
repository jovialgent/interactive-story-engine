//Filename: boilerplate.js

define([
    // These are path alias that we configured in our bootstrap
    'jquery',     // lib/jquery/jquery
    'underscore', // lib/underscore/underscore
    'backbone',
    'alertify'
], function($, _, Backbone, Alertify){
    
    var initialize = function(){
       Alertify.message("WORKS?");

    }
    
    // Above we have passed in jQuery, Underscore and Backbone
    // They will not be accessible in the global scope
    return {
        initialize:initialize
        
    };
    // What we return here will be used by other modules
});