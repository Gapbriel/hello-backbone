define( [
	'jquery',
  'underscore',
  'backbone',
  'text!templates/formMovie.html'
	], function( $, _, Backbone, Template) {

    	var FormMovieView = Backbone.View.extend({   
           
          initialize: function (){
              //_.bindAll(this, "render", "addFormMovie");

          },

          render: function() {
           
            this.$el.html( _.template( Template ));//, this.model.attributes ) );
            
            return this;
          
          },

          events: {
            "click .cancel" : "cleanFormMovie",
            //"click .submit" : "addFormMovie"
          },

          /*addFormMovie: function () {
            
            if( $('.submit').val() === 'editar' ){

              this.modelMovie.attributes.title = $('#title').val();
              this.modelMovie.attributes.genre = $('#genre').val();
              this.modelMovie.attributes.sinopsis = $('#sinopsis').val();
              this.modelMovie.attributes.duration = $('#duration').val();

            }else{
            
               this.modelMovie.add({title : $('#title').val(),
                                    genre : $('#genre').val(),
                                    sinopsis : $('#sinopsis').val(),
                                    duration : $('#duration').val()
                                  });
            
            } 
            //falta el save para persistir los datos.           
            this.cleanFormMovie();
          },

          */
          cleanFormMovie: function (){  
              this.$el.find('.data').val('');
              this.$el.find('.submit').val('cargar');
          }
      });

    	return FormMovieView;

});