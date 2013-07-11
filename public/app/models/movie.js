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
				console.log('entro en validate',options.error);
				//return "no se guardo";
				//console.log(attrs.duration);
			    
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
			save: function (){							
					
				var urlOperation =  this.attributes.id ? '/editMovie' : '/movie';

				$.ajax({
                    url: urlOperation,
                    type: 'put',
                    data: this.attributes,
                    success: function( data, textStatus, jqXHR ) {
                        console.log( 'Post response:', data);
                    }
                });
			
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
