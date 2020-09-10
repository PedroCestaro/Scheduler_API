import path from 'path';

module.exports = {
    client:'mysql',
    connection:{
        filename: path.resolve(__dirname,'src','database','database.mysql'),
        database: "Scheduler",
        user: "PedroH",
        password: "Iron@870"

    },
    migrations:{
        directory: path.resolve(__dirname,'src','database','migrations'),
        database: "Scheduler",
        user: "PedroH",
        password: "Iron@870"
    },
    useNullAsDefault: true,
};