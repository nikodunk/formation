exports.seed = (knex, Promise) => {
  return knex.raw('DELETE FROM patients;')
      .then(() => {
        const patients = [
        {
          patientuid: 'foo', 
          patientmedicalrecordno: '16707284',
          name: 'Georgia Examplo', 
          dob: '09/18/1972',
          healthplan: 'Paperwork Health Plan',
          provider: 'Paperwork Health',
          usergroup: 'DXis21cAGSbWIOhbG2yyYXgV3c93'
        },
        {
          patientuid: 'bar', 
          patientmedicalrecordno: '16707284',
          name: 'Georgia Examplo', 
          dob: '09/18/1972',
          healthplan: 'Paperwork Health Plan',
          provider: 'Paperwork Health',
          usergroup: 'Bux3BnyLoDecUKr4fzmupiV3xfq2'
        },
        {
          patientuid: 'baz', 
          patientmedicalrecordno: '16707284',
          name: 'Georgia Examplo', 
          dob: '09/18/1972',
          healthplan: 'Paperwork Health Plan',
          provider: 'Paperwork Health',
          usergroup: 'GGpqsjCo7LP05KzEJY5BKCOTrxu1'
        }
        ];

        return knex('patients').insert(patients);
      });
};

