import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('item_pedido', table => {
        table.string('codPedido').references('pedido').inTable('codPedido');
        table.string('codProduto').references('produto').inTable('codProduto');
        table.string('qunatidade').notNullable();
        table.string('preco').notNullable();
        table.string('codFornecedor').references('codFornecedor').inTable('fornecedor');
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('item_pedido');
}