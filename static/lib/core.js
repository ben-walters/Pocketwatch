
define(function() {
	var core = {
		init: function() {
			console.log('Core Init');
		},
		module: function(options) {
			var module = {}
			module.extend({
				Router: {},
				Views: {},
				Helpers: {},
				Collections: {}
			}, options)

			return module
		}
	}

	return core;
});