define([
	'jquery',
	'underscore',
	'backbone',
	'collections/movies',
	'text!templates/listsMovies.html'
	], function($, _, Backbone, Movies, MovieListTemplate, Movie){
		var MovieListView = Backbone.View.extend({
			el: $('#movieList'),
			render:function(){
          	///var data = {}; NO LE PASO NINGUNA DATA

          	var compiledTemplate = _.template( MovieListTemplate );
          	
          	this.$el.append( compiledTemplate );

          }

		});

		return MovieListView;
});