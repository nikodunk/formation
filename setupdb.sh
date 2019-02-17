createdb paperworklabs
knex migrate:latest
knex seed:run

# heroku restart -a paperworklabs
# heroku pg:reset DATABASE -a paperworklabs
# heroku run knex migrate:latest -a paperworklabs && heroku run knex seed:run -a paperworklabs