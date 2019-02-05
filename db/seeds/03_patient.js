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
          usergroup: '1'
        },
        {
          patientuid: 'bar', 
          patientmedicalrecordno: '16707284',
          name: 'Georgia Examplo', 
          dob: '09/18/1972',
          healthplan: 'Paperwork Health Plan',
          provider: 'Paperwork Health',
          usergroup: '1'
        },
        {
          patientuid: 'baz', 
          patientmedicalrecordno: '16707284',
          name: 'Georgia Examplo', 
          dob: '09/18/1972',
          healthplan: 'Paperwork Health Plan',
          provider: 'Paperwork Health',
          usergroup: '2'
        }
        ];

        return knex('patients').insert(patients);
      });
};

