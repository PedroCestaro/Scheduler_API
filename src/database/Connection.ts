import knex from 'knex';
/*criando extensão para conexão com os arquivos, nível de avstração baixo*/
const database = knex({
    client: 'mysql',
    version:'8.0',
    connection:{
        host: 'localhost',
        user:'PedroH',
        password:"Iron@870",
        database:'Scheduler'
    }
});
try{
    database.transaction();
    console.log("Conexão com DB bem sucedida!");   
}catch(err){
    console.log("Erro de conexão:" + err);
}


/*criada a conexão com o banco de dados*/
export default database;