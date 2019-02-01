const express = require('express');
const app = express();
const sslRedirect = require('heroku-ssl-redirect');

const index = require('./routes');
const reactApp = require('./routes/app');
const api = require('./routes/api');

// migrate database
// const knex = require('./db/connection');
// const config = require('./knexfile')['production'];
// knex.migrate.latest([config])
//   .then((bar) => {
//   	console.log(bar)
//     return knex.seed.run();
//   })
//   .then((foo) => {
//   	console.log(foo)
//     console.log('migrations are finished')
//   });

// console.log('node process environment: ', process.env.NODE_ENV)

app.use(sslRedirect());
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // aka bodyparser

// serve static directories
app.use(express.static('public')); // static html landingpage, favicons, etc
app.use(express.static('client/build')); // static react JS client app files


app.use('/api', api); // api routes
app.use('/app', reactApp); // app routes
app.use('*', index) // 


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
  	message: err.message,
  	error: req.app.get('env') === 'development' ? err : {}
  })

});

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));