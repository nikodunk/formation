const express = require('express');
const os = require('os');
const PORT = process.env.PORT || 8080
const app = express();
const HummusRecipe = require('hummus-recipe');

const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS


const prenatal = require('./pages/prenatal');
const postpartum = require('./pages/postpartum');


app.use(redirectToHTTPS([/localhost:(\d{4})/], 301));


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('dist'));


app.use('/api/prenatal', prenatal);
app.use('/api/postpartum', postpartum);


app.listen(PORT, () => console.log('Listening on port 8080!'))