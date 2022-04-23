
exports.up = function(knex) {
  return knex.schema
    .table('expense', function (table) {
      table.datetime('created').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('expense', function (table) {
      table.dropColumn('created');
    })
};
