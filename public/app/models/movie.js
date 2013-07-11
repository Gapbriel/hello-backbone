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
			parse: function (response) {	            
	            response.id = response._id;
	            return response;
	        },
			validate: function(attrs, options) {
				//console.log('entro en validate',options.error);
				//return "no se guardo";
				//console.log(attrs.duration);
			    
				if ( attrs.title=== "" )  return "debe ingresar un título";

			    if ( attrs.genre === "" ) return "debe ingresar un genero";

			    if ( isNaN(attrs.duration) 
			    	 || attrs.duration === "" ) return "el campo duración no es numerico";

			    if ( attrs.sinopsis === "" ) return "debe ingresar una sinopsis";
			  
			},
			save: function (){		
				var validateResponse = this.validate(this.attributes);					
				
				if ( validateResponse ){	
				
					console.log('Hay un error en el formulario: ',validateResponse);
				
				}else{

					var urlOperation =  this.attributes.id ? '/editMovie' : '/movie';

					$.ajax({
	                    url: urlOperation,
	                    type: 'put',
	                    data: this.attributes,
	                    success: function( data, textStatus, jqXHR ) {
	                        console.log( 'Post response:', data);
	                    }
	                });

				}
			
			},

			initialize: function () {

				this.on("invalid", function(model, error){
            	 //$('.alert').append(error).show();
            	 alert(error);
        		});

			}
		
		});

		return Movie;
});
