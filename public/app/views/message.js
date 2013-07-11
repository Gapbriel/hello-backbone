define([
	'jquery',
	'underscore',
	'backbone',
	'text!../templates/message.html'
	], function($,_, Backbone, Template){
		
		var message = Backbone.View.extend({

			render: function (){

                this.$el.html('.message');
                
                return this;
            
            },
		});

	return message;

});