const knex = require('./connection');

module.exports = {

  
  createNew: function(){
    return knex('patients')
            .insert({
                  patientuid: Date.now().toString(),
                  name: 'First Last',
                  dob: Date.now(),
                  healthplan: null,
                  provider: null
                })
            .returning('patientuid')
  },

  getAll: function(){
    return knex('patients');
  },

  getAllByUser: function(id){
    return knex('patients')
        .where('user_id', id);
  },

  update: function(patientuid, name, dob, healthplan, provider){
    return knex('patients')
    		.update({
                  patientuid: patientuid,
                  name: name,
                  dob: dob,
                  healthplan: healthplan,
                  provider: provider
                });
  }

  
  
}
