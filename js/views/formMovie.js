define( /*[
	'jquery',
	'underscore',
	'backbone'
	],*/	function( require ){//$, _, Backbone) {

	var FormMovieView = Backbone.View.extend({

      render: function() {
        
        var template = require('text!templates/formMovie.html');

      	var compiledTemplate = _.template( template );
        
      	this.$el.html( compiledTemplate );

        return this;
      
      }
      
  });

	return FormMovieView;

});