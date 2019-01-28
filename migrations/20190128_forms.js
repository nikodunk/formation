
exports.up = function(knex, Promise) {
  return knex.schema.createTable('forms', table => {
    table.increments();
    table.text('formhash').notNullable();
    table.text('patientuid').notNullable();
    table.text('formname').notNullable();
    table.jsonb('data');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('forms');
};






// CREATE TABLE forms (
// 	 NEW INCREMENTER
//   formhash text PRIMARY KEY,
//   patientuid text NOT NULL,
//   formname text NOT NULL,
//   data jsonb
// );