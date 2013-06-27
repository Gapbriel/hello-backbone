define([
	'jquery',
	'underscore',
	'backbone',
	'localstorage',
	'models/movie'	
	], function($,_, Backbone ,LocalStorage , Movie){
		var Movies = Backbone.Collection.extend({
			
			model: Movie,
			localStorage:  new Backbone.LocalStorage("ls-movies"),
			
			initialize: function () {
				//console.log(Backbone);
				
			},

			comparator: function(obj) {
			  return obj.get("title"); 
			}
		});


		
		return Movies;
});