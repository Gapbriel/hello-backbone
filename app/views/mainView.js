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

            	this.ShowFormView();

                  $('#formContainer').find('input[type=text]').filter(':first').focus();
            },


            ShowFormView: function (){

      	    this.formView.modelMovie = this.model;
                
                $('#movieList').html(this.formView.render().$el);

		    $('#formContainer').find('input[type=text]').filter(':first').focus();
            
            },

		ShowListView: function (reLoad){
			
                  this.listView.collectionMovies = this.collection;
                  
                  $('#movieList').html(this.listView.render().$el);
		
            }
    });
	return MainView;
});