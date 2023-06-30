// https://github.com/sidorares/node-mysql2#using-prepared-statements

import { createPool, Pool, PoolConnection } from 'mysql2/promise';
import { DB_HOST, DB_NAME, DB_USER } from './constants';


const pool: Pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    database: DB_NAME,
    port: 4000,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export const getConnection = async (): Promise<PoolConnection> => {
    return await pool.getConnection();
}

export const query = async (sql: string, params: Array<any>): Promise<any> => {
    const conn = await getConnection();
    const [rows, fields] = await conn.execute(sql, params);
    conn.release();
    return rows;
}
