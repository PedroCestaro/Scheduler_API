import Knex from 'knex'

export async function up(knex: Knex){

   return knex.schema.createTable('task', table=>{
        table.increments('id_task').primary().unique();
        table.string('name').notNullable();
        table.date('date').notNullable();
        table.text('tasks').notNullable();
        
        table.integer('id_user')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('user')
            .onDelete('cascade')
            .onUpdate('cascade');
    })

}

export async function down(knex: Knex){
   return knex.schema.dropTable('task')
}