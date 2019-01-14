const express = require('express');
const app = express();
const path = require('path');
const sslRedirect = require('heroku-ssl-redirect');
const apiRoutes = require('./api/index');
const fhirRoutes = require('./api/fhir');

app.use(sslRedirect());
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // aka bodyparser!!


app.use(express.static('public')); // static html landingpage, login page, favicons, etc
app.use(express.static('client/build')); // static react JS client app files
app.use('/api/', apiRoutes); // api routes
app.use('/fhir/', fhirRoutes); // fhir routes




// GET React's index.html entrance file
app.get('/app', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});



// GET login.html static page.
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/login.html'));
});


// GET index.html static landing page. The "catchall" handler: for any request that doesn't
// match one above, send back static landing page.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});






const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log('Listening on port 8080!'));