define([
	'jquery',
	'underscore',
	'backbone',
	'collections/movies',
	
	], function($, _, Backbone, Movies, Movie){
		var MovieListView = Backbone.View.extend({
			el: $('#movieList'),
			render:function(){
          	///var data = {}; NO LE PASO NINGUNA DATA
          	var MovieListTemplate = require('text!templates/listsMovies.html');
          	var compiledTemplate = _.template( MovieListTemplate );
          	
          	this.$el.append( compiledTemplate );

          }

		});

		return MovieListView;
});