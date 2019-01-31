const environment = process.env.NODE_ENV === undefined ? 'development' : 'production';

const config = require('../knexfile')[environment];

module.exports = require('knex')(config);