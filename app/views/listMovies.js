define([
	'jquery',
	'underscore',
	'backbone',
	'models/movie',
	'text!../templates/listsMovies.html',
	'text!../templates/footerPagination.html'
	], function($,_, Backbone, Movie,Template, FooterPagination){
		
		var pagesCount = 5;  
		
		var MovieListView = Backbone.View.extend({
			
			render:function(page){

				if( page === undefined)
					page = 1;

				var compiledTemplate = _.template( Template);                
                //recorro la collecion y cargo los datos en el template
                //dos maneras distintas, en esta el each dentro de la view
                /*_.each(this.collectionMovies.models, function(item){
	                
	               this.$el.append( compiledTemplate( item.attributes ) );

	            }, this);*/
				var items = this.collectionMovies.pagination(pagesCount,page);

				//en este caso el each esta dentro del template			
				this.$el.html(compiledTemplate({
	                movies: items//this.collectionMovies.toJSON()
	            }));
	            
				//this.pagination(page);

	            return this;
            },

            pagination: function (page){

            	var footerTemplate = _.template( FooterPagination ); 

            	var pages = Math.ceil(this.collection.length/pagesCount);

            	var arr = [];
                var selectPage = false;
                for( var i = 1 ; i <= pages ; i++ )
                {
                    
                    if(i==page)
                        selectPage = true;
                    else
                    	selectPage = false;
                    
                    arr.push({ page: i, select_page:selectPage });
                }

            	this.$el.find('tfoot td').html(compiledTemplate({
	            
	                pages: arr//this.collectionMovies.toJSON()
	            
	            }));

            }

	});

	return MovieListView;

});