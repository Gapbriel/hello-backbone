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

			validation: {
				
				title: {
					required: true,
					msg:"Por favor escriba el nombre de la pelicula."
				},
				genre: {
					required: true,
					msg:"Por favor escriba el tipo de genero de la pelicula."
				},
				duration: {
					required: true,
					pattern: 'number',
					msg:"Por favor escriba la duracion de la pelicula."
				},
				sinopsis:{
					required: true,
					msg:"Por favor escriba la sinopsis de la pelicula."
				}

			
			},

			initialize: function () {
				/* No sirve porque cambia el cid por el id pero en el dom ya existe el id no el cid.
				this.on("add", function(){
						//var title = this.get("title");
						this.id = this.cid;
						console.log(this);
				});*/
			
				
			}
		});

		return Movie;
});