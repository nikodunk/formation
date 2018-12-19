const express = require('express');
const os = require('os');
const PORT = process.env.PORT || 8080
const app = express();
const HummusRecipe = require('hummus-recipe');



const prenatal = require('./pages/prenatal');
const postpartum = require('./pages/postpartum');





app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('dist'));


app.use(function(req, res, next) {
  if(!req.secure) {
    var secureUrl = "https://" + req.headers['host'] + req.url; 
    res.writeHead(301, { "Location":  secureUrl });
    res.end();
  }
  next();
});



app.use('/api/prenatal', prenatal);
app.use('/api/postpartum', postpartum);


app.listen(PORT, () => console.log('Listening on port 8080!'))