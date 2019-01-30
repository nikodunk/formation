const knex = require('./connection');

module.exports = {

  
  createNew: function(usergroup){
    return knex('patients')
            .insert({
                  patientuid: Date.now().toString(),
                  patientmedicalrecordno: Date.now().toString(),
                  name: 'First Last',
                  dob: Date.now(),
                  healthplan: null,
                  provider: null,
                  usergroup: usergroup
                })
            .returning('patientuid')
  },

  getAll: function(){
    return knex('patients');
  },

  getAllByUsergroup: function(usergroup){
    return knex('patients')
        .where('usergroup', usergroup);
  },

  update: function(patientuid, patientdata){
    return knex('patients')
    		.update({
                  patientuid: patientdata.patientuid,
                  patientmedicalrecordno: patientdata.patientmedicalrecordno,
                  name: patientdata.name,
                  dob: patientdata.dob,
                  healthplan: patientdata.healthplan,
                  provider: patientdata.provider
                })
        .where('patientuid', patientdata.patientuid)
  }
  
}
