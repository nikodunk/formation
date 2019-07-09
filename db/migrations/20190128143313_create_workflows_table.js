
exports.up = function(knex, Promise) {
  return knex.schema.createTable('workflows', table => {
    table.increments();
    table.text('workflowuid').notNullable();
    table.text('title');
    table.jsonb('graph');
    table.text('text');
    table.text('usergroup').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('workflows');
};