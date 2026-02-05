// controllers/studentController.js
const studentsModel = require('../../../models/studentsModel');

// Student Dashboard
const student_dashboard_get = async (req, res) => {
  try {
    const student = req.user;
    console.log(student);

    // Get student details
    const studentDetails = await studentsModel.getStudentByStudentId(student.studentId);

    // Get student's attendance
    const studentAttendance = await studentsModel.getStudentAttendanceRecord(student.studentId);
    console.log('Student Attendance: ', studentAttendance);

    // Get student's payment records
    const paymentSummary = await studentsModel.getStudentPaymentSummary(student.studentId);

    return res.status(200).json({ success: true, studentDetails, studentAttendance, paymentSummary });
  } catch (error) {
    console.log('Error getting student details: ', error);
    return res.status(500).json({ success: false, message: 'Error getting student details' });
  }
}

// Mark Student Attendance
const mark_student_attendance_get = async (req, res) => {
  try {
    const { classId, status } = req.query;
    const studentId = req.user.studentId;

    // Make sure all data is provided.
    if (!studentId || !classId || !status) {
      console.log('Please provide all details');
      return res.status(400).json({ success: false, message: 'Please provide all details' });
    }

    // Check if student exist
    const checkStudent = await studentsModel.getStudentByStudentId(studentId);
    if (!checkStudent.length) {
      console.log('Student does not exist');
      return res.status(400).json({ success: false, message: 'Student does not exist' });
    }
    const foundStudent = checkStudent[0];

    // Fetch class details
    const classDetails = await studentsModel.getClassDetails(classId);
    console.log(classDetails);

    if (!classDetails.length) {
      console.log('Class not found');
      return res.status(404).json({ success: false, message: 'Class not found' });
    }

    // Check if student belongs to class
    if (foundStudent.course !== classDetails[0].course_id) {
      console.log('Student does not belong to this class');
      return res.status(401).json({ success: false, message: 'Student does not belong to this class' });
    }

    const existingAttendance = await studentsModel.getStudentAttendanceForClass(foundStudent.student_id, classId);
    if (existingAttendance.length > 0) {
      console.log('Student has already marked attendance for this class');
      return res.status(409).json({ success: false, message: 'Student has already marked attendance for this class' });
    }

    // Update student attendance status
    const updateAttStudent = await studentsModel.addStudentAttendance(foundStudent.student_id, classId, status);
    console.log(updateAttStudent);

    console.log('Successfully marked attendance');
    return res.status(200).json({ success: true, message: 'Successfully marked attendance' });

  } catch (error) {
    console.log('Error marking attendance: ', error);
    return res.status(500).json({ success: false, message: "Error marking attendance" });
  }
}

// Submit student assignment
const submit_assignment_post = async (req, res) => {
  try {
    const { classId, assignmentId } = req.body;
    const studentId = req.user.studentId;

    // Make sure all data is provided.
    if (!studentId || !classId || !assignmentId) {
      console.log('Please provide all details');
      return res.status(400).json({ success: false, message: 'Please provide all details' });
    }

    // Check if student exist
    const checkStudent = await studentsModel.getStudentByStudentId(studentId);
    if (!checkStudent.length) {
      console.log('Student does not exist');
      return res.status(400).json({ success: false, message: 'Student does not exist' });
    }
    const foundStudent = checkStudent[0];

    // Fetch class details
    const classDetails = await studentsModel.getClassDetails(classId);
    console.log(classDetails);

    if (!classDetails.length) {
      console.log('Class not found');
      return res.status(400).json({ success: false, message: 'Class not found' });
    }

    // Check if student belongs to class
    if (foundStudent.course !== classDetails[0].course_id) {
      console.log('Student does not belong to this class');
      return res.status(401).json({ success: false, message: 'Student does not belong to this class' });
    }

  } catch (error) {

  }
}


module.exports = { student_dashboard_get, mark_student_attendance_get };