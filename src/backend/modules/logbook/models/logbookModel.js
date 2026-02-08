// modules/logbook/models/logbookModel.js
const { pool } = require('../../../config/db');

// Helper to decide whether to use the transaction connection or the pool
const useConn = (conn) => conn || pool;

// Function to get entry by student and class ID
const getEntryByStudentClass = async (studentId, classId, conn = null) => {
    try {
        const connection = useConn(conn);
        const query = 'SELECT * FROM logbook_entries WHERE student_id = ? AND class_id = ?';
        const [rows] = await connection.query(query, [studentId, classId]);
        return rows;
    } catch (error) {
        throw error;
    }
};

// Function to create entry
const createEntry = async (classId, studentId, entry, conn = null) => {
    try {
        const connection = useConn(conn);
        const query = 'INSERT INTO logbook_entries (entry_id, class_id, student_id, entry) VALUES (UUID(), ?, ?, ?)';
        const values = [classId, studentId, entry];

        const [rows] = await connection.query(query, values);
        return rows;
    } catch (error) {
        throw error;
    }
};

// Function to get student's logbook entries
const getEntriesByStudentId = async (studentId, conn = null) => {
    try {
        const connection = useConn(conn);
        const query = `
      SELECT 
        le.*, 
        cl.title, 
        cl.date,
        CONCAT(s.first_name, ' ', s.last_name) as instructor_name
      FROM logbook_entries le 
      INNER JOIN classes cl ON le.class_id = cl.class_id 
      LEFT JOIN staffs s ON cl.instructor_id = s.id
      WHERE le.student_id = ?
      ORDER BY le.created_at DESC
    `;
        const [rows] = await connection.query(query, [studentId]);
        return rows;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getEntryByStudentClass,
    createEntry,
    getEntriesByStudentId
};
