define([
  'jquery', 
  'underscore', 
  'backbone',
  'router'
], function($, _, Backbone, Router){//$, _, 

  var initialize = function(){

    Router.initialize();

  };

  return { 
    initialize: initialize
  };
});