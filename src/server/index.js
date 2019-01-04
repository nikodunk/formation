const express = require('express');
const os = require('os');
const PORT = process.env.PORT || 8080
const app = express();
const HummusRecipe = require('hummus-recipe');

const sslRedirect = require('heroku-ssl-redirect');

const prenatal = require('./forms/prenatal');
const postpartum = require('./forms/postpartum');

const routes = require('./api');


app.use(sslRedirect());


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('dist'));


app.use('/forms/prenatal', prenatal);
app.use('/forms/postpartum', postpartum);

app.use('/api/', routes);

app.listen(PORT, () => console.log('Listening on port 8080!'))