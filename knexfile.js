require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
            host : 'aa7p5vez5ps6q9.c10mrpronxld.us-west-2.rds.amazonaws.com',
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
  },
  production: {
    client: 'pg',
    connection: {
        host : 'aa7p5vez5ps6q9.c10mrpronxld.us-west-2.rds.amazonaws.com',
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