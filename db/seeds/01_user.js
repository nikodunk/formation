exports.seed = (knex, Promise) => {
    return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 3')
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
          }
        ]
        return knex('user').insert(users)
      })
};
