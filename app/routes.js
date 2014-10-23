module.exports = function(app, passport) {

// normal routes ===============================================================

	// show the home page (will also have our login links)
	app.get('*', function(req, res) {
		res.render('Dashboard/dashboard.hbs');
	});


	/* Commented on: 21 Oct 2014 by Bwalters
	app.get('/navigation', function(req, res) {
		res.render('Navigation/navigation.hbs');
	});

		// PROFILE SECTION =========================
	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user : req.user
		});
	});

	// LOGOUT ==============================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	*/



// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

/* Commented on: 21 Oct 2014 by Bwalters
	// locally --------------------------------
		// LOGIN ===============================
		// show the login form
		app.get('/login', function(req, res) {
			res.render('dashboard/dashboard.ejs', { message: req.flash('loginMessage') });
		});

		// process the login form
		app.post('/login', passport.authenticate('local-login', {
			successRedirect : '/dashboard', // redirect to the secure profile section
			failureRedirect : '/login', // redirect back to the signup page if there is an error
			failureFlash : true // allow flash messages
		}));
*/

}

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();

	res.redirect('/');
}
