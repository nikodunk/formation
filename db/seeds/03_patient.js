exports.seed = (knex, Promise) => {
  return knex.raw('DELETE FROM patients;')
      .then(() => {
        const patients = [
        {
          patientuid: 'foo', 
          patientmedicalrecordno: 'How to do X',
          name: null, 
          dob: '09/18/1972',
        },
        {
          patientuid: 'bar', 
          patientmedicalrecordno: 'How to do Y',
          name: null, 
          dob: '09/18/1972',
          
        },
        {
          patientuid: 'baz', 
          patientmedicalrecordno: 'How to do Z',
          name: null, 
          dob: '09/18/1972',
          usergroup: '1'
        }
        ];

        return knex('patients').insert(patients);
      });
};

