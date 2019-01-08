const path = require('path');

const express = require('express');
const app = express();

const sslRedirect = require('heroku-ssl-redirect');

const prenatal = require('./server/forms/prenatal');
const postpartum = require('./server/forms/postpartum');
const routes = require('./server/api');



app.use(sslRedirect());



app.use(express.urlencoded({ extended: false }));

// app.use(express.json());


// serve landingpage, public page, favicons, etc
app.use(express.static('public'));

// Serve static files from the React app
app.use(express.static('client/build'));



app.use('/api/prenatal', prenatal);
app.use('/api/postpartum', postpartum);
app.use('/api/', routes);




// Send back React's index.html file.
app.get('/app', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/client/build/index.html'));
});


// match one above, send back static login page.
app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/public/login.html'));
});


// The "catchall" handler: for any request that doesn't
// match one above, send back static landing page.
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/client/public/index.html'));
});




const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log('Listening on port 8080!'));
