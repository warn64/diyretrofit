
exports.up = function(knex) {
  return knex.schema
    .table('expense_group', function (table) {
      table.integer('expenseID').unsigned();
      table.foreign('expenseID').references('expenseID').inTable('expense').onUpdate('CASCADE').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('expense_group', function (table) {
      table.dropForeign('expenseID');
      table.dropColumn('expenseID');
    })
};
