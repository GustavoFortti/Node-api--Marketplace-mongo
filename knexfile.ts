import path from 'path';

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },    
    useNullAsDefault: true
};  
//executar comendo na pasta ServerCompras
//npx knex migrate:latest --knexfile knexfile.ts migrate:latest
