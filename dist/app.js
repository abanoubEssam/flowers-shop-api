"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _path = _interopRequireDefault(require("path"));

var _passport = _interopRequireDefault(require("passport"));

var _connection = require("./utils/connection");

var _swagger = require("./middlewares/swagger.middleware");

// const swaggerUI = require('swagger-ui-express');
// import { customSwaggerSpec } from './services/swaggerDocs.service';
// const mongoose = require('mongoose');
// const autoIncrement = require('mongoose-auto-increment');
// import config from 'config'
var shops = require('./routes/shop.routes');

var User = require('./routes/user.routes');

var auth = require('./routes/auth.routes');

var globalFlowers = require('./routes/allFlowers.routes');

var pushNotification = require('./routes/user-push-token.routes');

var Notification = require('./routes/notification.routes');

var express = require('express');

var app = express();
(0, _connection.connectDB)(); // const db = config.get('db');
// autoIncrement.initialize(mongoose.connection);
// mongoose.connect(db, {
//   useNewUrlParser: true
// })
//   .then(() => console.log(`Connected to ${db}...`))
//   .catch(err => console.error(`Could not connect to ${db}...`));
// mongoose.Promise = global.Promise;

require('./services/prod')(app);

app.use(express.json());
app.use(_passport.default.initialize());
app.use('/uploads', express.static(_path.default.join(__dirname, '..', 'uploads')));
app.use('/api/shops', shops);
app.use('/api/flowers', globalFlowers);
app.use('/api/users', User);
app.use('/api/notification', Notification);
app.use('/api/push-notifications', pushNotification);
app.use('/api/auth', auth);
app.use(function (req, res, next) {
  console.log('Method', req.method);
  console.log('ROUTE: ', req.route);
  next();
});
(0, _swagger.getSwaggerMiddleware)().then(function (swagger) {
  app.use('/api-docs/', swagger.serve, swagger.setup);
  app.use(function (req, res, next) {
    var error = new Error("not found");
    error.status = 404;
    next(error);
  });
  app.use(function (error, req, res, next) {
    console.log("error status : ", error.status);
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
  });
});
app.use(function (err, req, res, next) {
  console.log('/////////////////////======*****', err, '*****=========\\\\\\\\\\\\ ');
  res.status(err.status || 400).send(err.message);
});
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
  return console.log("listen to ".concat(port));
}); // module.exports.mongoose = mongoose;

module.exports.server = server;