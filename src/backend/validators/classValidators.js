// Function to validate clas date
const validateDate = (date) => {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(date)) {
    return false;
  }
  return true;
}

// Function to validate week number
const validateWeekNumber = (weekNumber) => {
  const weekNumberRegex = /^\d{1,2}$/;
  if (!weekNumberRegex.test(weekNumber)) {
    return false;
  }
  return true;
}

// Function to validate day number
const validateDayNumber = (dayNumber) => {
  const dayNumberRegex = /^\d{1,2}$/;
  if (!dayNumberRegex.test(dayNumber)) {
    return false;
  }
  return true;
}

// Function to validate title
const validateTitle = (title) => {
  if (title.length > 100) {
    return false;
  }
  return true;
}

// Function to validate subtopics
const validateSubtopics = (subtopics) => {
  if (subtopics.length > 100) {
    return false;
  }
  return true;
}

// Function to validate description
const validateDescription = (description) => {
  if (description.length > 1000) {
    return false;
  }
  return true;
}

// Function to validate code snippets
const validateCodeSnippets = (codeSnippets) => {
  if (codeSnippets.length > 1000) {
    return false;
  }
  return true;
}

// Function to validate diagram url
const validateDiagramUrl = (diagramUrl) => {
  if (diagramUrl.length > 1000) {
    return false;
  }
  return true;
}

module.exports = { validateDate, validateWeekNumber, validateDayNumber, validateTitle, validateSubtopics, validateDescription, validateCodeSnippets, validateDiagramUrl };