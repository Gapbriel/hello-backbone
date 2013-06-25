define( function( require ){
	// Manejador de las views, para tener un poco mas abstraccion entre el 
	// Router y las distintas views de la app.

	var FormView = require('views/formMovie'),
	     ListView = require('views/listMovies');//probando distintas formas de define signature REQUIRE

	var MainView = Backbone.View.extend({
            
            initialize: function()
            {            	
                  this.formView = new FormView;
                  this.listView = new ListView;
            },


            
            EditMovie: function () {
            	$('.submit').val('editar');
            	this.formView.modelMovie = this.model;
            	
            	$.each(this.model.attributes, function (key, val) {            	
            		$('#'+key).val(val);
            	});

            	$('#formContainer').find('input[type=text]').filter(':first').focus();

            	this.formView.modelMovie.on('change', function () {
            		console.log('escuchando cambio en el modelo');
            	});

            },


            ShowFormView: function (){
            	$('#movieList').html(this.formView.render().$el);
				
			},

			ShowListView: function (reLoad){
				//necesito agregar a la lista, otra manera de cargar el elemento en el DOM
				//console.log('mainView ',this.collection);
				this.listView.collectionMovies = this.collection;
				//this.listView.render().$el.appendTo('#movieList');
                        $('#movieList').html(this.listView.render().$el);
				

			}
    });
	return MainView;
});