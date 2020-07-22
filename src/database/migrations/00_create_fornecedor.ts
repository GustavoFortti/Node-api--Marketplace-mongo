import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('fornecedor', table => {
        table.increments('codFornecedor').primary();
        table.string('nomeFantasia').notNullable();
        table.string('cnpj').notNullable();
        table.string('ie').notNullable();
        table.string('nomeContato').notNullable();
        table.string('telefone').notNullable();
        table.string('celular').notNullable();
        table.string('email').notNullable();
        table.string('observacao').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('forcedor');
}