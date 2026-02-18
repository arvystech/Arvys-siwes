// middleware/checkIsActive.js
const studentsModel = require('../modules/student/models/studentModel');

const checkIsActive = async (req, res, next) => {
  try {
    const studentId = req.user.studentId;

    if (!studentId) {
      console.error('No studentId found in request user object');
      return res.status(403).json({ success: false, message: 'Invalid authentication data' });
    }

    // Check if student is active
    const student = await studentsModel.getStudentByStudentId(studentId);

    if (!student || student.length === 0) {
      console.warn(`Student not found for ID: ${studentId}`);
      return res.status(404).json({ success: false, message: 'Student not found' });
    }

    if (student[0].is_active !== 1) {
      console.log(`Student ${studentId} is not active`);
      return res.status(403).json({ success: false, message: 'Student is not active' });
    }

    next();
  } catch (error) {
    console.error('Error in checkIsActive middleware:', error);
    return res.status(500).json({ success: false, message: 'Internal server error checking status' });
  }
}

module.exports = checkIsActive;
