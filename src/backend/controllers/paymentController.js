// controllers/paymentController.js
const { pool } = require('../config/db');

const axios = require('axios');

// studentsModel
const studentsModel = require('../models/studentsModel');

const simulate_payment_post = async (req, res) => {
  const { studentId } = req.body;

  // Check if studentId is provided
  if (!studentId) {
    console.log('Please provide all details');
    return res.status(400).json({ success: false, message: 'Please provide all details' });
  }

  try {
    // Check if student exists
    const checkStudent = await studentsModel.getStudentByStudentId(studentId);
    if (!checkStudent.length) {
      console.log('Student not found');
      return res.status(401).json({ success: false, message: 'Student not found' });
    }

    // Simulate "payment gateway" success/failure
    const paymentSuccess = Math.random() > 0.2; // 80% chance success

    if (!paymentSuccess) {
      console.log('Payment failed!');
      return res.status(400).json({ success: false, message: 'Payment failed' });
    }

    // Update the is_active column in the students table
    await studentsModel.updateStudentIsActive(studentId, true);
    req.user.isActive = 1;

    return res.status(200).json({ success: true, message: 'Payment successful' });
  } catch (error) {
    console.log('Error processing payment: ', error);
    return res.status(500).json({ success: false, message: 'Error processing payment' });
  }
};

// IT charge payment
const initiate_it_payment_post = async (req, res) => {
  const { amount } = req.body;
  const studentId = req.user.studentId;

  // Check if studentId is provided
  if (!studentId) {
    console.log('Please provide all details');
    return res.status(400).json({ success: false, message: 'Please provide all details' });
  }

  try {
    // Check if student exists
    const checkStudent = await studentsModel.getStudentByStudentId(studentId);
    if (!checkStudent.length) {
      console.log('Student not found');
      return res.status(401).json({ success: false, message: 'Student not found' });
    }

    // Fetch student summary (from view)
    const summaryRows = await studentsModel.getStudentPaymentSummary(studentId);
    const summary = summaryRows[0];
    console.log('Payment summary: ', summary);

    // Determine next installment
    const installmentNo = summary.installments_done + 1;
    if (installmentNo > 3) throw new Error("All installments completed");

    // Get the students school details
    const schoolDetails = await studentsModel.studentSchoolDetails(studentId);
    if (!schoolDetails.length) throw new Error("School details not found");
    const school = schoolDetails[0];
    console.log('School details: ', school);

    let minAmount;
    if (installmentNo === 1) minAmount = school.first_min;
    else if (installmentNo === 2) minAmount = school.second_min;
    else minAmount = school.third_min;

    // Validate amount
    if (amount < minAmount && amount !== Number(summary.remaining_balance)) {
      console.log('Amount is less than minimum');
      return res.status(400).json({ success: false, message: `Amount is less than minimum for ${installmentNo} installment` });
    }

    if (amount > summary.remaining_balance) {
      console.log('Amount is more than balance');
      return res.status(400).json({ success: false, message: 'Amount exceeds remaining balance' });
    }

    // Update the fee_paid column in the students table
    // await studentsModel.updateFeePaidColumn(amount, feeBalance, studentId);

    return res.status(200).json({ success: true, amountToPay: amount, message: 'Payment initiated, proceed to pay' });
  } catch (error) {
    console.log('Error processing payment: ', error);
    return res.status(500).json({ success: false, message: 'Error processing payment' });
  }
}

// Callback route for the IT payment gateway
const IT_payment_callback = async (req, res) => {
  const { paymentStatus, transactionId, matricNo, school, amountPaid } = req.body;

  // Simulate "payment gateway" success/failure
  const paymentSuccess = Math.random() > 0.2; // 80% chance success

  if (!paymentSuccess) {
    return res.status(400).json({ success: false, message: 'Payment failed' });
  }

  const connection = await pool.getConnection();
  let studentId;
  let summary;

  try {
    await connection.beginTransaction();

    // Get the student by matric number
    const student = await studentsModel.getStudentByMatricNo(matricNo, connection);
    if (!student.length) throw new Error('Student not found');
    studentId = student[0].student_id;

    // Get payment summary from the view
    const paymentSummary = await studentsModel.getStudentPaymentSummary(studentId, connection);
    if (!paymentSummary.length) throw new Error('Payment summary not found');
    summary = paymentSummary[0];

    // Insert payment record
    await studentsModel.insertStudentPaymentRecord(
      studentId,
      amountPaid,
      summary.installments_done + 1,
      'success',
      connection
    );

    // Get updated student payment summary
    // Get payment summary from the view
    const updatedPaymentSummary = await studentsModel.getStudentPaymentSummary(studentId, connection);
    console.log('Updated: ', updatedPaymentSummary);


    // Calculate and update payment status correctly
    const newStatus = Number(updatedPaymentSummary[0].remaining_balance) < 1 ? 'completed' : 'pending';
    console.log(updatedPaymentSummary[0].remaining_balance, newStatus);

    await studentsModel.updateStudentPaymentStatus(newStatus, studentId, connection);

    // Commit the transaction
    await connection.commit();

    console.log('Payment transaction committed');
    return res.status(200).json({ success: true, message: 'Payment successful' });
  } catch (error) {
    console.error('Error processing payment:', error);

    // Rollback first
    await connection.rollback();

    // Log failed payment
    try {
      if (studentId && summary) {
        await studentsModel.insertStudentPaymentRecord(
          studentId,
          amountPaid,
          summary.installments_done + 1,
          "failed",
          connection
        );
      }
    } catch (insertErr) {
      console.error("Failed to log failed payment:", insertErr.message);
    }

    return res.status(500).json({ success: false, message: 'Error processing payment' });
  } finally {
    // Release connection
    connection.release();
  }
};

const initiate_opay_payment_post = async (req, res) => {
  axios.post(
    'https://qa.interswitchng.com/collections/api/v1/opay/initialize',
    {
      merchantCode: process.env.INTERSWITCH_MERCHANT_CODE,
      payableCode: process.env.PAYMENT_ITEM_ID,
      amount: 10000,
      transactionReference: "my-every-own-unique-reference"
    },
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error.response ? error.response.data : error.message);
    });
};

module.exports = {
  simulate_payment_post,
  initiate_opay_payment_post,
  initiate_it_payment_post,
  IT_payment_callback
};









// This route processes the payment (full or partial)
// router.post('/pay-course', async (req, res) => {
//     const { matric_no, course_id, amount } = req.body;

//     // 1. Verify the student exists
//     const student = await getStudentDetails(matric_no);
//     if (!student) return res.status(404).json({ message: "Student not found" });

//     // 2. Verify the course exists
//     const course = await getCourseDetails(course_id);
//     if (!course) return res.status(404).json({ message: "Course not found" });

//     // 3. Check if there is a balance to pay
//     const feeBalance = student.fee_balance || course.course_price;

//     if (amount <= 0 || amount > feeBalance) {
//         return res.status(400).json({ message: "Invalid payment amount" });
//     }

//     // 4. Proceed with the payment (integration with payment gateway)
//     const paymentLink = await initiatePayment(amount, student, course);

//     res.json({ paymentLink, fee_balance: feeBalance - amount });
// });


// This route processes the callback from the payment gateway
// router.post('/payment-callback', async (req, res) => {
//   const { payment_status, transaction_id, matric_no, course_id, amount_paid } = req.body;

//   if (payment_status === 'success') {
//     // 1. Get the student and course info
//     const student = await getStudentDetails(matric_no);
//     const course = await getCourseDetails(course_id);

//     // 2. Update the student's fee records
//     student.fee_paid += amount_paid;
//     student.fee_balance -= amount_paid;

//     // 3. If the fee balance is 0, mark the course as fully paid
//     if (student.fee_balance === 0) {
//       student.payment_status = 'paid'; // Mark course as fully paid
//     }

//     await updateStudent(student);

//     // 4. Optionally, save the payment to a history table
//     const paymentRecord = {
//       matric_no: student.matric_no,
//       course_id: course.course_id,
//       amount: amount_paid,
//       transaction_id,
//       payment_status: 'success'
//     };

//     await savePayment(paymentRecord);

//     res.status(200).json({ message: 'Payment successful' });
//   } else {
//     res.status(400).json({ message: 'Payment failed' });
//   }
// });
