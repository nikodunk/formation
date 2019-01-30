exports.seed = (knex, Promise) => {
  return knex.raw('DELETE FROM forms;')
      .then(() => {
        const forms = [
          {
            patientuid: 'Example1',
            formname: 'prenatal',
            data: {}
          },
          {
            patientuid: 'Example1',
            formname: 'postpartum',
            data: {}
          }
        ];

        return knex('forms').insert(forms);
      });
};


