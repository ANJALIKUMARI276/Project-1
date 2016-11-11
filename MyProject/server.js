var express = require('express');
var app = express();
var bodyParser=require('body-parser');
var session = require('express-session');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;


var User = require('./models/user.js');

var routes = require('./routes/theatreRoute');
var routes1 = require('./routes/movieRoute');
var routes2 = require('./routes/tm_scheduleRoute');
var routes3 = require('./routes/reviewRoute');
var routes4 = require('./routes/bookingRoute');
var auth =  require('./routes/auth');


app.use(bodyParser.json());

app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));
// configure passport
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/theatreapi', routes);
app.use('/movieapi', routes1);
app.use('/tm_scheduleapi',routes2);
app.use('/reviewapi',routes3);
app.use('/bookingapi',routes4);
app.use('/user/', auth);

// Only load this middleware in dev mode (important).
if (app.get('env') === 'development') {
 var webpackMiddleware = require("webpack-dev-middleware");
 var webpack = require('webpack');

 var config = require('./webpack.config');

 app.use(webpackMiddleware(webpack(config), {
   publicPath: "/build",

   headers: { "X-Custom-Webpack-Header": "yes" },

   stats: {
     colors: true
   }
 }));

}



var server = app.listen(8000, function () {
 console.log('listening on port 8000');
});
