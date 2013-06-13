define(['jquery', 
	    'underscore', 
	    'backbone',
	    'views/formMovie',
	    'views/listMovies'
], function($, _, Backbone, FormMovie, ListMovie){
	
	var AppRouter = Backbone.Router.extend({
		
		routes: {

			"/formMovie" : "ShowFormMovie",

			"/listMovies" : "ShowListMovie",

			"*actions"  : 'defaultAction'

		}

	}); 

	var initialize = function(){
		
		var app_router = new AppRouter;

		app_router.on('ShowFormMovie',function () {

			var formMovieView = new FormMovie ();
			
			formMovieView.render();

		});

		app_router.on('ShowListMovie', function () {

			var listMovie = new ListMovie();

			listMovie.render();
		
		});
		
		app_router.on('defaultAction', function(){

			console.log('No route:', actions);
		});

		Backbone.history.start();

	};
	

	return {
	
		initialize : initialize
	
	};

});