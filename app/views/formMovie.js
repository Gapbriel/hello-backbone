define( [
	'jquery',
  'underscore',
  'backbone',
  'text!templates/formMovie.html'
	], function( $, _, Backbone, Template) {

    	var FormMovieView = Backbone.View.extend({   
           
          initialize: function (){
             // _.bindAll(this, "render", "cancelFormMovie");
          },


          render: function() {
           
            this.$el.html( _.template( Template ));//, this.model.attributes ) );
            
             this.$el.find('input[type=text]').filter(':first').focus();

            return this;
          
          }

      });    

    	return FormMovieView;

});