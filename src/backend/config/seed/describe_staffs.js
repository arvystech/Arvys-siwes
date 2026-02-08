const mysql = require('mysql2/promise');
require('dotenv').config();

const run = async () => {
    let connection;
    try {
        connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });

        const [rows] = await connection.query('DESCRIBE staffs');
        console.log(rows);

    } catch (error) {
        console.error('Error describing staffs table:', error);
    } finally {
        if (connection) await connection.end();
    }
};

run();
