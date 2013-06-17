define( [
	'jquery',
	'underscore',
	'backbone',
  'text!templates/formMovie.html',
  'views/listMovies'
 /* 'collections/movies',
  'models/movie'*/
	],	function( $, _, Backbone, Template, ListViewMovie) {//,ListMovies,Film

       

    	var FormMovieView = Backbone.View.extend({
          el: $('#formContainer'),

          initialize: function()
          {
              this.listsMovies = new ListViewMovie; 
                
          },

          events:{
            'click #add' : 'addMovie'
          },

          addMovie: function(e){
             var formData = [];

              $("#movies .data").each(function (i, el) {

                    if ($(el).val() !== "") {
                 
                        formData[el.id] = $(el).val();
                 
                    }
                
              });
              
              this.listsMovies.render(formData);
          },

          render: function() {

          	var compiledTemplate = _.template( Template );
            
          	this.$el.html( compiledTemplate );
            
            return this;
          
          }
          
      });

    	return FormMovieView;

});