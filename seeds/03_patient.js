exports.seed = (knex, Promise) => {
  return knex.raw('DELETE FROM patients; ALTER SEQUENCE sticker_id_seq RESTART WITH 1')
      .then(() => {
        const patients = [{
          patientuid: 'Example-9147d', 
          name: 'Georgia Examplo', 
          dob: '09/18/1972',
          healthplan: 'Paperwork Health Plan',
          provider: 'Paperwork Health',
          user_id: 1
        }];

        return knex('patients').insert(patients);
      });
};


