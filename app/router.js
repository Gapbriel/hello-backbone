define(['jquery', 
	    'underscore', 
	    'backbone',
	    'views/mainView',
	    'collections/movies',
	    'models/movie'
], function($, _, Backbone, MainView, CollectionMovies, ModelMovie){

	var listMovies = new CollectionMovies;

	var AppRouter = Backbone.Router.extend({
		
		routes: {
			"listMovies" : "showlistMovies",
			"showMovieForm"	 : "showForm", //para que muestre el form
			"delete/:id" : "deleteMovie",//elimina desde la coleccion
			"edit/:id"   : "editMovie",//edita desde mains
			"addMovie"   : "addMovie",
			"cancelMovie": "cancelMovie",
			"*actions"   : "defaultAction"

		},

	}); 

	

		

	var initialize = function(){
		
		var app_router = new AppRouter,
		mainView = new MainView;

		
		
		function ShowlistMovies(){
		
			listMovies.fetch();		   
			
			mainView.collection = listMovies;
			
			mainView.ShowListView();        	
			
		}

		app_router.on('route:showlistMovies', ShowlistMovies);

		app_router.on('route:cancelMovie', ShowlistMovies);

		app_router.on('route:showForm', function () {		
		    mainView.model = new ModelMovie;	
			mainView.ShowFormView();		
		});

		app_router.on('route:addMovie', function () {
			
			if($('#id').val() > 0){
				
                listMovies.get($('#id').val()).attributes.title = $('#title').val();
	            listMovies.get($('#id').val()).attributes.genre = $('#genre').val();
	            listMovies.get($('#id').val()).attributes.sinopsis = $('#sinopsis').val();
	            listMovies.get($('#id').val()).attributes.duration = $('#duration').val();
                listMovies.get($('#id').val()).save();

             }else{
            
               var nId = (!listMovies.length) ? 1 : listMovies.last().get('id') + 1;
               var nModel = new ModelMovie({
               					id:nId,
               					title : $('#title').val(),
                                genre : $('#genre').val(),
                                sinopsis : $('#sinopsis').val(),
                                duration : $('#duration').val()
                              });
                listMovies.add(nModel);
                nModel.save();
            	
            }
            ShowlistMovies()
		});
		
		
		app_router.on( 'route:deleteMovie', function (id) {
			//var nModel = listMovies.get(id);
            listMovies.get(id).destroy();
            listMovies.remove();
            ShowlistMovies();            
		});

		app_router.on( 'route:editMovie', function (id) { 
			mainView.model = listMovies.get(id);
			mainView.EditMovie();
		});

		app_router.on( 'route:defaultAction', function( actions ){		

        	console.log('defaultAction');

		});	
        
        Backbone.history.start();
       
	};
	

	return {
	
		initialize: initialize
			
	};

});