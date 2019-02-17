exports.seed = (knex, Promise) => {
  return knex.raw('DELETE FROM workflows;')
      .then(() => {
        const workflows = [
        {
          workflowuid: 'foo', 
          title: 'Patient Registration',
          graph: null, 
          text: 'This is a process. Fill in more details here.',
          usergroup: '1'
        },
        {
          workflowuid: 'bar', 
          title: 'Appointment Check-In',
          graph: null, 
          text: 'This is another process. Fill in more details here.',
          usergroup: '1'
        },
        {
          workflowuid: 'baz', 
          title: 'Appointment Check-Out',
          graph: null, 
          text: 'This is a third process. Fill in more details below.',
          usergroup: '1'
        }
        ];

        return knex('workflows').insert(workflows);
      });
};

