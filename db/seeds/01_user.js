exports.seed = (knex, Promise) => {
    return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 3')
      .then(() => {
        const users = [
          {
            id: 1,
            uid: 'berto.ort@gmail.com',
            usergroup: 'DXis21cAGSbWIOhbG2yyYXgV3c93'
          },
          {
            id: 2,
            uid: 'hello@cjr.co.de',
            usergroup: 'DXis21cAGSbWIOhbG2yyYXgV3c93'
          }
        ]
        return knex('user').insert(users)
      })
};
