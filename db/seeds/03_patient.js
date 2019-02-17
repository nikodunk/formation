exports.seed = (knex, Promise) => {
  return knex.raw('DELETE FROM patients;')
      .then(() => {
        const patients = [
        {
          patientuid: 'foo', 
          patientmedicalrecordno: 'Patient Check-In',
          name: null, 
          dob: 'This is a process. Fill in more details here.',
          usergroup: '1'
        },
        {
          patientuid: 'bar', 
          patientmedicalrecordno: 'Patient Check-Out',
          name: null, 
          dob: 'This is another process. Fill in more details here.',
          usergroup: '1'
        },
        {
          patientuid: 'baz', 
          patientmedicalrecordno: 'How to do Z',
          name: null, 
          dob: 'This is a third process. Fill in more details below.',
          usergroup: '1'
        }
        ];

        return knex('patients').insert(patients);
      });
};

