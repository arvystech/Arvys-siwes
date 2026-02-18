// models/studentModel.js
const { pool } = require('../../../config/db');

// Helper to decide whether to use the transaction connection or the pool
const useConn = (conn) => conn || pool;

// Function to get student by student ID
const getStudentByStudentId = async (studentId, conn = null) => {
  try {
    const connection = useConn(conn);
    const query = 'SELECT * FROM students WHERE student_id = ?';
    const [rows] = await connection.query(query, [studentId]);
    return rows;
  } catch (error) {
    throw error;
  }
};

// Function to get student by matriculation number
const getStudentByMatricNo = async (matricNo, conn = null) => {
  try {
    const connection = useConn(conn);
    const query = 'SELECT * FROM students WHERE matric_no = ?';
    const [rows] = await connection.query(query, [matricNo]);
    return rows;
  } catch (error) {
    throw error;
  }
};

// Function to update student is_active column
const updateStudentIsActive = async (studentId, isActive, conn = null) => {
  try {
    const connection = useConn(conn);
    const query = 'UPDATE students SET is_active = ? WHERE student_id = ?';
    const [rows] = await connection.query(query, [isActive, studentId]);
    return rows;
  } catch (error) {
    throw error;
  }
};

// Function to get student's attendance record
const getStudentAttendanceRecord = async (studentId, conn = null) => {
  try {
    const connection = useConn(conn);
    const query = 'SELECT * FROM attendance a INNER JOIN classes cl ON a.class_id = cl.class_id WHERE a.student_id = ?';
    const [rows] = await connection.query(query, [studentId]);
    return rows;
  } catch (error) {
    throw error;
  }
};

// Function to fetch class details
const getClassDetails = async (classId) => {
  try {
    const query = 'SELECT * FROM classes cl INNER JOIN courses co ON cl.course_id = co.id INNER JOIN staffs s ON cl.instructor_id = s.id WHERE class_id = ?';
    const values = [classId];

    const [rows] = await pool.query(query, values);
    return rows;
  } catch (error) {
    return error;
  }
}

// Function to add student attendance
const addStudentAttendance = async (studentId, classId, status) => {
  try {
    const query = 'INSERT INTO attendance (student_id, class_id, status) VALUES (?, ?, ?)';
    const values = [studentId, classId, status];

    const [rows] = await pool.query(query, values);
    return rows;
  } catch (error) {
    return error;
  }
}

// Function to get student's course details
const studentCourseDetails = async (studentId) => {
  try {
    const query = 'SELECT student_id, name, matric_no, c.id AS course_id, c.title AS course_title, c.price AS course_price FROM students s INNER JOIN courses c ON s.course = c.id WHERE s.student_id = ?';
    const values = [studentId];

    const [rows] = await pool.query(query, values);
    return rows;
  } catch (error) {
    return error;
  }
}

// Function to get student's school details
const studentSchoolDetails = async (studentId) => {
  try {
    const query = 'SELECT student_id, name, matric_no, school_id, school_name, IT_charge, first_min, second_min, third_min FROM students s INNER JOIN schools sc ON s.school = sc.school_id WHERE s.student_id = ?';
    const values = [studentId];

    const [rows] = await pool.query(query, values);
    return rows;
  } catch (error) {
    return error;
  }
}

// Function to update the student's payment status
const updateStudentPaymentStatus = async (status, studentId, conn = null) => {
  try {
    const connection = useConn(conn);
    const query = 'UPDATE students SET student_payment_status = ? WHERE student_id = ?';
    const [rows] = await connection.query(query, [status, studentId]);
    return rows;
  } catch (error) {
    throw error;
  }
};

// Function to get student's payment summary view
const getStudentPaymentSummary = async (studentId, conn = null) => {
  try {
    const connection = useConn(conn);
    const query = 'SELECT * FROM student_payment_summary WHERE student_id = ?';
    const [rows] = await connection.query(query, [studentId]);
    return rows;
  } catch (error) {
    throw error;
  }
};

// Function to insert student payment record
const insertStudentPaymentRecord = async (studentId, amount, installmentNo, status, conn = null) => {
  try {
    const connection = useConn(conn);
    const query = 'INSERT INTO payments (student_id, amount, installment_no, payment_status) VALUES (?, ?, ?, ?)';
    await connection.query(query, [studentId, amount, installmentNo, status]);
  } catch (error) {
    throw error;
  }
};

// Function to update pament status
const updatePaymentStatus = async (transactionId, status) => {
  try {
    const query = 'UPDATE payments SET status = ? WHERE transaction_id = ?';
    const values = [status, transactionId];

    const [rows] = await pool.query(query, values);
    return rows;
  } catch (error) {
    return error;
  }
}

const getStudentAttendanceForClass = async (studentId, classId) => {
  try {
    const query = 'SELECT * FROM attendance WHERE student_id = ? AND class_id = ?';
    const values = [studentId, classId];

    const [rows] = await pool.query(query, values);
    return rows;
  } catch (error) {
    return error;
  }
}

// Function to get complete student profile with school, batch, and course details
const getStudentProfileDetails = async (studentId, conn = null) => {
  try {
    const connection = useConn(conn);
    const query = `
      SELECT 
        s.student_id,
        s.name,
        s.email,
        s.matric_no,
        s.profile_pic,
        s.gender,
        s.dob,
        s.city,
        s.state,
        s.phone,
        s.is_active,
        s.student_payment_status,
        s.created_at,
        sc.school_id,
        sc.school_name,
        sc.IT_charge,
        b.batch_id,
        b.session AS batch_session,
        b.status AS batch_status,
        c.id AS course_id,
        c.title AS course_title,
        c.price AS course_price
      FROM students s
      LEFT JOIN schools sc ON s.school = sc.school_id
      LEFT JOIN batches b ON s.batch = b.batch_id
      LEFT JOIN courses c ON s.course = c.id
      WHERE s.student_id = ?
    `;
    const [rows] = await connection.query(query, [studentId]);
    return rows;
  } catch (error) {
    throw error;
  }
};


module.exports = {
  getStudentByStudentId,
  getStudentByMatricNo,
  updateStudentIsActive,
  getStudentAttendanceRecord,
  getClassDetails,
  addStudentAttendance,
  studentCourseDetails,
  studentSchoolDetails,
  updateStudentPaymentStatus,
  getStudentPaymentSummary,
  insertStudentPaymentRecord,
  getStudentProfileDetails,
  getStudentAttendanceForClass
};