define(['jquery', 
	    'underscore', 
	    'backbone',
	    'views/mainView'
], function($, _, Backbone, MainView){

	var AppRouter = Backbone.Router.extend({
		
		routes: {

			"delete/:id" : "deleteMovie",//elimina desde la coleccion
			"edit/:id"   : "editMovie",//edita desde ?
			"*actions"   : "defaultAction"

		}

	}); 

	var initialize = function(){
		
		var app_router = new AppRouter,
		mainView = new MainView;

		app_router.on('')

		app_router.on( 'route:defaultAction', function( actions ){
			
	        mainView.ShowFormView();
	        mainView.ShowListView();

		});


		Backbone.history.start();

	};
	

	return {
	
		initialize: initialize
			
	};

});