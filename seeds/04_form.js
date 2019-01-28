exports.seed = (knex, Promise) => {
  return knex.raw('DELETE FROM forms;')
      .then(() => {
        const forms = [{
          formhash: 'prenatalExample-9147d',
          patientuid: 'Example-9147d',
          formname: 'prenatal',
          data: {}
        }];

        return knex('forms').insert(forms);
      });
};


