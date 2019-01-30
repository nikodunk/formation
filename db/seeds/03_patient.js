exports.seed = (knex, Promise) => {
  return knex.raw('DELETE FROM patients;')
      .then(() => {
        const patients = [
        {
          patientuid: 'Example1', 
          patientmedicalrecordno: '16707284',
          name: 'Georgia Examplo', 
          dob: '09/18/1972',
          healthplan: 'Paperwork Health Plan',
          provider: 'Paperwork Health',
          usergroup: 'DXis21cAGSbWIOhbG2yyYXgV3c93'
        }
        ];

        return knex('patients').insert(patients);
      });
};

