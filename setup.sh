cp .env.sample .env
createdb paperworklabs
npm install
knex migrate:latest
knex seed:run


# heroku run knex migrate:latest -a paperworkdev
# heroku run knex seed:run -a paperworkdev