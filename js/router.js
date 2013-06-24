define(['jquery', 
	    'underscore', 
	    'backbone',
	    'views/mainView',
	    'collections/movies'
], function($, _, Backbone, MainView, CollectionMovies){

	var listMovies = new CollectionMovies;

	var AppRouter = Backbone.Router.extend({
		
		routes: {

			"delete/:id" : "deleteMovie",//elimina desde la coleccion
			"edit/:id"   : "editMovie",//edita desde mains
			"add/":"addMovie",
			"*actions"   : "defaultAction"

		},

	}); 

	var initialize = function(){
		
		var app_router = new AppRouter,
		mainView = new MainView;

		app_router.on('route:addMovie', function () {

		});
		
		
		app_router.on( 'route:deleteMovie', function (id) {

			listMovies.remove(listMovies.get(id));
			mainView.ShowListView(true);
            
		});

		app_router.on( 'route:editMovie', function (id) { 
			mainView.model = listMovies.get(id);
			mainView.EditMovie();
		});

		app_router.on( 'route:defaultAction', function( actions ){
			mainView.ShowFormView();//muestra el template del formulario
       
        //listMovies.fetch().complete( function () {		       		
        	mainView.collection = listMovies;
        	mainView.ShowListView();//carga el template con todas las pelilculas existentes
        //});	

		Backbone.history.start();

			
		});	
        
        
       
        var arr = [{ id:1,
        			title:"rambo",
    			    duration:62,
    				genre:"accion",
    				sinopsis:"un militar...mata a todos."}, 
    				{id:2,
        			title:"rambo II",
    			    duration:70,
    				genre:"accion",
    				sinopsis:"un militar...mata a todos."},
    				{id:3,
        			title:"rambo III",
    			    duration:82,
    				genre:"accion",
    				sinopsis:"un militar...mata a todos."}
    				];
    	listMovies.add(arr);
	    	
       
       
	};
	

	return {
	
		initialize: initialize
			
	};

});