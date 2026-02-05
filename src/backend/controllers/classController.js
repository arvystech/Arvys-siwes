// controllers/classController.js
const { pool } = require('../config/db');

const dayjs = require('dayjs');

const classesModel = require('../models/classModel');

// Class validators
const {
  validateDate,
  validateWeekNumber,
  validateDayNumber,
  validateTitle,
  validateSubtopics,
  validateDescription,
  validateCodeSnippets,
  validateDiagramUrl
} = require('../validators/classValidators');

// Create class
const create_class_post = async (req, res) => {
  try {
    const { batchId, instructorId, date, weekNumber, dayNumber, title, subtopics, description, codeSnippets, diagramUrl } = req.body;

    // Make sure necessary data is provided
    if (!batchId || !instructorId || !date || !weekNumber || !dayNumber || !title || !description) {
      console.log('Please provide all details');
      return res.status(400).json({ success: false, message: 'Please provide all details' });
    }

    // Check if batch exist
    const checkBatch = await classesModel.getBatchByBatchId(batchId);
    if (!checkBatch.length) {
      console.log('Batch does not exist');
      return res.status(400).json({ success: false, message: 'Batch does not exist' });
    }
    const foundBatch = checkBatch[0];

    // Check if batch is active
    if (foundBatch.status !== 'active') {
      console.log('Batch is not active');
      return res.status(400).json({ success: false, message: 'Batch is not active' });
    }

    // Check if instructor exisst
    const checkInstructor = await classesModel.getInstructorByInstructorId(instructorId);
    if (!checkInstructor.length) {
      console.log('Instructor does not exist');
      return res.status(400).json({ success: false, message: 'Instructor does not exist' });
    }
    const foundInstructor = checkInstructor[0];

    // Check if date is valid
    const dateRegex = validateDate(date);
    if (!dateRegex) {
      console.log('Date is not valid');
      return res.status(400).json({ success: false, message: 'Date is not valid' });
    }

    // Check if date is in the future
    const dateInFuture = !dayjs(date).isSame(dayjs(), 'day') && !dayjs(date).isAfter(dayjs(), 'day')
    if (dateInFuture) {
      console.log('Date is in the past');
      return res.status(400).json({ success: false, message: 'Date is in the past' });
    }

    // Check if week number is valid
    const weekNumberRegex = validateWeekNumber(weekNumber);
    if (!weekNumberRegex) {
      console.log('Week number is not valid');
      return res.status(400).json({ success: false, message: 'Week number is not valid' });
    }

    // Check if day number is valid
    const dayNumberRegex = validateDayNumber(dayNumber);
    if (!dayNumberRegex) {
      console.log('Day number is not valid');
      return res.status(400).json({ success: false, message: 'Day number is not valid' });
    }

    // Check if title is valid
    if (!validateTitle(title)) {
      console.log('Title is too long');
      return res.status(400).json({ success: false, message: 'Title is too long' });
    }

    // Check if subtopics is valid
    if (!validateSubtopics(subtopics)) {
      console.log('Subtopics is too long');
      return res.status(400).json({ success: false, message: 'Subtopics is too long' });
    }

    // Check if suptopics is an array
    if (subtopics && !Array.isArray(subtopics)) {
      console.log('Subtopics is not an array');
      return res.status(400).json({ success: false, message: 'Subtopics is not an array' });
    }

    // Check if description is valid
    if (!validateDescription(description)) {
      console.log('Description is too long');
      return res.status(400).json({ success: false, message: 'Description is too long' });
    }

    // Check if code snippets is valid
    if (codeSnippets && !validateCodeSnippets(codeSnippets)) {
      console.log('Code snippets is too long');
      return res.status(400).json({ success: false, message: 'Code snippets is too long' });
    }

    // Check if diagram url is valid
    if (diagramUrl && !validateDiagramUrl(diagramUrl)) {
      console.log('Diagram url is too long');
      return res.status(400).json({ success: false, message: 'Diagram url is too long' });
    }

    // Create class
    const createClass = await classesModel.createClass(batchId, instructorId, date, weekNumber, dayNumber, title, subtopics, description, JSON.stringify(codeSnippets), diagramUrl);
    console.log(createClass);

    console.log('Successfully created class');
    return res.status(201).json({ success: true, message: 'Successfully created class' });

  } catch (error) {
    console.log('Error creating class: ', error);
    return res.status(500).json({ success: false, message: "Error creating class" });
  }
}

module.exports = { create_class_post };