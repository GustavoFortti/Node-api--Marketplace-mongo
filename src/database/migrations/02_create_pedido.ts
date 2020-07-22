import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('pedido', table => {
        table.increments('codPedido').primary();
        table.string('total').notNullable();
        table.date('dataEmissoa').notNullable();
        table.string('situacao').notNullable();
        table.string('pagamento').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('pedido');
}