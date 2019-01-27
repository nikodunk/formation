cp .env.sample .env
createdb paperworklabs
npm install
knex migrate:latest
knex seed:run
