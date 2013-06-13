define( [
	'jquery',
	'underscore',
	'backbone',
	'text!templates/formMovie.html'
	],	function($, _, Backbone, formViewTemplate) {

	var FormMovieView = Backbone.View.extend({
          
          el:$("#containerForm"),

          render:function(){
          	///var data = {}; NO LE PASO NINGUNA DATA

          	var compiledTemplate = _.template( formViewTemplate );
          	
          	this.$el.append( compiledTemplate );

          }
          
      });

	return FormMovieView;

});