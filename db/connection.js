const environment = process.env.NODE_ENV === 'development' ? 'development' : 'production';

const config = require('../knexfile')[environment];

module.exports = require('knex')(config);