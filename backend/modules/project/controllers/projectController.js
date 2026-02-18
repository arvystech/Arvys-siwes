// controllers/projectController.js
const { v4: uuidv4 } = require('uuid');
const projectModel = require('../models/projectModel');
const studentModel = require('../../student/models/studentModel');

/**
 * Get all projects for the logged-in student
 */
const getStudentProjects = async (req, res) => {
    try {
        console.log('Hit this route');
        const studentId = req.user.studentId;

        // Get student details to find batch and course
        const studentDetails = await studentModel.getStudentProfileDetails(studentId);

        if (!studentDetails || studentDetails.length === 0) {
            console.log(studentDetails);
            return res.status(404).json({
                success: false,
                message: 'Student not found'
            });
        }

        const { batch_id, course_id } = studentDetails[0];

        if (!batch_id || !course_id) {
            console.log(batch_id, course_id);
            return res.status(400).json({
                success: false,
                message: 'Student batch or course not assigned'
            });
        }

        // Get projects for the student
        const projects = await projectModel.getProjectsForStudent(batch_id, course_id, studentId);
        console.log(projects);

        // Get project stats
        const stats = await projectModel.getProjectStats(batch_id, course_id, studentId);
        console.log(stats);

        res.status(200).json({
            success: true,
            data: {
                projects,
                stats: {
                    total: stats.total_projects || 0,
                    completed: stats.completed_projects || 0,
                    pending: stats.pending_projects || 0,
                    overdue: stats.overdue_projects || 0
                }
            }
        });
    } catch (error) {
        console.error('Error fetching student projects:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch projects'
        });
    }
};

/**
 * Get a single project by ID
 */
const getProjectDetails = async (req, res) => {
    try {
        const { projectId } = req.params;
        const studentId = req.user.studentId;

        const project = await projectModel.getProjectById(projectId);

        if (!project || project.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Project not found'
            });
        }

        // Check if student has submitted
        const submission = await projectModel.getStudentSubmission(projectId, studentId);

        res.status(200).json({
            success: true,
            data: {
                project: project[0],
                submission: submission.length > 0 ? submission[0] : null
            }
        });
    } catch (error) {
        console.error('Error fetching project details:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch project details'
        });
    }
};

/**
 * Helper to validate project submission data (Backend)
 */
const validateSubmissionData = (solutionApproach, githubLink, screenshots) => {
    if (!solutionApproach || !githubLink) {
        return 'Solution approach and GitHub link are required';
    }

    if (!screenshots || !Array.isArray(screenshots) || screenshots.length < 2 || screenshots.length > 3) {
        return 'Please upload 2-3 screenshots';
    }

    const imageRegex = /^data:image\/(jpeg|png|webp);base64,/;
    const maxImageSize = 2 * 1024 * 1024; // 2MB

    for (let i = 0; i < screenshots.length; i++) {
        const s = screenshots[i];
        if (!imageRegex.test(s)) {
            return `Invalid format for screenshot ${i + 1}. JPEG/PNG/WebP only.`;
        }
        const estimatedBytes = (s.length * 3) / 4;
        if (estimatedBytes > maxImageSize) {
            return `Screenshot ${i + 1} is too large (max 2MB per image).`;
        }
    }
    return null;
};

/**
 * Submit a project
 */
const submitProject = async (req, res) => {
    try {
        const { projectId } = req.params;
        const studentId = req.user.studentId;
        const { solutionApproach, githubLink, screenshots } = req.body;

        const error = validateSubmissionData(solutionApproach, githubLink, screenshots);
        if (error) {
            return res.status(400).json({ success: false, message: error });
        }

        // Check if project exists
        const project = await projectModel.getProjectById(projectId);
        if (!project || project.length === 0) {
            return res.status(404).json({ success: false, message: 'Project not found' });
        }

        // Check if already submitted
        const existingSubmission = await projectModel.getStudentSubmission(projectId, studentId);
        if (existingSubmission.length > 0) {
            return res.status(400).json({
                success: false,
                message: 'You have already submitted this project'
            });
        }

        const submissionId = uuidv4();
        await projectModel.submitProject(
            submissionId,
            projectId,
            studentId,
            solutionApproach,
            githubLink,
            screenshots
        );

        res.status(201).json({
            success: true,
            message: 'Project submitted successfully',
            data: { submission_id: submissionId }
        });
    } catch (error) {
        console.error('Error submitting project:', error);
        res.status(500).json({ success: false, message: 'Failed to submit' });
    }
};

/**
 * Update an existing project submission
 */
const updateProjectSubmission = async (req, res) => {
    try {
        const { projectId } = req.params;
        const studentId = req.user.studentId;
        const { solutionApproach, githubLink, screenshots } = req.body;

        const error = validateSubmissionData(solutionApproach, githubLink, screenshots);
        if (error) {
            return res.status(400).json({ success: false, message: error });
        }

        // Check if submission exists and is not graded
        const existing = await projectModel.getStudentSubmission(projectId, studentId);
        if (existing.length === 0) {
            return res.status(404).json({ success: false, message: 'Submission not found' });
        }

        if (existing[0].grade) {
            return res.status(400).json({
                success: false,
                message: 'Cannot edit: Submission has already been graded'
            });
        }

        await projectModel.updateSubmission(
            projectId,
            studentId,
            solutionApproach,
            githubLink,
            screenshots
        );

        res.status(200).json({
            success: true,
            message: 'Submission updated successfully'
        });
    } catch (error) {
        console.error('Error updating project:', error);
        res.status(500).json({ success: false, message: 'Failed to update submission' });
    }
};

module.exports = {
    getStudentProjects,
    getProjectDetails,
    submitProject,
    updateProjectSubmission
};
