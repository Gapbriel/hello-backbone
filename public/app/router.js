define(['jquery', 
	    'underscore', 
	    'backbone',
	    'views/mainView',
	    'collections/movies',
	    'models/movie',
], function( $, _, Backbone, MainView ){

	var AppRouter = Backbone.Router.extend({
		
		routes: {
			"listMovies" : "showlistMovies",
			"listMovies/page/:page" : "showlistMovies",
			"showMovieForm"	 : "showForm", //para que muestre el form
			"delete/:id" : "deleteMovie",//elimina desde la coleccion				
			"edit/:id"	 : "editMovie", 	
			"*actions"   : "defaultAction",	
		},

	}); 		

	var initialize = function(){
		
		var app_router = new AppRouter,
		mainView = new MainView;
		
		app_router.on('route:showlistMovies',function(page){
			
			mainView.ShowListView(page);        	
			
		});
		
		app_router.on('route:showForm', function () {
		   	
			mainView.ShowFormView();		

		});		
		
		app_router.on( 'route:deleteMovie', function (id) {
			
			mainView.DeleteMovie(id);
		
		});

		app_router.on( 'route:editMovie', function (id) { 

			mainView.EditMovie(id);
		
		});

		app_router.on( 'route:defaultAction', function( actions ){		
			
			mainView.render();
			
		});

        Backbone.history.start();
       
	};
	

	return {
	
		initialize: initialize
			
	};

});