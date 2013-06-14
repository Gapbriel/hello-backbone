define( [
	'jquery',
	'underscore',
	'backbone',
  'text!templates/formMovie.html'
	],	function( $, _, Backbone, Template) {

	var FormMovieView = Backbone.View.extend({
      el: $('#formContainer'),
      render: function() {
        
        //var template = require('text!templates/formMovie.html');
        console.log(Template);
      	var compiledTemplate = _.template( Template );
        
      	this.$el.html( compiledTemplate );
        return this;
      
      }
      
  });

	return FormMovieView;

});