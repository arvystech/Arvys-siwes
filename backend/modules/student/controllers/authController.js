// controllers/authController.js
const bcrypt = require('bcrypt');

// studentModel
const studentsModel = require('../models/studentModel');

// Utility to generate JWT
const generateToken = require('../../../utils/generateToken');

// Post route for student login
const student_login_post = async (req, res) => {
  try {
    const { matricNo, password } = req.body;
    console.log('Log in details: ', req.body);

    // Check if all details were provided
    if (!matricNo || !password) {
      console.log('Please provide all details!');
      return res.status(400).json({ success: false, message: 'Please provide all details!' });
    }

    // Check student matric number
    const checkStudentMatricNo = await studentsModel.getStudentByMatricNo(matricNo);
    console.log('Student results: ', checkStudentMatricNo);

    if (!checkStudentMatricNo.length) {
      console.log('Student not found!');
      return res.status(401).json({ success: false, message: 'Student not found!' });
    }
    let foundStudent = checkStudentMatricNo[0];

    // Check if password is correct
    if (password !== foundStudent.password) {
      console.log('Incorrect password!');
      return res.status(401).json({ success: false, message: 'Incorrect password!' });
    }

    // Now compare passwords
    // const comparePasswords = await bcrypt.compare(password, foundStudent.password);
    // if (!comparePasswords) {
    //   console.log('Incorrect password!');
    //   return res.status(401).json({ success: false, message: 'Incorrect password!' });
    // }

    // Generate JWT for the user
    const jwtToken = generateToken({
      studentId: foundStudent.student_id,
      matricNo: foundStudent.matric_no,
      isActive: foundStudent.is_active,
    });

    // Set cookie with the token
    res.cookie('arvys_siwes_student_token', jwtToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60 * 24, // 1 day (for development)
      path: '/'
    });

    return res.status(200).json({ success: true, generatedToken: jwtToken });
  } catch (error) {
    console.log('Internal server error: ', error);
    return res.status(500).json({ success: false, message: 'Error signing in!' });
  }
}

// Post route for student logout
const student_logout_post = async (req, res) => {
  try {
    // Delete the cookie
    res.clearCookie('arvys_siwes_student_token');
    return res.status(200).json({ success: true, message: 'Logged out successfully' });
  } catch (error) {
    console.log('Internal server error: ', error);
    return res.status(500).json({ success: false, message: 'Error logging out!' });
  }
}

module.exports = { student_login_post, student_logout_post };