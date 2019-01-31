require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    // connection: 'postgres://localhost/paperworklabs',
    connection: {
        host : process.env.RDS_HOSTNAME, // 'aa7p5vez5ps6q9.c10mrpronxld.us-west-2.rds.amazonaws.com'
        user : process.env.RDS_USERNAME, // 'bahamut3'
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
    // connection: process.env.DATABASE_URL,
    connection: {
        host : process.env.RDS_HOSTNAME, // 'aa7p5vez5ps6q9.c10mrpronxld.us-west-2.rds.amazonaws.com'
        user : process.env.RDS_USERNAME, // 'bahamut3'
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