define([
	'jquery',
	'underscore',
	'backbone',
	'models/movie',
	'text!../templates/listsMovies.html'
	], function($,_, Backbone, Movie,Template){
		
		
		var MovieListView = Backbone.View.extend({
			
			render:function(){

				var compiledTemplate = _.template( Template);                
                //recorro la collecion y cargo los datos en el template
                //dos maneras distintas, en esta el each dentro de la view
                /*_.each(this.collectionMovies.models, function(item){
	                
	               this.$el.append( compiledTemplate( item.attributes ) );

	            }, this);*/
				//en este caso el each esta dentro del template			
				this.$el.html(compiledTemplate({
	                movies: this.collectionMovies.toJSON()
	            }));
	            
	            return this;
            }

	});

	return MovieListView;

});