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

            ShowFormView: function (){
            	//necesito pisar el formulario
            	$('#formContainer').html(this.formView.render().$el);
				
			},

			ShowListView: function (){
				//necesito agregar a la lista, otra manera de cargar el elemento en el DOM
				this.listView.render().$el.appendTo('#movieList');

			}
    });
	return MainView;
});