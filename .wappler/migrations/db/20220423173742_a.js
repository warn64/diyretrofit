
exports.up = function(knex) {
  return knex.schema
    .table('expense', function (table) {
      table.integer('expense_group');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('expense', function (table) {
      table.dropColumn('expense_group');
    })
};
