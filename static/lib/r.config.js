require.config({
	deps: ['/static/main.js'],
    baseUrl: '/static/',
    paths: {
        underscore: 'lib/underscore',
        backbone: 'lib/backbone',
        layout: 'lib/layoutmanager.min',
        jquery: 'lib/jquery-1.11.1.min',
        core: 'lib/core',
        handlebars: 'lib/handlebars'
    },
    shim: {
	    'backbone': {
	    	deps: ['underscore' , 'jquery' , 'handlebars'],
            exports: 'Backbone'
	    } 
    }
});