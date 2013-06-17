define([
	'jquery',
	'underscore',
	'backbone',
	'collections/movies',
	'text!templates/listsMovies.html'
	], function($, _, Backbone, ListMovies, TemplateListMovie){
		
		var data = {'title':'rambo',
	          				'duration' : 60,
	          				'genre': 'acción',
	          				'sinopsis':'un militar....mata a todos.'
	          				};
		
		var MovieListView = Backbone.View.extend({
			//tagName:"div",
            
            //className:"containerMovies",

			el: $('#movieList'),
			
			
			
			initialize: function(){
				console.log('paso por listsMovies');
				//this.currentView.remove();
				if(typeof this.currentView === 'undefined')
            		this.currentView = new ListMovies;//OBJETO HEREDADO
          		this.currentView.models = data;
			
			},

			 events: {
              
              "click .delete": "deleteMovie"
          
          	},

          	deleteMovie:function () {
              console.log('eliminadno: ', this);
             // this.model.destroy();
              
              this.remove();
          
            },

			render:function(data){
				//console.log('data dentro del lismovie: ',data);
				if(typeof data !== 'undefined')
					this.currentView.models = data;

	          	var compiledTemplate = _.template( TemplateListMovie, this.currentView.models );
	          	
	          	this.$el.append( compiledTemplate );
            }

		});

		return MovieListView;
});