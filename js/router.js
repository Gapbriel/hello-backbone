define(['jquery', 
	    'underscore', 
	    'backbone',
	    'views/formMovie',
	    'views/lisMovies'
], function($, _, Backbone, FormMovie, ListMovie){
	
	var AppRouter = Backbone.router.extends({
		
		routers: {

			"/formMovie" : "ShowFormMovie",

			"*actions"  : 'defaultAction'

		}

	}); 

	var initialize = function(){
		
		var app_router = new AppRouter;

		app_router.on('ShowFormMovie',function () {

			var formMovieView = new FormMovieView ();
			
			formMovieView.render();

		});

		Backbone.history.start();

	};
	

	return {
	
		return initialize:initialize
	
	};

});