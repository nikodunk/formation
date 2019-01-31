const knex = require('./connection');

module.exports = {
  getOne: function (id) {
    return knex('usergroups').where('id', id).first();
  },
  getOneByEmail: function(email){
  		return knex('usergroups').where('email', email).first();
  },
  create: function(user){
  	return knex('usergroups').insert(user, 'id').then(ids => {
  		return ids[0];
  	})
  }
}
