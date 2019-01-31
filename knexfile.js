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
    connection: {
        host : process.env.RDS_HOSTNAME,
        user : process.env.RDS_USERNAME,
        password : process.env.RDS_PASSWORD,
        database : process.env.RDS_DB_NAME,
        port: process.env.RDS_PORT
      },
    ssl: true,
    seeds: {
      directory: './db/seeds/'
    },
    migrations: {
    directory: './db/migrations/'
    }
  }

};