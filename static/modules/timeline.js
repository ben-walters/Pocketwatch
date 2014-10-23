define([
	'backbone',
	'core'
	], function (Backbone, Core) {

		var Timeline = {
	        Router: {},
	        Views: {},
	        Helpers: {},
	        Collections: {}
	    }


		Timeline.Router = Backbone.Router.extend({
			routes: {
				'timeline' : 'renderTimeline'
			},
			renderTimeline: function() {
				new Timeline.Views.TimelineMain()
			}
		});

		Timeline.Views.TimelineMain = Backbone.View.extend({
			el: $('#content'),
			initialize: function(){
            	this.render();
       		},
			render: function() {
				console.log('rendered');
				// this.$el.html('<a href="/wizard">Wizard</a>');
				this.$el.html('TIMELINE VIEW CONTENT');				
			}
		})

		return Timeline;

	});