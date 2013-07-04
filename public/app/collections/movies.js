define([
	'jquery',
	'underscore',
	'backbone',
	'localstorage',
	'models/movie'	
	], function($,_, Backbone ,LocalStorage , Movie){
		var Movies = Backbone.Collection.extend({
			model: Movie,
			url:'/listMovies',//read server side collections
			
		});
		
		return Movies;
});