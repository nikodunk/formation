cp .env.sample .env
createdb paperworklabs
knex migrate:latest
knex seed:run



# heroku restart -a paperworkdev
# heroku pg:reset DATABASE -a paperworkdev
# heroku run knex migrate:latest -a paperworkdev
# heroku run knex seed:run -a paperworkdev