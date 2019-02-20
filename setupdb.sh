createdb paperworklabs
knex migrate:latest
knex seed:run

# heroku restart -a paperworklabs
# heroku pg:reset DATABASE -a paperworklabs
# heroku run knex migrate:latest -a paperworklabs && heroku run knex seed:run -a paperworklabs

# heroku pg:backups:restore --app paperworklabs
# heroku pg:backups:schedule DATABASE_URL --at '02:00 America/Los_Angeles' --app paperworklabs