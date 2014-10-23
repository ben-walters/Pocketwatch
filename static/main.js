define([
	'app',
	'backbone',
	'layout',
	'core',
	'modules/dashboard',
	'modules/timeline',
	'modules/header',
	], function (app,Backbone,LayoutManager,Core,Dashboard,Timeline,Header) {
	
	console.log('MAIN INIT');

	//Init Routers
	new Dashboard.Router();
	new Timeline.Router();

	Backbone.history.start({ pushState: true })

	// Hijack Clicks for Single Page app
	$(document).on("click", "a:not([data-bypass])", function(evt) {
	  var href, options, protocol;
	  href = $(this).attr("href");
	  protocol = this.protocol + "//";
	  if (href && href.slice(0, protocol.length) !== protocol && href.indexOf("javascript:") !== 0) {
	    if (evt.metaKey || evt.ctrlKey) {
	      return true;
	    }
	    options = {
	      trigger: true
	    };
	    if ($(this).attr("data-replace")) {
	      options.replace = true;
	    }
	    Backbone.history.navigate(href, options);
	    
	    return false;
	  }
	});

});