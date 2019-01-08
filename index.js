const express = require('express');
const app = express();
const path = require('path');
const sslRedirect = require('heroku-ssl-redirect');
const apiRoutes = require('./api/index');


app.use(sslRedirect());
app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
app.use('/api/', apiRoutes); // api routes
app.use(express.static('static')); // serve static html landingpage, login page, favicons, etc
app.use(express.static('client/build')); // Serve static files JS React client





// Send back React's index.html file.
app.get('/app', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});



// match one above, send back static login page.
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/login.html'));
});


// The "catchall" handler: for any request that doesn't
// match one above, send back static landing page.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/index.html'));
});






const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log('Listening on port 8080!'));