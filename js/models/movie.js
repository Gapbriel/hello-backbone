define([
	'underscore',
	'backbone'
	], function(_, Backbone){
		var Movie = Backbone.Model.extend({
			defaults:{
				title:'hola mundo',
				genre:'asd',
				duration:'50',
				sinopsis:'adasd'
			},

			/*validate: function() {
				if(attrs.)
			},*/

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