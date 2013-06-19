define([
	'underscore',
	'backbone',
	'models/movie',
	'backboneLocalStorage'
	], function(_, Backbone, Movie,LocalStorage){
		var Movies = Backbone.Collection.extend({
			model: Movie,
			localStorage: new LocalStorage("collectionMovie"),

		});

		
		return Movies;
});