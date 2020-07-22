import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('produto', table => {
        table.increments('codProduto').primary();
        table.string('descricao').notNullable();
        table.string('codFornecedor').references('codFornecedor').inTable('fornecedor');
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('produto');
}