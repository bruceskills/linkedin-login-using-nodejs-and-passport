## LinkedIn login using Node and Passport.

This is a sample project to Linkedin login using Node and Passport.

### Prerequisites

1. Install Node and NPM
2. Basic knowledge of HTML, JS and CSS

### How to start

1. Clone the repository

```
$ git clone https://github.com/bruceskills/linkedin-login-using-nodejs-and-passport.git LinkedinLogin
```

2. Go to the directory `LinkedinLogin`

```
cd LinkedinLogin\
```
3. Enter the following command

```
npm install
```
4. Open the file `settings.js` in your code editor and replace the following <CLIENT_ID> and <CLIENT_SECRET> with your Linkedin app id and secret.

`````` JS
module.exports = {
	'linkedinEnv': {
	    'clientID': '<CLIENT_ID>', // your app ID
	    'clientSecret': '<CLIENT_SECRET>', // your app secret
	    'callbackURL': 'http://127.0.0.1:3000/auth/linkedin/callback' // your callback URL
	    }
	}
``````
5. Then run the following command in your terminal

```
npm start
```
6. Open the link [http://localhost:3000](http://localhost:3000)



