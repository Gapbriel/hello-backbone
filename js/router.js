define(['jquery', 
	    'underscore', 
	    'backbone',
	    'views/formMovie',
	    'views/listMovies'
], function($, _, Backbone, FormMovie, ListMovie){

	var AppRouter = Backbone.Router.extend({
		
		routes: {

			//"listMovies" : "ShowListMovie",

			"*actions"  : "defaultAction"

		}

	}); 

	var initialize = function(){
		
		var app_router = new AppRouter,
		formMovieView = new FormMovie (),
		listMovie = new ListMovie();

		
		app_router.on('route:defaultAction', function(actions){
			
	        formMovieView.render();

	        listMovie.render();

		});


		Backbone.history.start();

	};
	

	return {
	
		initialize: initialize
			
	};

});