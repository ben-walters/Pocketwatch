define([
	'backbone',
	'layout',
	'core',
	'handlebars'
	], function (Backbone,LayoutManager,Core,Handlebars) {
	
	console.log('APP INIT');

	// Backbone.LayoutManager = LayoutManager;

	LayoutManager.configure({

		manage: true,

		prefix: '/static/templates/',

		fetchTemplate: function(path) {

			console.log("FETCH " + path)

			var done = this.async();

			$.get(path + '.html', function(content) {
				done(Handlebars.compile(content));
			})
		},

		// render: function(template, context) {
		// 	console.log('RENDER THIS THING')
		// 	return Handlebars.compile(template)(context);
		// }
	});

});