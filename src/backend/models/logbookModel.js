// models/logbookModel.js
const { pool } = require('../config/db');

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
    const query = 'INSERT INTO logbook_entries (class_id, student_id, entry) VALUES (?, ?, ?)';
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
    const query = 'SELECT * FROM logbook_entries le INNER JOIN students st ON le.student_id = st.student_id INNER JOIN classes cl ON le.class_id = cl.class_id WHERE st.student_id = ?';
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