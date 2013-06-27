define( [
	'jquery',
  'underscore',
  'backbone',
  'models/movie',
  'text!templates/formMovie.html'
	], function( $, _, Backbone, ModelMovie, Template) {

    	var FormMovieView = Backbone.View.extend({   
           
          initialize: function (){
             _.bindAll(this.events);
          },

          events:{

            'click .submit' : 'addMovie',
            'click .cancel' : 'cancelMovie'

          },

          render: function() {

            this.$el.html( _.template( Template, this.modelMovie.attributes ) );           
            Backbone.Validation.bind(this);
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
               
                $('.cancel').html('finalizar');

            },

            cancelMovie: function () {

                if ( $('.cancel').html() === "finalizar" )
                   window.location.hash = "/listMovies";
                                   
                this.remove();    
            
            },

            cleanForm: function () {
              
              $('.cancel').html('finalizar');
              
              $('.data').val('');
            
            }

      });    

    	return FormMovieView;

});