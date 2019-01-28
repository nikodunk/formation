
exports.up = function(knex, Promise) {
  return knex.schema.createTable('patients', table => {
    table.increments();
    table.text('patientuid').notNullable();
    table.text('name').notNullable();
    table.text('dob').notNullable();
    table.text('healthplan');
    table.text('provider');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('patients');
};