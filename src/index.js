const path = require('path');

const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));




// Send back React's index.html file.
app.get('/app', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


// match one above, send back static login page.
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/login.html'));
});


// The "catchall" handler: for any request that doesn't
// match one above, send back static landing page.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});




const port = process.env.PORT || 3000;
app.listen(port);

console.log(`Password generator listening on ${port}`);
