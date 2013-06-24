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
            	
            	$.each(this.model.attributes, function (key, val) {            	
            		$('#'+key).val(val);
            	});

            	$('#formContainer').find('input[type=text]').filter(':first').focus();
            	
            },
            

            ShowFormView: function (){
            	$('#formContainer').html(this.formView.render().$el);
				
			},

			ShowListView: function (reLoad){
				//necesito agregar a la lista, otra manera de cargar el elemento en el DOM
				//console.log('mainView ',this.collection);
				this.listView.collectionMovies = this.collection;

				if(reLoad)//no esta bien implementado, debería elminarse al elminar el registro del modelo.
					this.listView.render().$el.html('');

				this.listView.render().$el.appendTo('#movieList');

			}
    });
	return MainView;
});