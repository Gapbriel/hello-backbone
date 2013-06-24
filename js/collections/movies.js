define([
	'jquery',
	'underscore',
	'backbone',
	'models/movie',
	'backboneLocalStorage'
	], function($,_, Backbone, Movie,LocalStorage){
		var Movies = Backbone.Collection.extend({
			
			model: Movie,
			
			localStorage:  new Backbone.LocalStorage("collection-Movie"),
			
			initialize: function () {
				//console.log(Backbone);
				//this.fetch();
			}

		});


		
		return Movies;
});