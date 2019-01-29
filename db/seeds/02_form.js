exports.seed = (knex, Promise) => {
  return knex.raw('DELETE FROM forms;')
      .then(() => {
        const forms = [
          {
            patientuid: 'Example-9147d',
            formname: 'prenatal',
            data: {}
          },
          {
            patientuid: 'Example-9147d',
            formname: 'postpartum',
            data: {}
          },
          {
            patientuid: 'Example-2353c',
            formname: 'postpartum',
            data: {}
          },
          {
            patientuid: 'Example-2353c',
            formname: 'postpartum',
            data: {}
          },
          {
            patientuid: '12343231',
            formname: 'postpartum',
            data: {}
          },
          {
            patientuid: '12343231',
            formname: 'postpartum',
            data: {}
          }
        ];

        return knex('forms').insert(forms);
      });
};


