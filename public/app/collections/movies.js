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

			pagination : function(perPage, page) {
		       page = page-1;
		       var collection = this;
		       collection = _(collection.rest(perPage*page));
		       collection = _(collection.first(perPage));    
		       return collection.map( function(model) { return model.toJSON() } ); 
		    },

			comparator: function(obj) {
			  return obj.get("title"); 
			}
		});


		
		return Movies;
});