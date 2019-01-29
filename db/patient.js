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

  update: function(patientuid, patientdata){
    return knex('patients')
    		.update({
                  patientuid: patientdata.patientuid,
                  name: patientdata.name,
                  dob: patientdata.dob,
                  healthplan: patientdata.healthplan,
                  provider: patientdata.provider
                })
        .where('patientuid', patientdata.patientuid)
  }
  
}
