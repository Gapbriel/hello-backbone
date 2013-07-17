define([
	'jquery',
	'underscore',
	'backbone',
	'models/movie'
	], function($,_, Backbone, Movie){


		var Movie = Backbone.Model.extend({
			url:'/movie',
			defaults:{
				id:'',
				title:'',
				genre:'',
				duration:'',
				sinopsis:''
			},
			parse: function (response) {	            
	            response.id = response._id;
	            return response;
	        },
			validate: function(attrs, options) {
				
				if ( attrs.title=== "" )  return "Debe ingresar un título";

			    if ( attrs.genre === "" ) return "Debe ingresar un genero";

			    if ( isNaN(attrs.duration) 
			    	 || attrs.duration === "" ) return "El campo duración no es numerico";

			    if ( attrs.sinopsis === "" ) return "Debe ingresar una sinopsis";
			  
			},
			initialize: function () {
				
				this.on("invalid", function(modelo, error){
					$('#message-text').html(error);
        			$('#myModal').modal('show');
				});
			
				
			}
		});

		return Movie;
});
