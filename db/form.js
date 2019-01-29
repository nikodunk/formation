const knex = require('./connection');

module.exports = {

  createFormsForNewPatient: function(patientuid){
    return knex('forms')
            .insert({
                      'patientuid': patientuid, 'formname': 'prenatal', 'data': {}
                    }, {
                      'patientuid': patientuid, 'formname': 'postpartum', 'data': {}
                    }
                    )
            .returning('patientuid')
  },
  
  getByPatient: function(patient, formname){
    return knex('forms')
    			.where('patientuid', patient)
    			.andWhere('formname', formname);
  },
  getAll: function(){
    return knex('forms');
  },  

  getReportFormCount: function(formName){
    return knex('forms')
          .count('*')
          .where('formname', formName)
  },

  updateByPatient: function(patient, formname, data){
    return knex('forms')
          .where( 'patientuid', patient )
          .andWhere('formname', formname)
          .update( 'data', data)
  }
}
