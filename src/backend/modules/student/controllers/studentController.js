const studentsModel = require('../models/studentModel');
const classesModel = require('../../class/models/classModel');
const logbookModel = require('../../logbook/models/logbookModel');
const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

// Student Dashboard/Home
const student_dashboard_get = async (req, res) => {
  try {
    const student = req.user;
    console.log('Fetching dashboard for student:', student.studentId);

    // Get student basic details
    const studentDetailsResult = await studentsModel.getStudentByStudentId(student.studentId);

    if (!studentDetailsResult.length) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }

    const studentDetails = studentDetailsResult[0];

    // Get current/upcoming class based on student's batch
    let currentClass = null;
    if (studentDetails.batch) {
      const classResult = await classesModel.getNextClassForBatch(studentDetails.batch, studentDetails.course);
      if (classResult.length > 0) {
        const cl = classResult[0];

        // Time calculations
        const now = dayjs();
        // Use the date from DB. Note: cl.date is a Date object from mysql2
        const classDate = dayjs(cl.date).format('YYYY-MM-DD');
        const startTime = dayjs(`${classDate} ${cl.start_time}`, 'YYYY-MM-DD HH:mm:ss');
        const endTime = dayjs(`${classDate} ${cl.end_time}`, 'YYYY-MM-DD HH:mm:ss');

        let status = 'upcoming';
        if (now.isAfter(startTime) && now.isBefore(endTime)) {
          status = 'ongoing';
        } else if (now.isAfter(endTime)) {
          status = 'completed';
        }

        // Calculate duration in hours and minutes
        const durationMinutes = endTime.diff(startTime, 'minute');
        const hours = Math.floor(durationMinutes / 60);
        const mins = durationMinutes % 60;
        const durationStr = `${hours}h${mins > 0 ? ` ${mins}m` : ''}`;

        // Check if attendance is already logged
        const existingAttendance = await studentsModel.getStudentAttendanceForClass(student.studentId, cl.class_id);
        const isAttendanceLogged = existingAttendance.length > 0;

        currentClass = {
          id: cl.class_id,
          topic: cl.title,
          date: classDate,
          instructorName: cl.instructor_name || 'TBA',
          startTime: startTime.format('hh:mm A'),
          endTime: endTime.format('hh:mm A'),
          duration: durationStr,
          status: status, // 'upcoming', 'ongoing', 'completed'
          description: cl.description,
          subtopics: typeof cl.subtopics === 'string' ? JSON.parse(cl.subtopics) : cl.subtopics,
          isAttendanceLogged: isAttendanceLogged
        };
      }
    }

    // Get attendance statistics
    const attendanceStatsResult = await studentsModel.getStudentAttendanceRecord(student.studentId);
    const logsCountResult = await logbookModel.getEntriesByStudentId(student.studentId);

    // Calculate attendance percentage (mock for now if total classes unknown, or use a reasonable denominator)
    // Let's assume courses have a theoretical total or just count what we have
    const attendanceStats = {
      percentage: Math.min(100, (attendanceStatsResult.length * 5)), // Mock calculation for now
      logsCount: logsCountResult.length,
      projectsCompleted: 0, // TODO: Implement project model
      projectsTotal: 5
    };

    // Check logbook status for today/current class
    let hasLoggedToday = false;
    if (currentClass) {
      const existingLog = await logbookModel.getEntryByStudentClass(student.studentId, currentClass.id);
      hasLoggedToday = existingLog.length > 0;
    }

    const logbookStatus = {
      hasLoggedToday
    };

    // Prepare response data
    const dashboardData = {
      student: {
        name: studentDetails.name,
        matricNo: studentDetails.matric_no,
        email: studentDetails.email,
        batch: studentDetails.batch,
        course: studentDetails.course,
        isActive: studentDetails.is_active
      },
      currentClass,
      attendanceStats,
      logbookStatus
    };

    return res.status(200).json({
      success: true,
      data: dashboardData
    });
  } catch (error) {
    console.log('Error getting dashboard data: ', error);
    return res.status(500).json({ success: false, message: 'Error getting dashboard data' });
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


// Auth Check - Returns user info if authenticated
const auth_check_get = async (req, res) => {
  try {
    const student = req.user;

    // Get basic student details
    const studentDetails = await studentsModel.getStudentByStudentId(student.studentId);

    if (!studentDetails.length) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }

    const { password, ...safeStudentData } = studentDetails[0]; // Remove password from response

    return res.status(200).json({
      success: true,
      authenticated: true,
      student: safeStudentData
    });
  } catch (error) {
    console.log('Error checking auth: ', error);
    return res.status(500).json({ success: false, message: 'Error checking authentication' });
  }
}

// Student Profile - Get complete profile details
const student_profile_get = async (req, res) => {
  try {
    const student = req.user;
    console.log('Fetching profile for student:', student.studentId);

    // Get complete student profile with school, batch, and course details
    const profileResult = await studentsModel.getStudentProfileDetails(student.studentId);

    if (!profileResult.length) {
      return res.status(404).json({ success: false, message: 'Student profile not found' });
    }

    const profile = profileResult[0];

    // Remove sensitive data
    delete profile.password;

    // Format date of birth if exists
    if (profile.dob) {
      profile.dob = new Date(profile.dob).toISOString().split('T')[0];
    }

    return res.status(200).json({
      success: true,
      data: profile
    });
  } catch (error) {
    console.log('Error getting student profile: ', error);
    return res.status(500).json({ success: false, message: 'Error getting student profile' });
  }
}


module.exports = { student_dashboard_get, mark_student_attendance_get, auth_check_get, student_profile_get };