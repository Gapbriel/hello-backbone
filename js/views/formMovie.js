define( [
	'jquery',
	'underscore',
	'backbone',
  'text!templates/formMovie.html',
	],	function( $, _, Backbone, Template) {

    	var FormMovieView = Backbone.View.extend({         

          render: function() {
            //console.log(this.el);
          	var compiledTemplate = _.template( Template );
            
          	this.$el.append( compiledTemplate );
            
            return this;
          
          }
          
      });

    	return FormMovieView;

});