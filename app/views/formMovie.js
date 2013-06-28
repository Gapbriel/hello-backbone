define( [
	'jquery',
  'underscore',
  'backbone',
  'models/movie',
  'text!templates/formMovie.html'
	], function( $, _, Backbone, ModelMovie, Template) {

    	var FormMovieView = Backbone.View.extend({  
        
          el:$('#movieList'),

          events:{

            'click .submit' : 'addMovie',
            'click .cancel' : 'cancelMovie'

          },

          initialize: function (){

            

          },

          render: function() {

            this.$el.html( _.template( Template, this.modelMovie.attributes ) ); 

          
            
            $('#formContainer').find('input[type=text]').filter(':first').focus();

            return this;
          
          },

          addMovie: function () {

                nModel = this.modelMovie;
                
                
                if( typeof(nModel) != "undefined" ){
                  
                      nModel.attributes = ({  
                                              title : $('#title').val(),
                                              genre : $('#genre').val(),
                                              sinopsis : $('#sinopsis').val(),
                                              duration : $('#duration').val()
                                          });                      
                      
                       nModel.save();
                       
                 }else{
                  
                     var newModel = new ModelMovie({id : parseInt(Date.now()),
                                                    title : $('#title').val(),
                                                    genre : $('#genre').val(),
                                                    sinopsis : $('#sinopsis').val(),
                                                    duration : $('#duration').val()
                                                  });
                      listMovies.add(newModel);
                      
                      newModel.save();               
                    
                }
               
                this.cleanForm();

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