// models/classModel.js
const { pool } = require('../../../config/db');
const { v4: uuidv4 } = require('uuid');

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
    const query = 'SELECT * FROM staffs WHERE id = ?';
    const [rows] = await connection.query(query, [instructorId]);
    return rows;
  } catch (error) {
    throw error;
  }
};

// Function to get the next class (today or future) for a batch and course
// If no upcoming class, returns the most recent past class
const getNextClassForBatch = async (batchId, courseId, conn = null) => {
  try {
    const connection = useConn(conn);

    // First, try to fetch the next upcoming class (today or future)
    const upcomingQuery = `
      SELECT 
        cl.*, 
        CONCAT(s.first_name, ' ', s.last_name) as instructor_name,
        c.title as course_title
      FROM classes cl
      LEFT JOIN staffs s ON cl.instructor_id = s.id
      LEFT JOIN courses c ON cl.course_id = c.id
      WHERE cl.batch_id = ? AND cl.course_id = ? AND cl.date >= CURDATE()
      ORDER BY cl.date ASC, cl.start_time ASC
      LIMIT 1
    `;
    const [upcomingRows] = await connection.query(upcomingQuery, [batchId, courseId]);

    // If we found an upcoming class, return it
    if (upcomingRows.length > 0) {
      return upcomingRows;
    }

    // No upcoming class found, fetch the most recent past class
    const pastQuery = `
      SELECT 
        cl.*, 
        CONCAT(s.first_name, ' ', s.last_name) as instructor_name,
        c.title as course_title
      FROM classes cl
      LEFT JOIN staffs s ON cl.instructor_id = s.id
      LEFT JOIN courses c ON cl.course_id = c.id
      WHERE cl.batch_id = ? AND cl.course_id = ? AND cl.date < CURDATE()
      ORDER BY cl.date DESC, cl.start_time DESC
      LIMIT 1
    `;
    const [pastRows] = await connection.query(pastQuery, [batchId, courseId]);

    return pastRows;
  } catch (error) {
    throw error;
  }
};

// Create class
const createClass = async (batchId, instructorId, courseId, date, startTime, endTime, weekNumber, dayNumber, title, subtopics, description, codeSnippets, diagramUrl, conn = null) => {
  try {
    const connection = useConn(conn);
    const query = 'INSERT INTO classes (class_id, batch_id, instructor_id, course_id, date, start_time, end_time, week_number, day_number, title, subtopics, description, code_snippet, diagram_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [uuidv4(), batchId, instructorId, courseId, date, startTime, endTime, weekNumber, dayNumber, title, JSON.stringify(subtopics), description, codeSnippets, diagramUrl];

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
    const connection = useConn(conn);
    const query = 'SELECT * FROM classes WHERE batch_id = ?';
    const [rows] = await connection.query(query, [batchId]);
    return rows;
  } catch (error) {
    throw error;
  }
};

// Function to get course by course ID
const getCourseByCourseId = async (courseId, conn = null) => {
  try {
    const connection = useConn(conn);
    const query = 'SELECT * FROM courses WHERE id = ?';
    const [rows] = await connection.query(query, [courseId]);
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
  getClassByBatchId,
  getCourseByCourseId,
  getNextClassForBatch
};