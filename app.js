const express = require('express');
const app = express();
const sslRedirect = require('heroku-ssl-redirect');

const index = require('./routes');
const reactApp = require('./routes/app');
const api = require('./routes/api');


app.use(sslRedirect());
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // aka bodyparser

app.use(express.static('public')); // static html landingpage, favicons, etc
app.use(express.static('client/build')); // static react JS client app files



app.use('/api', api); // api routes
app.use('/app', reactApp); // app routes
app.use('*', index) // 


const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log('Listening on port 8080!'));