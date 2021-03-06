var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//'use strict';
//const electron = require('electron');
//const app = electron.app;
//const BrowserWindow = electron.BrowserWindow;

//var mainWindow = null;
//This is telling the app that routes is = the index.js file, which is in the routes folder
var routes = require('./routes/index');


//Tells our app that we want to talk to MongoDB.
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('mongodb://localhost:27017/mendoPeopleList');

// If I am running locally then use 'mongodb://localhost:27017/test' otherwise
// look for the environment variable
var url = process.env.CUSTOMCONNSTR_MongoDB || 'mongodb://localhost:27017/mendoPeopleList';

/*
 * Requiring the following package to be able to use sessions.
 * Need sessions to be able to store user details
 */
var session = require('express-session');

//Setting up the express app.  This must be put in before all middleware
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Including this to get sessions to work
var expressSessionOptions = {
  secret:'mySecret',
  resave: true,
  saveUninitialized: true
}

//session middleware - has to be used
app.use(session(expressSessionOptions));

//This makes the database accessible to the router
app.use(function(req, res, next){
  req.db=db;
  next();
});

//Anytime i get any kind of a request, use routes, which is the index.js file
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
