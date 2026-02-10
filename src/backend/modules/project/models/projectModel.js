// models/projectModel.js
const { pool } = require('../../../config/db');

// Helper to decide whether to use the transaction connection or the pool
const useConn = (conn) => conn || pool;

/**
 * Get all projects assigned to a student's batch and course
 * Sorted by due date (closest first)
 */
const getProjectsForStudent = async (batchId, courseId, studentId, conn = null) => {
    try {
        const connection = useConn(conn);
        const query = `
      SELECT 
        ap.project_id,
        ap.title,
        ap.description,
        ap.due_date,
        ap.assigned_date,
        ap.status AS project_status,
        ap.batch_id,
        ap.course_id,
        c.title AS course_title,
        s.id AS instructor_id,
        CONCAT(s.first_name, ' ', s.last_name) AS instructor_name,
        ps.submission_id,
        ps.status AS submission_status,
        ps.grade,
        ps.submitted_at,
        CASE 
          WHEN ps.submission_id IS NOT NULL THEN 'submitted'
          WHEN ap.due_date < CURDATE() THEN 'overdue'
          WHEN ap.due_date = CURDATE() THEN 'due_today'
          ELSE 'pending'
        END AS student_status,
        DATEDIFF(ap.due_date, CURDATE()) AS days_until_due
      FROM assigned_projects ap
      INNER JOIN courses c ON ap.course_id = c.id
      INNER JOIN staffs s ON ap.instructor_id = s.id
      LEFT JOIN project_submissions ps ON ap.project_id = ps.project_id AND ps.student_id = ?
      WHERE ap.batch_id = ? AND ap.course_id = ? AND ap.status = 'active'
      ORDER BY ap.due_date ASC
    `;
        const [rows] = await connection.query(query, [studentId, batchId, courseId]);
        return rows;
    } catch (error) {
        throw error;
    }
};

/**
 * Get a single project by ID
 */
const getProjectById = async (projectId, conn = null) => {
    try {
        const connection = useConn(conn);
        const query = `
      SELECT 
        ap.*,
        c.title AS course_title,
        CONCAT(s.first_name, ' ', s.last_name) AS instructor_name
      FROM assigned_projects ap
      INNER JOIN courses c ON ap.course_id = c.id
      INNER JOIN staffs s ON ap.instructor_id = s.id
      WHERE ap.project_id = ?
    `;
        const [rows] = await connection.query(query, [projectId]);
        return rows;
    } catch (error) {
        throw error;
    }
};

/**
 * Get student's submission for a project
 */
const getStudentSubmission = async (projectId, studentId, conn = null) => {
    try {
        const connection = useConn(conn);
        const query = 'SELECT * FROM project_submissions WHERE project_id = ? AND student_id = ?';
        const [rows] = await connection.query(query, [projectId, studentId]);
        return rows;
    } catch (error) {
        throw error;
    }
};

/**
 * Submit a project
 */
const submitProject = async (submissionId, projectId, studentId, solutionApproach, githubLink, screenshots, conn = null) => {
    try {
        const connection = useConn(conn);
        const query = `
      INSERT INTO project_submissions 
        (submission_id, project_id, student_id, solution_approach, github_link, screenshots, status)
      VALUES (?, ?, ?, ?, ?, ?, 'submitted')
    `;
        const [result] = await connection.query(query, [
            submissionId,
            projectId,
            studentId,
            solutionApproach,
            githubLink,
            JSON.stringify(screenshots)
        ]);
        return result;
    } catch (error) {
        throw error;
    }
};

/**
 * Get project stats for a student
 */
const getProjectStats = async (batchId, courseId, studentId, conn = null) => {
    try {
        const connection = useConn(conn);
        const query = `
      SELECT 
        COUNT(*) AS total_projects,
        SUM(CASE WHEN ps.submission_id IS NOT NULL THEN 1 ELSE 0 END) AS completed_projects,
        SUM(CASE WHEN ps.submission_id IS NULL AND ap.due_date >= CURDATE() THEN 1 ELSE 0 END) AS pending_projects,
        SUM(CASE WHEN ps.submission_id IS NULL AND ap.due_date < CURDATE() THEN 1 ELSE 0 END) AS overdue_projects
      FROM assigned_projects ap
      LEFT JOIN project_submissions ps ON ap.project_id = ps.project_id AND ps.student_id = ?
      WHERE ap.batch_id = ? AND ap.course_id = ? AND ap.status = 'active'
    `;
        const [rows] = await connection.query(query, [studentId, batchId, courseId]);
        return rows[0];
    } catch (error) {
        throw error;
    }
};

/**
 * Update an existing project submission
 */
const updateSubmission = async (projectId, studentId, solutionApproach, githubLink, screenshots, conn = null) => {
    try {
        const connection = useConn(conn);
        const query = `
      UPDATE project_submissions 
      SET solution_approach = ?, 
          github_link = ?, 
          screenshots = ?,
          status = 'submitted',
          updated_at = CURRENT_TIMESTAMP
      WHERE project_id = ? AND student_id = ? AND grade IS NULL
    `;
        const [result] = await connection.query(query, [
            solutionApproach,
            githubLink,
            JSON.stringify(screenshots),
            projectId,
            studentId
        ]);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getProjectsForStudent,
    getProjectById,
    getStudentSubmission,
    submitProject,
    getProjectStats,
    updateSubmission
};
