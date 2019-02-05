exports.seed = (knex, Promise) => {
    return knex.raw('DELETE FROM "users";')
      .then(() => {
        const users = [
          {
            id: 1,
            uid: 'DXis21cAGSbWIOhbG2yyYXgV3c93',
            email: 'n.dunkel@gmail.com',
            usergroup: '1'
          },
          {
            id: 2,
            uid: 'Bux3BnyLoDecUKr4fzmupiV3xfq2',
            email: 'mitul.karia@gmail.com',
            usergroup: '2'
          },
          {
            id: 3,
            uid: 'GGpqsjCo7LP05KzEJY5BKCOTrxu1',
            email: 'george.jetson@gmail.com',
            usergroup: '2'
          },
          {
            id: 4,
            uid: 'tJvKN3Bj14b0LWf2dXr1GAJE5RM2',
            email: 'gianni.dunk@gmail.com',
            usergroup: '1'
          }
        ]
        return knex('users').insert(users)
      })
};
