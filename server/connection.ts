// https://github.com/sidorares/node-mysql2#using-prepared-statements

import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from './constants';

// https://www.serverless.com/plugins/serverless-mysql	
const mysql = require('serverless-mysql')({
    config: {
        host: DB_HOST,
        database: DB_NAME,
        user: DB_USER,
        password: DB_PASSWORD,
        port: 4000,
        ssl: {
            minVersion: 'TLSv1.2',
            rejectUnauthorized: true
        }
    }
})

export const query = async (sql: string, params: Array<any>): Promise<any> => {
    const rows = await mysql.query(sql, params);
    await mysql.end();
    return rows;
}

export const quitConnection = async () => {
    await mysql.quit();
}

