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
			    
				if ( attrs.title=== "" ) {
			     
			      return "write a title!";
			    }

			    if ( attrs.genre === "" ) {
			      
			      return "write a genre you mother fucker!";
			    }

			    if ( isNaN(attrs.duration) || attrs.duration === "" ) {
			      
			      return "can't end before it starts";
			    }

			    if ( attrs.sinopsis === "" ) {
			      
			      return "write a sinopsis you mother fucker!";
			    }

			  
			},

			initialize: function () {
				this.on("invalid", function(model, error){
            	 $('.error-msg').text('Error en un campo').show();
        		});

			}
		});

		return Movie;
});