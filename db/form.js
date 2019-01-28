const knex = require('./connection');

module.exports = {

  getByPatient: function(patient, formname){
    return knex('forms')
    			.where('patientuid', patient)
    			.andWhere('formname', formname);
  },
  getAll: function(){
    return knex('forms');
  },

  insertByPatient: function(patient, formname, data){
  	return knex('forms')
  				.where( 'patientuid', patient )
  				.andWhere('formname', formname)
  				.update( 'data', data)
  },

  // createByPatient: function(patient){
  //   return knex('forms')
  //         .where( 'patientuid', patient )
  //         .andWhere('formname', formname)
  //         .update( 'data', data)
  // },

  getReportFormCount: function(formName){
    return knex('forms')
          .count('*')
          .where('formname', formName)
  }
  
}
