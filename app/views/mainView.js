define(['jquery', 
        'underscore', 
        'backbone',
        'views/mainView',
        'collections/movies',
        'models/movie',
        'views/formMovie',
        'views/listMovies'
        ],function($, _, Backbone, MainView, CollectionMovies, ModelMovie, FormView, ListView){

  var listMovies = new CollectionMovies;

	var MainView = Backbone.View.extend({
            
            el:$('#movieList'),

            initialize: function()
            {            	
                  this.formView = new FormView;
                  this.listView = new ListView;
            },

            render: function (){

                this.$el.html('');
            },

            EditMovie: function (id) {

                this.formView.collectionMovies = listMovies;
                
                this.formView.modelMovie = listMovies.get(id); 
             	  
                this.$el.html(this.formView.render().$el);
              
                $('#formContainer').find('input[type=text]').filter(':first').focus();
            
            },


            ShowFormView: function (){

                this.formView.modelMovie = new ModelMovie;      	        
                
                this.formView.that = this;

                this.$el.html(this.formView.render().$el);

		            $('#formContainer').find('input[type=text]').filter(':first').focus();
            
            },

        		ShowListView: function (){

        			  listMovies.fetch();
                //ordena la coleccion pero antes declara un "comparator" en .colection.extends
                listMovies.sort();

                this.listView.collectionMovies = listMovies;
                                                
                this.$el.html(this.listView.render().$el);
        		
            },

            events:{

            'click .submit' : 'addMovie',
            'click .cancel' : 'cleanForm'

          },

          

            
    });

	return MainView;

});