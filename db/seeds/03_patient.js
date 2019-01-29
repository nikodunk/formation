exports.seed = (knex, Promise) => {
  return knex.raw('DELETE FROM patients;')
      .then(() => {
        const patients = [
        {
          patientuid: 'Example-9147d', 
          name: 'Georgia Examplo', 
          dob: '09/18/1972',
          healthplan: 'Paperwork Health Plan',
          provider: 'Paperwork Health',
          organisation: 'DXis21cAGSbWIOhbG2yyYXgV3c93'
        },
        {
          patientuid: 'Example-2353c', 
          name: 'George Example', 
          dob: '10/14/1983',
          healthplan: 'Kaiser HMO/HPO',
          provider: 'Kaiser Permanente',
          organisation: 'DXis21cAGSbWIOhbG2yyYXgV3c93'
        },
        {
          patientuid: '12343231', 
          name: 'Niko Dunk', 
          dob: '11/15/1987',
          healthplan: 'HMO/HPO',
          provider: 'Permanente',
          organisation: 'DXis21cAGSbWIOhbG2yyYXgV3c93'
        }
        ];

        return knex('patients').insert(patients);
      });
};

