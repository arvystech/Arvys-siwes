// middleware/checkIsActive.js
const studentsModel = require('../models/studentsModel');

const checkIsActive = async (req, res, next) => {
  const studentId = req.user.studentId;

  // Check if student is active
  const student = await studentsModel.getStudentByStudentId(studentId);

  if (student[0].is_active !== 1) {
    console.log('Student is not active');
    return res.status(403).json({ success: false, message: 'Student is not active' });
  }

  next();
}

module.exports = checkIsActive;
