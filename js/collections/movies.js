define([
	'underscore',
	'backbone',
	'models/movie'
	], function(_, Backbone, Movie){
		var Movies = Backbone.Collection.extend({
			model: Movie
		});

		return Movies;
});