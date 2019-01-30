exports.seed = (knex, Promise) => {
  return knex.raw('DELETE FROM forms;')
      .then(() => {
        const forms = [
          {
            patientuid: 'foo',
            formname: 'prenatal',
            data: {}
          },
          {
            patientuid: 'foo',
            formname: 'postpartum',
            data: {}
          },
          {
            patientuid: 'bar',
            formname: 'prenatal',
            data: {}
          },
          {
            patientuid: 'bar',
            formname: 'postpartum',
            data: {}
          },
          {
            patientuid: 'baz',
            formname: 'prenatal',
            data: {}
          },
          {
            patientuid: 'baz',
            formname: 'postpartum',
            data: {}
          }
        ];

        return knex('forms').insert(forms);
      });
};


