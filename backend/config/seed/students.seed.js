// config/seed/students.seed.js
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');

// Require db connection
const { pool } = require('../db');

// Require seed data
const seedData = require('./default-students.json');

async function seed() {
  let connection;
  try {
    connection = await pool.getConnection();

    // Truncate table
    await connection.execute('TRUNCATE students');

    // Seed data
    for (const student of seedData) {
      await connection.execute(
        `INSERT INTO students (student_id, name, email, matric_no, school, batch, course, password, profile_pic, gender, dob, city, state, phone)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          uuidv4(), student.name, student.email, student.matric_no, student.school, student.batch, student.course, student.password,
          student.profile_pic, student.gender, student.dob, student.city, student.state, student.phone
        ]
      );
    }

    console.log('Seeding complete!');
  } catch (err) {
    console.error('Seeding failed:', err);
  } finally {
    if (connection) connection.release();
    await pool.end(); // Close the pool to exit the process
  }
}

seed();
