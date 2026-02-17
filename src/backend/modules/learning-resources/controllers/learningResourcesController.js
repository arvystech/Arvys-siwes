const LearningResources = require('../models/learningResourcesModel');
const { pool } = require('../../../config/db');
const path = require('path');
const fs = require('fs');

// Add a new resource
const addResource = async (req, res, next) => {
    try {
        const { title, type, url: linkUrl, class_id, description } = req.body;
        let resourceUrl = linkUrl;

        // Handle File Upload (PDF)
        if (req.file) {
            // Construct URL accessible via frontend
            // app.js serves /assets from src/frontend/assets
            resourceUrl = `/assets/uploads/resources/${req.file.filename}`;
        }

        // Validation
        if (!title || !type || !class_id) {
            return res.status(400).json({ success: false, message: 'Title, type, and class_id are required.' });
        }

        if (type === 'PDF' && !req.file && !linkUrl) {
            return res.status(400).json({ success: false, message: 'PDF file or URL required for PDF type.' });
        }

        if ((type === 'YOUTUBE' || type === 'LINK') && !linkUrl) {
            return res.status(400).json({ success: false, message: 'URL is required for YouTube/Link resources.' });
        }

        // Check existing resources count (Max 2)
        const existingResources = await LearningResources.getResourcesByClassId(class_id);
        if (existingResources.length >= 2) {
            // Cleanup uploaded file if exists, since we are rejecting
            if (req.file) {
                fs.unlink(req.file.path, (err) => {
                    if (err) console.error("Failed to delete uploaded file after rejection:", err);
                });
            }
            return res.status(400).json({ success: false, message: 'Class limit reached: Max 2 resources allowed.' });
        }

        const resourceId = await LearningResources.createResource({
            title,
            type,
            url: resourceUrl,
            class_id,
            description
        });

        res.status(201).json({
            success: true,
            message: 'Resource added successfully',
            data: { id: resourceId, title, type, url: resourceUrl, class_id }
        });

    } catch (error) {
        next(error);
    }
};

// Get resources for a class
const getClassResources = async (req, res, next) => {
    try {
        const { classId } = req.params;
        if (!classId) {
            return res.status(400).json({ success: false, message: 'Class ID is required' });
        }

        const resources = await LearningResources.getResourcesByClassId(classId);
        res.status(200).json({
            success: true,
            data: resources
        });
    } catch (error) {
        next(error);
    }
};

// Remove a resource
const removeResource = async (req, res, next) => {
    try {
        const { id } = req.params;

        // Get resource details first to delete file if it exists
        const resource = await LearningResources.getResourceById(id);

        if (!resource) {
            return res.status(404).json({ success: false, message: 'Resource not found' });
        }

        // Attempt to delete file if it's a local upload
        if (resource.type === 'PDF' && resource.url.startsWith('/assets/uploads/')) {
            // Construct absolute path
            const relativePath = resource.url.replace('/assets/', ''); // removes /assets/ prefix
            const absolutePath = path.join(__dirname, '../../../../frontend/assets', relativePath);

            fs.unlink(absolutePath, (err) => {
                if (err) console.error("Failed to delete local file:", err);
            });
        }

        await LearningResources.deleteResource(id);

        res.status(200).json({
            success: true,
            message: 'Resource deleted successfully'
        });
    } catch (error) {
        next(error);
    }
};

// Get resources for the authenticated student (grouped by week)
const getStudentResources = async (req, res, next) => {
    try {
        // Get student info from JWT token (set by authenticateStudentToken middleware)
        const studentId = req.user?.studentId;

        if (!studentId) {
            return res.status(401).json({ success: false, message: 'Not authenticated' });
        }

        // Get student's batch and course
        const studentQuery = 'SELECT batch, course FROM students WHERE student_id = ?';
        const [studentRows] = await pool.query(studentQuery, [studentId]);

        if (!studentRows || studentRows.length === 0) {
            return res.status(404).json({ success: false, message: 'Student not found' });
        }

        const { batch: batchId, course: courseId } = studentRows[0];

        if (!batchId || !courseId) {
            return res.status(400).json({
                success: false,
                message: 'Student batch or course not assigned'
            });
        }

        // Fetch resources for this batch and course
        const resources = await LearningResources.getResourcesByBatch(batchId, courseId);

        // Group resources by week
        const resourcesByWeek = {};
        resources.forEach(resource => {
            const week = resource.week_number;
            if (!resourcesByWeek[week]) {
                resourcesByWeek[week] = [];
            }
            resourcesByWeek[week].push(resource);
        });

        res.status(200).json({
            success: true,
            data: {
                resources,
                resourcesByWeek
            }
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    addResource,
    getClassResources,
    removeResource,
    getStudentResources
};
