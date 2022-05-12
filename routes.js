const passport = require('passport');
const express = require('express');
let router = express.Router();

router.get('/', function (req, res) {
	res.render('index.ejs');
});

router.get('/profile', isLoggedIn, function (req, res) {
	console.log(req.user);
	res.render('profile.ejs', {
		user: req.user
	});
});

router.get('/auth/linkedin', passport.authenticate('linkedin', {
	scope: ['r_emailaddress', 'r_liteprofile'],
}));

router.get('/auth/linkedin/callback',
	passport.authenticate('linkedin', {
		successRedirect: '/profile',
		failureRedirect: '/login'
	}));

router.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/');
});

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated())
		return next();
	res.redirect('/');
}

module.exports = router;