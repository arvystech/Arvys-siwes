const mysql = require('mysql2/promise');
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');

const run = async () => {
    let connection;
    try {
        connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });

        const classId = uuidv4();
        console.log(`Generated Class ID: ${classId}`);

        const today = new Date();
        const dateStr = today.toISOString().split('T')[0]; // YYYY-MM-DD

        // Calculate start and end times to encompass "now"
        // Let's make it start 30 mins ago and end 30 mins from now
        const startTime = new Date(today.getTime() - 30 * 60000);
        const endTime = new Date(today.getTime() + 90 * 60000); // 1.5 hours duration

        const formatTime = (date) => {
            return date.toTimeString().split(' ')[0]; // HH:MM:SS
        };

        const startTimeStr = formatTime(startTime);
        const endTimeStr = formatTime(endTime);

        console.log(`Inserting class for Date: ${dateStr}, Start: ${startTimeStr}, End: ${endTimeStr}`);

        const query = `
            INSERT INTO classes (
                class_id,
                batch_id, 
                instructor_id, 
                course_id, 
                date, 
                start_time, 
                end_time, 
                week_number, 
                day_number, 
                title, 
                subtopics, 
                description
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const values = [
            classId,
            '3b01c461-c662-11f0-8ff1-f8e4e3fe8908', // Batch ID
            4, // Instructor ID (Effa Ojah)
            1, // Course ID (Web Dev)
            dateStr,
            startTimeStr,
            endTimeStr,
            1, // week_number
            1, // day_number
            'Test Class for Attendance',
            JSON.stringify(['Testing', 'Attendance', 'System']),
            'This is a test class generated to verify the attendance system.'
        ];

        const [result] = await connection.query(query, values);
        console.log('Class inserted successfully!');
        console.log('Insert ID:', result.insertId); // Though UUID might not return insertId same way, let's see.

        // Since ID is auto-generated UUID type (char(36)), we might not get it in insertId if it's not AUTO_INCREMENT int. 
        // But likely it is handled by trigger or default. 
        // If it's UUID, we can query it back if needed, but not strictly necessary for this test.

    } catch (error) {
        console.error('Error inserting class:', error);
    } finally {
        if (connection) await connection.end();
    }
};

run();
