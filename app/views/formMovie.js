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

          

    	return FormMovieView;

});