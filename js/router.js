define(['jquery', 
	    'underscore', 
	    'backbone',
	    'views/formMovie',
	    'views/listMovies'
], function($, _, Backbone, FormMovie, ListMovie){

	var AppRouter = Backbone.Router.extend({
		
		routes: {

			"listMovies" : "ShowListMovie",

			"*actions"  : "defaultAction"

		}

	}); 

	var initialize = function(){
		
		var app_router = new AppRouter,
		formMovieView = new FormMovie (),
		listMovie = new ListMovie(),
		currentView;

		/*app_router.on('route:ShowFormMovie',function () {
		
			formMovieView.render();

		});*/

		app_router.on('route:ShowListMovie', function () {
			if( currentView )
			{			
				currentView.remove();			
			}

			currentView = listMovie;

			//listMovie.render();
			currentView.render().$el.before("#formContainer")
		
		});
		
		app_router.on('route:defaultAction', function(actions){
			
			console.log("no action :", actions);
			//formMovieView.fetch().complete(function(){
	              
	             // currentView.collection = formMovieView;
	              formMovieView.render();
	        
	       // });

		});


		Backbone.history.start();

	};
	

	return {
	
		initialize: initialize
			
	};

});