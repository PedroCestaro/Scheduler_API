import Knex from 'knex'

/*Criando a primeira tabela, ela é referência para as tasks*/
export async function up(knex: Knex){

    return knex.schema.createTable('user', table=>{
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string("email").notNullable();
    })
    
}


export async function down(knex: Knex){
    return knex.schema.dropTable('user');
}