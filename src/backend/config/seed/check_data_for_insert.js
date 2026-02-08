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

        // 1. Describe classes table
        console.log('--- Classes Table Schema ---');
        const [classCols] = await connection.query("SHOW COLUMNS FROM classes");
        console.log(classCols.map(c => `${c.Field} (${c.Type})`));

        // 2. Get a valid course ID
        console.log('\n--- Valid Course ---');
        const [courses] = await connection.query("SELECT id, title FROM courses LIMIT 1");
        if (courses.length > 0) {
            console.log('Course:', courses[0]);
        } else {
            console.log('No courses found!');
        }

        // 3. Get a valid instructor (staff) ID
        console.log('\n--- Valid Instructor ---');
        const [staffs] = await connection.query("SELECT id, first_name, last_name FROM staffs LIMIT 1");
        if (staffs.length > 0) {
            console.log('Instructor:', staffs[0]);
        } else {
            console.log('No staff found!');
        }

        // 4. Get a valid batch ID (likely needed for classes)
        console.log('\n--- Valid Batch ---');
        const [batches] = await connection.query("SELECT batch_id, session FROM batches LIMIT 1"); // Assuming table is batches
        if (batches.length > 0) {
            console.log('Batch:', batches[0]);
        } else {
            // Try to find correct table if batches doesn't exist
            const [tables] = await connection.query("SHOW TABLES LIKE 'batch%'");
            console.log('Batch tables?', tables);
            if (tables.length === 0) console.log('No batch table found');
        }


    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        if (connection) await connection.end();
    }
};

run();
