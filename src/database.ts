import { createPool } from 'mysql2/promise'

export async function connect(){
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        database: 'node_sql_ts',
        password: 'toor',
        connectionLimit: 10
    });
    return connection;
}
