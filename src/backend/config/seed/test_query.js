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

        // 1. Check staffs table columns again via query
        const [staffCols] = await connection.query("SHOW COLUMNS FROM staffs");
        console.log('Staff columns:', staffCols.map(c => c.Field));

        // 2. Simple join
        const query2 = "SELECT * FROM classes cl JOIN staffs s ON cl.instructor_id = s.id LIMIT 1";
        console.log('Running simple join:', query2);
        await connection.query(query2);
        console.log('Simple join success');

        // 3. Full query
        const query3 = "SELECT * FROM classes cl INNER JOIN courses co ON cl.course_id = co.id INNER JOIN staffs s ON cl.instructor_id = s.id LIMIT 1";
        console.log('Running full query:', query3);
        await connection.query(query3);
        console.log('Full query success');

    } catch (error) {
        console.error('Query failed:', error.message);
        console.error('Code:', error.code);
    } finally {
        if (connection) await connection.end();
    }
};

run();
