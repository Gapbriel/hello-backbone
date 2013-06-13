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

		app_router.on('route:ShowFormMovie',function () {
			
			var formMovieView = new FormMovie ();
			
			formMovieView.render();

		});

		app_router.on('route:ShowListMovie', function () {

			var listMovie = new ListMovie();

			listMovie.render();
		
		});
		
		app_router.on('route:defaultAction', function(actions){

			console.log('No route:', actions);
		
		});


		Backbone.history.start();

	};
	

	return {
	
		initialize: initialize
			
	};

});