const express = require('express');
const app = express();
const session = require('express-session');
const passport = require('passport');
const LinkedIn = require('passport-linkedin-oauth2').Strategy;
const routes = require('./routes.js');
const config = require('./settings')

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));


app.use(session({
	resave: false,
	saveUninitialized: true,
	secret: 'SECRET'
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, cb) {
	cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
	cb(null, obj);
});

passport.use(new LinkedIn({
		clientID: config.linkedinEnv.clientID,
		clientSecret: config.linkedinEnv.clientSecret,
		callbackURL: config.linkedinEnv.callbackURL,
		scope: ['r_emailaddress', 'r_liteprofile'],
	}, function (token, tokenSecret, profile, done) {
		return done(null, profile);
	}
));

app.use('/', routes);

const port = 3000;

app.listen(port, () => {
	console.log('Your app listening on port ' + port);
});