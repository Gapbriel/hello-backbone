require.config({
  baseUrl: "js",
  paths: {    
    "jquery": "libs/jquery-min",
    "underscore": "libs/underscore-min",
    "backbone": "libs/backbone-min",
    "backboneLocalStorage": "libs/backbone.localStorage",
    //templates: "templates"
  },
  shim: {
      "backbone": {
          deps: ["jquery","underscore"],
          exports: "Backbone"
      }
  }

});

require([
  // Load our app module and pass it to our definition function
  "app",

], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don"t pass a parameter to this function

  App.initialize();
    
});