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
			    
				if ( attrs.title=== undefined ) {
			      console.log("fallo el titulo");
			      return "write a title";
			    }

			    if ( attrs.genre === undefined ) {
			      console.log("fallo el genero");
			      return "write a genre you mother fucker!";
			    }

			    if ( isNaN(attrs.duration) ) {
			      console.log("fallo la duracion");
			      return "can't end before it starts";
			    }

			    if ( attrs.sinopsis === undefined ) {
			      console.log("fallo el genero");
			      return "write a sinopsis you mother fucker!";
			    }

			  
			},

			initialize: function () {
				
			}
		});

		return Movie;
});