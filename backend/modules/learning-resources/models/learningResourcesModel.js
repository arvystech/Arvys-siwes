const { pool } = require('../../../config/db');

// Helper to decide whether to use the transaction connection or the pool
const useConn = (conn) => conn || pool;

// Create a new learning resource
const createResource = async (resourceData, conn = null) => {
    try {
        const connection = useConn(conn);
        const { title, type, url, class_id, description } = resourceData;

        // Only PDF, YOUTUBE, LINK are allowed by enum, but handled by controller validation
        const query = `
      INSERT INTO learning_resources (title, type, url, class_id, description)
      VALUES (?, ?, ?, ?, ?)
    `;

        const [result] = await connection.query(query, [title, type, url, class_id, description]);
        return result.insertId;
    } catch (error) {
        throw error;
    }
};

// Get all resources for a specific class
const getResourcesByClassId = async (classId, conn = null) => {
    try {
        const connection = useConn(conn);
        const query = 'SELECT * FROM learning_resources WHERE class_id = ? ORDER BY created_at DESC';
        const [rows] = await connection.query(query, [classId]);
        return rows;
    } catch (error) {
        throw error;
    }
};

// Get single resource by ID
const getResourceById = async (id, conn = null) => {
    try {
        const connection = useConn(conn);
        const query = 'SELECT * FROM learning_resources WHERE id = ?';
        const [rows] = await connection.query(query, [id]);
        return rows[0];
    } catch (error) {
        throw error;
    }
};

// Delete a resource
const deleteResource = async (id, conn = null) => {
    try {
        const connection = useConn(conn);
        const query = 'DELETE FROM learning_resources WHERE id = ?';
        const [result] = await connection.query(query, [id]);
        return result.affectedRows > 0;
    } catch (error) {
        throw error;
    }
};

// Get all resources for a batch and course, grouped by week
const getResourcesByBatch = async (batchId, courseId, conn = null) => {
    try {
        const connection = useConn(conn);
        const query = `
            SELECT 
                lr.id,
                lr.title,
                lr.type,
                lr.url,
                lr.description,
                lr.class_id,
                lr.created_at,
                c.week_number,
                c.title as class_title,
                c.date as class_date
            FROM learning_resources lr
            INNER JOIN classes c ON lr.class_id = c.class_id
            WHERE c.batch_id = ? AND c.course_id = ?
            ORDER BY c.week_number DESC, lr.created_at DESC
        `;
        const [rows] = await connection.query(query, [batchId, courseId]);
        return rows;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createResource,
    getResourcesByClassId,
    getResourceById,
    deleteResource,
    getResourcesByBatch
};
