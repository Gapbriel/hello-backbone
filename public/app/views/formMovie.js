define( [
	'jquery',
  'underscore',
  'backbone',
  'text!templates/formMovie.html',
	], function( $, _, Backbone,  Template) {

    	var FormMovieView = Backbone.View.extend({  
        
          el:$('#movieList'),

          events:{

            'click .submit' : 'addMovie',
            'click .cancel' : 'cancelMovie'

          },
          
          render: function() {
                       
            this.$el.html( _.template( Template, this.modelMovie.attributes ) ); 
           
            return this;
          
          },

          addMovie: function () {
                
                var formDom = this.$el.find('form');
                
                var attrs = formDom.serializeObject();
                      
                this.modelMovie.set(attrs);

                this.modelMovie.save(); 
                
            },


            cancelMovie: function () {     

              this.$el.find('#formContainer').remove();

            },

            cleanForm: function () {
              
              $('.cancel').html('Finalizar');
              
              $('.data').val('');
            
            },
            openMessage: function (msg){
              $('#message-text').html(msg);
              $('#myModal').modal('show');
            }

      });    

    	return FormMovieView;

});