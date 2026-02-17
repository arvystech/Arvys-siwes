-- ========================================
-- Learning Resources Table
-- Stores PDFs, YouTube links, and external URLs for class sessions
-- ========================================

CREATE TABLE IF NOT EXISTS learning_resources (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    
    -- Resource Type
    type ENUM('PDF', 'YOUTUBE', 'LINK') NOT NULL,
    
    -- URL or File Path
    url VARCHAR(500) NOT NULL,
    
    -- Relationship: Linked to specific class session
    class_id VARCHAR(36) NOT NULL,
    
    -- Metadata
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    -- Foreign Key Constraint
    FOREIGN KEY (class_id) REFERENCES classes(class_id) ON DELETE CASCADE,
    
    -- Index for faster lookup by class
    INDEX idx_class_id (class_id)
);

-- ========================================
-- Data Analysis Resources Seed Data
-- IMPORTANT: Replace 'REPLACE_WITH_VALID_CLASS_ID' with actual UUIDs from your classes table
-- ========================================

INSERT INTO learning_resources (title, type, url, description, class_id) VALUES
(
    'Introduction to Pandas', 
    'PDF', 
    '/assets/uploads/resources/pandas-intro.pdf', 
    'Comprehensive guide to data manipulation with Pandas.',
    'REPLACE_WITH_VALID_CLASS_ID'
),
(
    'Mastering Matplotlib & Seaborn', 
    'YOUTUBE', 
    'https://www.youtube.com/watch?v=hePWh33d3II', 
    'Learn to create stunning visualizations.',
    'REPLACE_WITH_VALID_CLASS_ID'
),
(
    'Advanced SQL for Data Scientists', 
    'LINK', 
    'https://mode.com/sql-tutorial/intro-to-intermediate-sql/', 
    'Essential SQL patterns for data analysis.',
    'REPLACE_WITH_VALID_CLASS_ID'
);
