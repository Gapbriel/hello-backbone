define( [
	'jquery',
	'underscore',
	'backbone',
  'text!templates/formMovie.html',
  'models/movie'
	],	function( $, _, Backbone, Template, ModelMovie) {
      
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
            "click .submit" : "addFormMovie"
          },

          addFormMovie: function () {
            var that = this;
            console.log('modelo', that.modelMovie);
            
            if( $('.submit').val() === 'editar' ){

              that.modelMovie.attributes.title = $('#title').val();
              that.modelMovie.attributes.genre = $('#genre').val();
              that.modelMovie.attributes.sinopsis = $('#sinopsis').val();
              that.modelMovie.attributes.duration = $('#duration').val();

            }else{
            
               that.modelMovie.add({title : $('#title').val(),
                                    genre : $('#genre').val(),
                                    sinopsis : $('#sinopsis').val(),
                                    duration : $('#duration').val()
                                  });
            
            } 
            //falta el save para persistir los datos.
            console.log('modelo modificado', that.modelMovie);
          },

          cleanFormMovie: function (){              
              this.$el.find('.data').val('');
          },
      });

    	return FormMovieView;

});