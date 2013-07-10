require.config({
  baseUrl: "app",
  paths: {    
   jquery: 'vendor/jquery.min',
    underscore: 'vendor/underscore',
    backbone: 'vendor/backbone-min',
    localstorage: "vendor/backbone.localStorage-min",
    bootstrap: 'vendor/bootstrap',
   
  },
   shim: {
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },

        underscore: {
            deps: ["jquery", "bootstrap"],
            exports: "_"
        }

    }

});

require(["app"], function(App){
  App.initialize();    
});