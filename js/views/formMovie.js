define( [
	'jquery',
	'underscore',
	'backbone',
  'text!templates/formMovie.html',
  'models/movie'
	],	function( $, _, Backbone, Template, ModelMovie) {
      
      

    	var FormMovieView = Backbone.View.extend({   
           
          initialize: function (){
              _.bindAll(this, "render", "addFormMovie");

          },

          render: function() {
           
            this.$el.html( _.template( Template ));//, this.model.attributes ) );
            
            return this;
          
          },

          events: {
            "click .cancel" : "cleanFormMovie",
            "click .submit" : "addFormMovie"
          },

          addFormMovie: function (arg) {
           /* var modelView = new ModelMovie;
            //console.log('toco en cargar', this.$el.find('.data'));
            $.each(this.$el, function ( key, val) {

             // modelView.set({key:val});
             console.log('key ', key, ' valor: ', val);

            });*/
            //console.log('modelo ', modelView);
          },

          cleanFormMovie: function (){              
              this.$el.find('.data').val('');
          },
      });

    	return FormMovieView;

});