require("dotenv").config();
const { pool } = require('./src/backend/config/db');

async function debug() {
    try {
        // 1. Get student's batch
        const studentId = 'ba097423-9f4b-4c2f-a3ec-a81c67aaae15';
        const [students] = await pool.query('SELECT name, batch FROM students WHERE student_id = ?', [studentId]);
        console.log('Student Info:', students[0]);

        if (!students[0]) {
            console.log('Student not found');
            process.exit(1);
        }

        const batchId = students[0].batch;
        const today = new Date().toISOString().split('T')[0];
        console.log('Looking for classes with Batch ID:', batchId, 'and Date:', today);

        // 2. Check all classes for this batch
        const [allClasses] = await pool.query('SELECT * FROM classes WHERE batch_id = ?', [batchId]);
        console.log(`Found ${allClasses.length} classes for this batch:`);
        allClasses.forEach(cl => {
            // Format date for comparison
            const clDate = new Date(cl.date).toISOString().split('T')[0];
            console.log(`- ID: ${cl.class_id}, Date: ${clDate}, Title: ${cl.title}`);
        });

        // 3. Check if any class matches EXACTLY
        const [matchingClass] = await pool.query('SELECT * FROM classes WHERE batch_id = ? AND date = ?', [batchId, today]);
        console.log('Exact Match Result:', matchingClass.length > 0 ? 'Found!' : 'NOT FOUND');

    } catch (err) {
        console.error('Debug Error:', err);
    }
    process.exit(0);
}

debug();
