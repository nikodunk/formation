const knex = require('./connection');

module.exports = {

  getByUser: function(id){
    return knex('patients').where('user_id', id);
  }
  
}
