-- ========================================
-- Assigned Projects Table
-- Projects assigned by instructors to batches/courses
-- ========================================

CREATE TABLE IF NOT EXISTS assigned_projects (
    project_id VARCHAR(36) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    
    -- Assignment target
    batch_id VARCHAR(36) NOT NULL,
    course_id INT NOT NULL,
    instructor_id INT NOT NULL,
    
    -- Timeline
    due_date DATE NOT NULL,
    assigned_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    -- Status: 'active', 'completed', 'cancelled'
    status ENUM('active', 'completed', 'cancelled') DEFAULT 'active',
    
    -- Metadata
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    -- Foreign key constraints
    FOREIGN KEY (batch_id) REFERENCES batches(batch_id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
    FOREIGN KEY (instructor_id) REFERENCES staffs(id) ON DELETE CASCADE,
    
    -- Indexes for common queries
    INDEX idx_batch_course (batch_id, course_id),
    INDEX idx_due_date (due_date),
    INDEX idx_status (status)
);


-- ========================================
-- Project Submissions Table
-- Student submissions for assigned projects
-- ========================================

CREATE TABLE IF NOT EXISTS project_submissions (
    submission_id VARCHAR(36) PRIMARY KEY,
    project_id VARCHAR(36) NOT NULL,
    student_id VARCHAR(36) NOT NULL,
    
    -- Submission content
    solution_approach TEXT NOT NULL,
    github_link VARCHAR(500) NOT NULL,
    
    -- Screenshots (stored as JSON array of file paths)
    screenshots JSON NOT NULL,
    
    -- Grading
    grade VARCHAR(5) DEFAULT NULL,
    feedback TEXT DEFAULT NULL,
    graded_by INT DEFAULT NULL,
    graded_at DATETIME DEFAULT NULL,
    
    -- Status: 'submitted', 'in_review', 'graded', 'returned'
    status ENUM('submitted', 'in_review', 'graded', 'returned') DEFAULT 'submitted',
    
    -- Timestamps
    submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    -- Foreign key constraints
    FOREIGN KEY (project_id) REFERENCES assigned_projects(project_id) ON DELETE CASCADE,
    FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE CASCADE,
    FOREIGN KEY (graded_by) REFERENCES staffs(id) ON DELETE SET NULL,
    
    -- Unique constraint: one submission per student per project
    UNIQUE KEY unique_student_project (student_id, project_id),
    
    -- Indexes
    INDEX idx_project_id (project_id),
    INDEX idx_student_id (student_id),
    INDEX idx_status (status)
);


-- ========================================
-- View: Student Projects Overview
-- Easy query for student dashboard
-- ========================================

CREATE OR REPLACE VIEW student_projects_view AS
SELECT 
    ap.project_id,
    ap.title AS project_title,
    ap.description AS project_description,
    ap.due_date,
    ap.assigned_date,
    ap.status AS project_status,
    ap.batch_id,
    ap.course_id,
    c.title AS course_title,
    s.id AS instructor_id,
    CONCAT(s.first_name, ' ', s.last_name) AS instructor_name,
    ps.submission_id,
    ps.student_id,
    ps.status AS submission_status,
    ps.grade,
    ps.feedback,
    ps.submitted_at,
    CASE 
        WHEN ps.submission_id IS NOT NULL THEN 'submitted'
        WHEN ap.due_date < CURDATE() THEN 'overdue'
        WHEN ap.due_date = CURDATE() THEN 'due_today'
        ELSE 'pending'
    END AS student_project_status,
    DATEDIFF(ap.due_date, CURDATE()) AS days_until_due
FROM assigned_projects ap
INNER JOIN courses c ON ap.course_id = c.id
INNER JOIN staffs s ON ap.instructor_id = s.id
LEFT JOIN project_submissions ps ON ap.project_id = ps.project_id;


-- ========================================
-- Demo Data: Assigned Projects
-- ========================================

INSERT INTO assigned_projects (project_id, title, description, batch_id, course_id, instructor_id, due_date, assigned_date, status) VALUES

-- Project 1: E-Commerce Dashboard (Due soon)
(
    'a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d',
    'E-Commerce Dashboard',
    'Build a responsive admin dashboard with charts, tables, and user management. Implement a complex navigation system with collapsible sidebar, real-time data visualization with Chart.js, create CRUD operations interface for products and users, and ensure full mobile responsiveness.',
    '3b01c461-c662-11f0-8ff1-f8e4e3fe8908',
    4,
    4,
    '2026-02-12',
    '2026-02-01 09:00:00',
    'active'
),

-- Project 2: Blog Platform (Due in a week)
(
    'b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e',
    'Blog Platform',
    'Create a full-stack blog application with user authentication, CRUD operations for posts, comments system, and markdown support. Include features like categories, tags, search functionality, and a rich text editor.',
    '3b01c461-c662-11f0-8ff1-f8e4e3fe8908',
    4,
    4,
    '2026-02-16',
    '2026-02-02 10:30:00',
    'active'
),

-- Project 3: Social Media Clone (Due in 2 weeks)
(
    'c3d4e5f6-a7b8-4c9d-0e1f-2a3b4c5d6e7f',
    'Social Media Clone',
    'Build a mini social platform with posts, likes, follows, and real-time notifications. Implement user profiles, image uploads, feed algorithms, and a messaging system between users.',
    '3b01c461-c662-11f0-8ff1-f8e4e3fe8908',
    4,
    4,
    '2026-02-23',
    '2026-02-03 14:00:00',
    'active'
),

-- Project 4: Portfolio Website (Completed)
(
    'd4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8a',
    'Portfolio Website',
    'Design and develop a personal portfolio website showcasing your skills, projects, and contact information. Use modern CSS techniques, animations, and ensure the site is fully responsive and accessible.',
    '3b01c461-c662-11f0-8ff1-f8e4e3fe8908',
    4,
    4,
    '2026-01-25',
    '2026-01-10 08:00:00',
    'completed'
),

-- Project 5: Weather App (Due in 3 weeks)
(
    'e5f6a7b8-c9d0-4e1f-2a3b-4c5d6e7f8a9b',
    'Weather Application',
    'Create a weather application that fetches data from a public API. Display current weather, 5-day forecast, and allow users to search for different locations. Include geolocation support and responsive design.',
    '3b01c461-c662-11f0-8ff1-f8e4e3fe8908',
    4,
    4,
    '2026-03-01',
    '2026-02-05 11:00:00',
    'active'
),

-- Project 6: Task Management System (Due in 4 weeks)
(
    'f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c',
    'Task Management System',
    'Build a Kanban-style task management application with drag-and-drop functionality. Include features like task categories, due dates, priority levels, user assignments, and progress tracking with visual indicators.',
    '3b01c461-c662-11f0-8ff1-f8e4e3fe8908',
    4,
    4,
    '2026-03-08',
    '2026-02-06 09:30:00',
    'active'
),

-- ========================================
-- Data Analytics Projects (course_id = 1)
-- ========================================

-- Project 7: Sales Data Analysis
(
    '17a8b9c0-d1e2-4f3a-4b5c-6d7e8f9a0b1c',
    'Sales Data Analysis Dashboard',
    'Analyze a provided sales dataset using Python/Pandas. Create visualizations showing sales trends, top products, regional performance, and seasonal patterns. Build an interactive dashboard using Plotly or Matplotlib to present your findings.',
    '3b01c461-c662-11f0-8ff1-f8e4e3fe8908',
    1,
    4,
    '2026-02-18',
    '2026-02-04 09:00:00',
    'active'
),

-- Project 8: Customer Segmentation
(
    '28b9c0d1-e2f3-4a4b-5c6d-7e8f9a0b1c2d',
    'Customer Segmentation Analysis',
    'Perform customer segmentation using clustering algorithms (K-Means, Hierarchical). Analyze customer behavior patterns, create customer personas, and provide actionable business recommendations based on your analysis.',
    '3b01c461-c662-11f0-8ff1-f8e4e3fe8908',
    1,
    4,
    '2026-02-25',
    '2026-02-05 10:00:00',
    'active'
),

-- Project 9: Predictive Analytics Report
(
    '39c0d1e2-f3a4-4b5c-6d7e-8f9a0b1c2d3e',
    'Predictive Analytics Report',
    'Build a predictive model to forecast future trends from historical data. Use regression or time series analysis techniques. Document your methodology, model evaluation metrics, and present predictions with confidence intervals.',
    '3b01c461-c662-11f0-8ff1-f8e4e3fe8908',
    1,
    4,
    '2026-03-05',
    '2026-02-07 14:00:00',
    'active'
);
