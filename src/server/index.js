const express = require('express');
const os = require('os');
const PORT = process.env.PORT || 8080
const app = express();
const HummusRecipe = require('hummus-recipe');


const prenatal = require('./pages/prenatal');
const perinatal = require('./pages/perinatal');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('dist'));



app.use('/api/prenatal', prenatal);
app.use('/api/perinatal', perinatal);



app.listen(PORT, () => console.log('Listening on port 8080!'))