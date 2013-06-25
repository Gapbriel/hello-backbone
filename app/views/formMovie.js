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
            this.$el.html( _.template( Template, this.modelMovie.attributes ) );
           //  console.log('validation',Backbone.Validation);
             // Backbone.Validation.bind(this);
            return this;
          
          }

      });    

    	return FormMovieView;

});