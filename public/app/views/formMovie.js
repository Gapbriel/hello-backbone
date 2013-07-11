define( [
	'jquery',
  'underscore',
  'backbone',
  'collections/movies',
  'models/movie',   
  'text!templates/formMovie.html',
	], function( $, _, Backbone, CollectionMovies, ModelMovie,  Template) {

    var collection = new CollectionMovies;

    	var FormMovieView = Backbone.View.extend({  
        
          el:$('#movieList'),

          events:{

            'click .submit' : 'addMovie',
            'click .cancel' : 'cancelMovie'

          },
          
          render: function() {
                       
            this.$el.html( _.template( Template, this.modelMovie.attributes ) ); 
           
            return this;
          
          },

          addMovie: function () {

                if( this.$el.find('#id').val() != "" ){
                      
                    this.modelMovie.attributes = ({ id : $('#id').val(),
                                                    title : $('#title').val(),
                                                    genre : $('#genre').val(),
                                                    sinopsis : $('#sinopsis').val(),
                                                    duration : $('#duration').val()
                                                });

                    this.modelMovie.save(); 
                 
                 }else{
                 
                   var newModel = new ModelMovie({ id : 0,
                                                   title : $('#title').val(),
                                                   genre : $('#genre').val(),
                                                   sinopsis : $('#sinopsis').val(),
                                                   duration : $('#duration').val()
                                                });
                    newModel.save();

                    this.collectionMovies.add(newModel);
                    
                }

            },

            showError: function(){
                
            },

            cancelMovie: function () {

                if ( $('.cancel').html() === "finalizar" )
                   window.location.hash = "/listMovies";
                else                   
                   window.location.hash = "";
                //this.$el.html('');    
            
            },

            cleanForm: function () {
              
              $('.cancel').html('Finalizar');
              
              $('.data').val('');
            
            }

      });    

    	return FormMovieView;

});