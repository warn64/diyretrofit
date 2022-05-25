
exports.up = function(knex) {
  return knex.schema
    .table('products', async function (table) {
      table.string('productpic1');
      table.string('undefined');
      table.string('productpic3');
      table.string('productpic4');
      table.string('productpic5');
      table.string('productpic6');
      table.boolean('salestatus').defaultTo(0);
      table.string('productdetail');
      table.integer('productprice');
      table.integer('productcost');
      table.integer('productweight');
      table.integer('transportationcost');
      table.integer('warehouse');
      table.string('productnote');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('products', async function (table) {
      table.dropColumn('productpic1');
      table.dropColumn('undefined');
      table.dropColumn('productpic3');
      table.dropColumn('productpic4');
      table.dropColumn('productpic5');
      table.dropColumn('productpic6');
      table.dropColumn('salestatus');
      table.dropColumn('productdetail');
      table.dropColumn('productprice');
      table.dropColumn('productcost');
      table.dropColumn('productweight');
      table.dropColumn('transportationcost');
      table.dropColumn('warehouse');
      table.dropColumn('productnote');
    })
};
