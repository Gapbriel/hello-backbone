define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/listsMovies.html'
	], function( $, _, Backbone, Template ){
		
		
		var MovieListView = Backbone.View.extend({
			
			render:function(data){
				
				var compiledTemplate = _.template( Template );
            
	          	this.$el.append( compiledTemplate );
	            
	            return this;
            }

		});

		return MovieListView;
});