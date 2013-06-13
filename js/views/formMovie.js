define( [
	'jquery',
	'underscore',
	'backbone'
	],	function($, _, Backbone) {

	var FormMovieView = Backbone.View.extend({
          
          el:$("#containerForm"),

          render:function(){
            
            var formViewTemplate = require('text!templates/formMovie.html');

          	var compiledTemplate = _.template( formViewTemplate );
          	
          	this.$el.append( compiledTemplate );

          }
          
      });

	return FormMovieView;

});