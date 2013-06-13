define([
	'underscore',
	'backbone'
	], function(_, Backbone){
		var Movie = Backbone.Model.extend({
			defaults:{
				title:'',
				genre:'',
				duration:'',
				sinopsis:'',
			}
		});
		// return the model for the module

		return Movie;
});