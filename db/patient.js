const knex = require('./connection');

module.exports = {

  
  createNew: function(organisation){
    return knex('patients')
            .insert({
                  patientuid: Date.now().toString(),
                  name: 'First Last',
                  dob: Date.now(),
                  healthplan: null,
                  provider: null,
                  organisation: organisation
                })
            .returning('patientuid')
  },

  getAll: function(){
    return knex('patients');
  },

  getAllByOrganisation: function(organisation){
    return knex('patients')
        .where('organisation', organisation);
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
