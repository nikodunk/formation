require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/paperworklabs',
    ssl: true,
    seeds: {
      directory: './db/seeds/'
    },
    migrations: {
    directory: './db/migrations/'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    ssl: true,
    seeds: {
      directory: './db/seeds/'
    },
    migrations: {
    directory: './db/migrations/'
    }
  }

};

