define([
	'underscore',
	'backbone'
	], function(_, Backbone){
		var Movie = Backbone.Model.extend({
			defaults:{
				id:0,
				title:'',
				genre:'',
				duration:'',
				sinopsis:''
			},

			validate: function() {
				
				if( isNaN( this.duration ) ){				
					console.log('el campo duration no es numerico');				
				}
			
			},

			initialize: function () {
				/*this.on("invalid",function ( model, error ) {

					console.log('modelo: ',model,' error: ', error);

				})*/
			
				//console.log(attrs.title);
			}
		});
		// return the model for the module

		return Movie;
});