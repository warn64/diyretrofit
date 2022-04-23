
exports.up = function(knex) {
  return knex.schema
    .createTable('expense_group', function (table) {
      table.increments('expense_groupID');
      table.integer('expenseID').unsigned();
      table.foreign('expenseID').references('expenseid').inTable('expense').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('expense_group_name');
    })
    .table('expense', function (table) {
      table.renameColumn('expenseid', 'expenseID');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('expense', function (table) {
      table.renameColumn('expenseID', 'expenseid');
    })
    .dropTable('expense_group')
};
