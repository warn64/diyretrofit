
exports.up = function(knex) {
  return knex.schema
    .createTable('products', async function (table) {
      table.increments('productID');
      table.text('productcode');
      table.string('productnameTH');
      table.string('productnameEN');
      table.integer('productgroup');
      table.integer('brand');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('products')
};
