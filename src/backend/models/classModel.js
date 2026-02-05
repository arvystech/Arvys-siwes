// models/classModel.js
const { pool } = require('../config/db');

// Helper to decide whether to use the transaction connection or the pool
const useConn = (conn) => conn || pool;

// Function to get batch by batch ID
const getBatchByBatchId = async (batchId, conn = null) => {
  try {
    const connection = useConn(conn);
    const query = 'SELECT * FROM batches WHERE batch_id = ?';
    const [rows] = await connection.query(query, [batchId]);
    return rows;
  } catch (error) {
    throw error;
  }
};

// Function to get instructor by instructor ID
const getInstructorByInstructorId = async (instructorId, conn = null) => {
  try {
    const connection = useConn(conn);
    const query = 'SELECT * FROM instructors WHERE instructor_id = ?';
    const [rows] = await connection.query(query, [instructorId]);
    return rows;
  } catch (error) {
    throw error;
  }
};

// Create class
const createClass = async (batchId, instructorId, date, weekNumber, dayNumber, title, subtopics, description, codeSnippets, diagramUrl, conn = null) => {
  try {
    const connection = useConn(conn);
    const query = 'INSERT INTO classes (batch_id, instructor_id, date, week_number, day_number, title, subtopics, description, code_snippet, diagram_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [batchId, instructorId, date, weekNumber, dayNumber, title, JSON.stringify(subtopics), description, codeSnippets, diagramUrl];

    const [rows] = await connection.query(query, values);
    return rows;
  } catch (error) {
    throw error;
  }
};

// Function to get class by class ID
const getClassByClassId = async (classId, conn = null) => {
  try {
    const connection = useConn(conn);
    const query = 'SELECT * FROM classes WHERE class_id = ?';
    const [rows] = await connection.query(query, [classId]);
    return rows;
  } catch (error) {
    throw error;
  }
};

// Function to get class by batch ID
const getClassByBatchId = async (batchId, conn = null) => {
  try {
    const connection = db.pool.connect();
    const query = 'SELECT * FROM classes WHERE batch_id = ?';
    const [rows] = await connection.query(query, [batchId]);
    return rows;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getBatchByBatchId,
  getInstructorByInstructorId,
  createClass,
  getClassByClassId,
  getClassByBatchId
};