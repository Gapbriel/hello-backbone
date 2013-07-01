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
                      
                      console.log('editando movie');  

                      this.modelMovie.attributes = ({  id : $('#id').val(),
                                              title : $('#title').val(),
                                              genre : $('#genre').val(),
                                              sinopsis : $('#sinopsis').val(),
                                              duration : $('#duration').val()
                                          });                      
                      
                   this.modelMovie.save()
                    /*if(this.modelMovie.save()){
                      window.location.hash = "/listMovies";
                      console.log('success');
                    }else {
                      console.log('error');//mostrar error
                    } */
                 
                 }else{
                 
                   var newModel = new ModelMovie({id : parseInt(Date.now()),
                                                  title : $('#title').val(),
                                                  genre : $('#genre').val(),
                                                  sinopsis : $('#sinopsis').val(),
                                                  duration : $('#duration').val()
                                                });
                   
                    this.collectionMovies.add(newModel);
                    newModel.save()
                    /*if(newModel.save()){
                      window.location.hash = "/listMovies";
                      console.log('success');
                    }else {
                      console.log('error');//mostrar error
                    } */
                    this.cleanForm();
                }

            },

            cancelMovie: function () {

                if ( $('.cancel').html() === "finalizar" )
                   window.location.hash = "/listMovies";
                else                   
                   window.location.hash = "#";
                //this.$el.html('');    
            
            },

            cleanForm: function () {
              
              $('.cancel').html('finalizar');
              
              $('.data').val('');
            
            }

      });    

    	return FormMovieView;

});