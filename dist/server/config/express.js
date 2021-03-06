/**
 * Express configuration
 */

'use strict';

var express = require('express');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');
const session = require('express-session')
var path = require('path');
var config = require('./environment');
var passport = require('passport');

module.exports = function(app) {
  var env = app.get('env');

  app.set('views', config.root + '/server/views');
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser('foo'));
app.use(session({
secret : 'foo'
}));

  app.use(passport.initialize());
  app.use(passport.session());
  
  if ('production' === env) {

    app.use(express.static(path.join(config.root, 'dist/public')));

    app.set('appPath', config.root + '/dist/public');
    app.use(morgan('dev'));
  }

  if ('development' === env || 'test' === env) {

    app.use(express.static(path.join(config.root, '.tmp')));
    app.use(express.static(path.join(config.root, 'dist/public')));
    app.set('appPath', 'dist/public');
    app.use(morgan('dev'));
    app.use(errorHandler()); // Error handler - has to be last
  }
};
