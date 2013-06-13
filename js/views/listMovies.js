define([
	'jquery',
	'underscore',
	'backbone',
	'collections/movies',
	'text!templates/listsMovies.html'
	], function($, _, Backbone, Movies, MovieListTemplate, Movie){
		var MovieListView = Backbone.View.extend({
			el: $('movieList'),
			initialize: function(){
				this.collection = new Movies();
				
			}

		})
	})