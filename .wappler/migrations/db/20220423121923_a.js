
exports.up = function(knex) {
  return knex.schema
    .table('expense_group', function (table) {
      table.string('note');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('expense_group', function (table) {
      table.dropColumn('note');
    })
};
