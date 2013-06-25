define([
	'jquery',
	'underscore',
	'backbone',
	'models/movie'
	], function($,_, Backbone, Movie){
		var Movie = Backbone.Model.extend({
			defaults:{
				id:0,
				title:'',
				genre:'',
				duration:0,
				sinopsis:''
			},

			/*validate: function() {
				
				if( isNaN( this.duration ) ){				
					console.log('el campo duration no es numerico');		
					return 'el campo duration no es numerico';		
				}
			
			},*/

			initialize: function () {
				/* No sirve porque cambia el cid por el id pero en el dom ya existe el id no el cid.
				this.on("add", function(){
						//var title = this.get("title");
						this.id = this.cid;
						console.log(this);
				});*/
			
				
			}
		});
		// return the model for the module

		return Movie;
});