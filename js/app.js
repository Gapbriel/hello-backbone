// Filename: app.js
define([
  'jquery', 
  'underscore', 
  'backbone'
], function($, _, Backbone, Router){

  

  var initialize = function(){

      var Film = Backbone.Model.extend({
          
          defaults:{            
              title:"Vacio",
              genre:"Vacio",
              duration:0,
              sinopsis:"Vacio"
          
          }
        
      });

      var Movies = Backbone.Collection.extend({
          model: Film
      }); 

      var MovieView = Backbone.View.extend({
          tagName:"div",
          className:"containerMovies",
          template:$("#moviesList").html(),

          render:function () {
              
              var tmpl = _.template(this.template); //tmp toma Json y retorna HTML

              
              this.$el.html(tmpl(this.model.toJSON()));
              
              return this;
          
          },

          events: {
              
              "click .delete": "deleteMovie"
          
          },

          deleteMovie:function () {
              
              this.model.destroy();
              
              this.remove();
          
          }
      
      });

      var MoviesView = Backbone.View.extend({
          
          el:$("body"),

          initialize:function(){
          
            this.collection = new Movies();

            this.collection.on("add", this.renderMovie, this);
          
          },

          render:function(){
          
            var that = this;
          
            _.each(this.collection.models, function(item){

              that.renderMovie(item);
            
            });
          
          },

          events:{
            
            "click #add":"addMovie"
         
          },

          addMovie: function(e){

            e.preventDefault();

            var formData = {};

            $("#movies .data").each(function (i, el) {

                if ($(el).val() !== "") {
             
                    formData[el.id] = $(el).val();
             
                }
            
            });
            
            $('#cancel').click();
            
            this.collection.add(new Film(formData));   
         
          },

          renderMovie:function(item){
              
              var movieView = new MovieView ({
              
                model: item
              
              });
              
              this.$el.append(movieView.render().el);
          
          }
      });
     
      var newMovie = new MoviesView();
  };

  return { 
    initialize: initialize
  };
});