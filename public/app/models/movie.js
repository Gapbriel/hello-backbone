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
			    
				if ( attrs.title=== "" )  return "Debe ingresar un título";

			    if ( attrs.genre === "" ) return "Debe ingresar un genero";

			    if ( isNaN(attrs.duration) 
			    	 || attrs.duration === "" ) return "El campo duración no es numerico";

			    if ( attrs.sinopsis === "" ) return "Debe ingresar una sinopsis";
			  
			},
			save: function (){		
				var validateResponse = this.validate(this.attributes);					
				
				if ( validateResponse ){

					$('#message-text').html(validateResponse) ;
        			$('#myModal').modal('show');
				
				}else{
					var that = this;
					var urlOperation =  this.attributes.id ? '/editMovie' : '/movie';
					
					var handResp = $.post(urlOperation,this.attributes);	
					
					handResp.done (function(data){
						console.log('se guardo ', data.title);
					});

					handResp.fail(function (error){
						console.log(error);		
					});

				}
			
			},

			openMessage: function (msg){
				$('#message-text').html(msg);
        		$('#myModal').modal('show');
			}

		});

		return Movie;
});
