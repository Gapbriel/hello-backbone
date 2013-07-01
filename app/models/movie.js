define([
	'jquery',
	'underscore',
	'backbone',
	'models/movie'
	], function($,_, Backbone, Movie){


		var Movie = Backbone.Model.extend({
			defaults:{
				id:'',
				title:'',
				genre:'',
				duration:'',
				sinopsis:''
			},

			validate:function(attrs, options) {
				//console.log('entro en validate',options.error);
				//return "no se guardo";
				console.log(attrs.duration);
			    if ( isNaN(attrs.duration) ) {
			      console.log("fallo la duracion");
			      return "can't end before it starts";
			    }
			  
			},

			initialize: function () {
				
			}
		});

		return Movie;
});