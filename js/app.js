// Filename: app.js
define([
  'jquery', 
  'underscore', 
  'backbone',
], function($, _, Backbone, Router){
  var initialize = function(){

     var Movies = Backbone.Model.extend({
        defaults:{            
            titulo:"Vacio",
            duracion:0,
            genero:"Vacio",
            sinopsis:"Vacio"
        }
      };

      var MoviesView = Backbone.View.extend({
        tagName:"div",
        className:"form",
        template:$("#moviesTmp").html(),// cambiar el id en index.html

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

     
  };

  return { 
    initialize: initialize
  };
});