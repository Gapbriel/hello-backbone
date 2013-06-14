define([
  'jquery', 
  'underscore', 
  'backbone',
  'router'
], function($, _, Backbone, Router){

  var initialize = function(){

    Router.initialize('formMovie');

  };

  return { 

    initialize: initialize
    
  };
});