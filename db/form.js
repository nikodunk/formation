const knex = require('./connection');

module.exports = {

  getByPatient: function(id, formname){
    return knex('forms').where('patientuid', id).andWhere('formname', formname);
  }
  
}
