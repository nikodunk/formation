exports.seed = (knex, Promise) => {
  return knex.raw('DELETE FROM patients;')
      .then(() => {
        const patients = [{
          patientuid: 'Example-9147d', 
          name: 'Georgia Examplo', 
          dob: '09/18/1972',
          healthplan: 'Paperwork Health Plan',
          provider: 'Paperwork Health'
        }];

        return knex('patients').insert(patients);
      });
};


