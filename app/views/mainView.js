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
                
                return this;
            
            },

            EditMovie: function (id) {
                this.formView.modelMovie = listMovies.get(id);                   
                
                this.formView.render();
                
                $('#formContainer .cancel').html('finalizar');
                
                $('#formContainer').find('input[type=text]').filter(':first').focus();

            },

            DeleteMovie: function (id) {
                console.log('entro en eliminar');
                var nModel = listMovies.get(id);           
                nModel.destroy();
                listMovies.remove(nModel);
                this.ShowListView();   

            },

            ShowFormView: function (){

                this.formView.collectionMovies = listMovies;

                this.formView.modelMovie = new ModelMovie;  

                this.formView.render();
                
                $('#formContainer').find('input[type=text]').filter(':first').focus();

            },

            ShowListView: function (page){
                
                listMovies.fetch();
                
                listMovies.sort();

                this.listView.collectionMovies = listMovies;

                this.$el.html(this.listView.render(page).$el);
                
            }


            
    });

    return MainView;

});