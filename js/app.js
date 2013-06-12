// Filename: app.js
define([
  'jquery', 
  'underscore', 
  'backbone'
], function($, _, Backbone, Router){

  

  var initialize = function(){
     
    var Movie = Backbone.Model.extend({
        defaults:{            
            titulo:"Vacio",
            duracion:0,
            genero:"Vacio",
            sinopsis:"Vacio"
        }
      });

    var Movies = Backbone.Collection.extend({
        model: Movie
    }); 

      var MovieView = Backbone.View.extend({
          tagName:"div",
          className:"form",
          template:$("#movies").html(),// cambiar el id en index.html

          render:function () {
              var tmpl = _.template(this.template); //tmp toma Json y retorna HTML

              this.$el.html(tmpl(this.model.toJSON()));
              return this;
          },

          events: {
              "click .delete": "deleteMovie"
          },

          deleteBook:function () {
              //Delete model
              this.model.destroy();

              //Delete view
              this.remove();
          }
      });

      var MoviesView = Backbone.View.extend({
          el:$("#movies"),

          initialize:function(){
            this.collection= new Movies(movies);
            this.render();
          },

          render:function(){
            var that = this;
            _.(this.collection.models, function(item){
              that.renderMovie(item);
            });
          },

          events:{
            "click #add":"addMovie"
          },

          addMovie: function(e){
            e.preventDefault();

            var formData = {};

            $("#addMovie div").children("input").each(function (i, el) {
                if ($(el).val() !== "") {
                    formData[el.id] = $(el).val();
                }
            });

            movies.push(formData);

            this.collection.add(new Movie(formData));    
          }

          renderMovie:function(item){
              var movieView = new MovieView ({
                model: item
              });
              this.$el.append(movieView.render().el);
          }
      });
     
  };

  return { 
    initialize: initialize
  };
});