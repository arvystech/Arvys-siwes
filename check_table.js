require('dotenv').config({ path: './.env' });
const { pool } = require('./src/backend/config/db');

async function checkTable() {
    try {
        const [rows] = await pool.query('DESCRIBE logbook_entries');
        console.log(JSON.stringify(rows, null, 2));
        process.exit(0);
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

checkTable();
