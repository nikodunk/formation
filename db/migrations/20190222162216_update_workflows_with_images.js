
exports.up = function(knex, Promise) {
  return knex.schema.table('workflows', function (table) {
  	table.specificType('images', 'text ARRAY');
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropColumn('images');
};
