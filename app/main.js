require.config({
  baseUrl: "app",
  paths: {    
   jquery: 'vendor/jquery.min',
    underscore: 'vendor/underscore',
    backbone: 'vendor/backbone-min',
    localstorage: "vendor/backbone.localStorage-min",
   
  },
   shim: {
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },

        underscore: {
            deps: ["jquery"],
            exports: "_"
        }
    }

});

require(["app"], function(App){
  App.initialize();    
});