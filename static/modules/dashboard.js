define([
	'backbone',
	'core',
	'modules/header'
	], function (Backbone, Core, Header) {

	console.log("1 DASHBOARD HEADER", Header.view)

		var Dashboard = {
	        Router: {},
	        Views: {},
	        Helpers: {},
	        Collections: {}
	    }



		Dashboard.Router = Backbone.Router.extend({
			routes: {
				'' : 'renderDashboard',
				'dashboard' : 'renderDashboard'
			},
			renderDashboard: function() {
				new Dashboard.Views.DashboardMain({ el: $('#content') }).render()
			}
		});

		Dashboard.Views.DashboardMain = Backbone.Layout.extend({
			template: 'test',

			initialize: function(){
            	Header.view.setData({
            		test: "HELLO WORLD"
            	})
       		},
			// render: function(layout) {
			// 	console.log('rendered');
			// 	// this.$el.html('<a href="/wizard">Wizard</a>');
			// 	return layout(this).render();				
			// }

			afterRender: function() {
				console.log("AFTER RENDER ", this.$el.html())
			},

			serialize: function() {

				return {
					abc: "DEF"
				}

			}

		})

		return Dashboard;

	});