const mysql = require('mysql2/promise');
require('dotenv').config(); // Load from root
const fs = require('fs');
const path = require('path');

const run = async () => {
    let connection;
    try {
        console.log('Connecting to database...');
        connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            multipleStatements: true
        });
        console.log('Connected.');

        const sqlFilePath = 'C:\\Users\\emman\\Downloads\\attendance (2).sql';
        console.log(`Reading SQL file from: ${sqlFilePath}`);
        const sqlContent = fs.readFileSync(sqlFilePath, 'utf8');

        console.log('Executing SQL...');
        await connection.query(sqlContent);
        console.log('SQL executed successfully.');

    } catch (error) {
        console.error('Error executing SQL:', error);
    } finally {
        if (connection) await connection.end();
    }
};

run();
