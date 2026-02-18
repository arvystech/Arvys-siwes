// modules/logbook/controllers/logbookController.js
const { pool } = require('../../../config/db');

// Classes model
const classesModel = require('../../../modules/class/models/classModel');

// Students model
const studentsModel = require('../../../modules/student/models/studentModel');

// Logbook model
const logbookModel = require('../models/logbookModel');

// Create logbook entry
const create_logbook_entry_post = async (req, res) => {
    try {
        const { classId, entry } = req.body;
        const studentId = req.user.studentId;
        console.log(studentId);


        // Validate: check fields
        if (!classId || !entry) {
            return res.status(400).json({ success: false, message: "Class ID and entry are required" });
        }

        // Validate entry length (50 words max)
        const wordCount = entry.trim().split(/\s+/).length;
        if (wordCount > 50) {
            return res.status(400).json({ success: false, message: "Entry must not exceed 50 words" });
        }

        // Check if class exists
        const classExists = await classesModel.getClassByClassId(classId);
        if (!classExists.length) {
            return res.status(404).json({ success: false, message: "Class not found" });
        }

        // Check if student exists
        const studentExists = await studentsModel.getStudentByStudentId(studentId);
        if (!studentExists.length) {
            return res.status(404).json({ success: false, message: "Student not found" });
        }

        // Check if student already submitted entry for this class
        const alreadySubmitted = await logbookModel.getEntryByStudentClass(studentId, classId);
        if (alreadySubmitted.length) {
            return res.status(400).json({ success: false, message: "You already submitted today's log" });
        }

        // Save entry
        await logbookModel.createEntry(classId, studentId, entry);

        return res.status(201).json({
            success: true,
            message: "Logbook entry saved successfully"
        });

    } catch (err) {
        console.log("Error saving logbook entry:", err);
        return res.status(500).json({ success: false, message: "Error saving logbook entry" });
    }
};

// Get logbook entries by student ID
const get_logbook_entries_by_student_get = async (req, res) => {
    try {
        const { studentId } = req.query;
        const loggedInStudentId = req.user.studentId;
        const targetStudentId = studentId || loggedInStudentId;

        // Authorization: Student can only see their own logs
        if (loggedInStudentId !== targetStudentId) {
            return res.status(403).json({ success: false, message: "You are not authorized to view this student's logbook" });
        }

        // Check if student exists
        const studentExists = await studentsModel.getStudentByStudentId(targetStudentId);
        if (!studentExists.length) {
            return res.status(404).json({ success: false, message: "Student not found" });
        }

        // Get entries
        const entries = await logbookModel.getEntriesByStudentId(targetStudentId);

        return res.status(200).json({
            success: true,
            entries
        });

    } catch (err) {
        console.log("Error getting logbook entries:", err);
        return res.status(500).json({ success: false, message: "Error getting logbook entries" });
    }
};

module.exports = {
    create_logbook_entry_post,
    get_logbook_entries_by_student_get
};
