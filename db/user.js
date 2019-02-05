const knex = require('./connection');

module.exports = {
  getGroupByUID: function(uid){
  		return knex('users')
  		        .where('uid', uid);
  }
}
