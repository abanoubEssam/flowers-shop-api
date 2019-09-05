
// const swaggerUI = require('swagger-ui-express');
// import { customSwaggerSpec } from './services/swaggerDocs.service';
import path from 'path';
import passport from 'passport';
// const mongoose = require('mongoose');
// const autoIncrement = require('mongoose-auto-increment');
import {connectDB } from './utils/connection';
// import config from 'config'
import { getSwaggerMiddleware } from './middlewares/swagger.middleware';

const shops = require('./routes/shop.routes');
const User = require('./routes/user.routes');
const auth = require('./routes/auth.routes');

const globalFlowers = require('./routes/allFlowers.routes');

const pushNotification = require('./routes/user-push-token.routes');
const Notification = require('./routes/notification.routes');
const express = require('express');
const app = express();

connectDB();
// const db = config.get('db');

// autoIncrement.initialize(mongoose.connection);

// mongoose.connect(db, {
//   useNewUrlParser: true
// })
//   .then(() => console.log(`Connected to ${db}...`))
//   .catch(err => console.error(`Could not connect to ${db}...`));

// mongoose.Promise = global.Promise;

require('./services/prod')(app)
app.use(express.json());
app.use(passport.initialize());

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use('/api/shops', shops);
app.use('/api/flowers', globalFlowers);
app.use('/api/users', User);
app.use('/api/notification', Notification);
app.use('/api/push-notifications', pushNotification);
app.use('/api/auth', auth);
app.use((req, res, next) => {
  console.log('Method', req.method);
  console.log('ROUTE: ', req.route);
  next();
});



getSwaggerMiddleware().then(swagger => {
  app.use('/api-docs/', swagger.serve, swagger.setup);
  app.use((req, res, next) => {
    const error = new Error("not found");
    error.status = 404;
    next(error)
  })

  app.use((error, req, res, next) => {
    console.log("error status : ", error.status);
    res.status(error.status || 500)
    res.json({
      error: {
        message: error.message
      }
    })
  })
})




app.use((err, req, res, next) => {
  console.log('/////////////////////======*****', err, '*****=========\\\\\\\\\\\\ ');
  res.status(err.status || 400).send(err.message);
});


const port = process.env.PORT || 3000;

const server = app.listen(port, () => console.log(`listen to ${port}`));
// module.exports.mongoose = mongoose;
module.exports.server = server;
