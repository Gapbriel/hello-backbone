define(['jquery', 
        'underscore', 
        'backbone',
        'views/mainView',
        'collections/movies',
        'models/movie',
        'views/formMovie',
        'views/listMovies',
        'views/message'
        ],function($, _, Backbone, MainView, CollectionMovies, ModelMovie, FormView, ListView, MessageView){

    var listMovies = new CollectionMovies;

    var MainView = Backbone.View.extend({
            
            el:$('#movieList'),

            initialize: function()
            {               
                  
                  this.formView = new FormView;
                  
                  this.listView = new ListView;

                  this.messageView = new MessageView;
            
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
              /*  console.log('entro en eliminar');
                 before using mongoDB and Node.js*/
                $.ajax({
                        url: '/delete/',
                        type: 'delete',
                        data: {'id':id},
                        success: function( data, textStatus, jqXHR ) {
                            if (data){
                                console.log(data);
                            }else{     
                                /*var nModel = listMovies.get(id);           
                                nModel.destroy();
                                listMovies.remove(nModel);
                                this.ShowListView();
                                */
                            }

                        }
                });

            },

            ShowFormView: function (){
                
                this.formView.collectionMovies = listMovies;

                this.formView.modelMovie = new ModelMovie;  

                this.formView.render();
                
                $('#formContainer').find('input[type=text]').filter(':first').focus();

            },

            ShowListView: function (page){
                var that = this;
                
                listMovies.fetch({
                   
                    success: function(){
                        
                        listMovies.models = arguments[1];
                        that.listView.items = listMovies.models;
                        that.$el.html(that.listView.render(page).$el);         
                    },
                    error:function () {
                        console.log(arguments);
                    }
                });
                
                
            },

            ShowMessage: function(message){
                
            }
            
    });

    return MainView;

});