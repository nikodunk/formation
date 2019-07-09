# createdb paperworklabs
# knex migrate:latest
# knex seed:run

heroku restart -a paperworklabs-demo
heroku pg:reset DATABASE -a paperworklabs-demo
heroku run knex migrate:latest -a paperworklabs-demo && heroku run knex seed:run -a paperworklabs-demo