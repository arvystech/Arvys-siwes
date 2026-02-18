/**
 * StudentIT - More Page & Subpages Content
 * iOS Settings-Inspired Navigation System
 */

document.addEventListener('DOMContentLoaded', () => {
    // Check for saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Populate More Page
    const morePage = document.getElementById('more');
    if (morePage) {
        morePage.innerHTML = `
            <div class="more-page-container">
                <!-- Student Profile Card -->
                <div class="profile-card" data-subpage="profile">
                    <div class="profile-avatar">JD</div>
                    <div class="profile-info">
                        <span class="profile-name">John Doe</span>
                        <span class="profile-institution">Federal University of Technology</span>
                        <span class="profile-duration">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/>
                                <polyline points="12,6 12,12 16,14"/>
                            </svg>
                            Week 8 of 12
                        </span>
                    </div>
                    <svg class="profile-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9,18 15,12 9,6"/>
                    </svg>
                </div>

                <!-- Training Section -->
                <section class="settings-section">
                    <h3 class="settings-section-title">Training</h3>
                    <div class="settings-group">
                        <div class="settings-row" data-subpage="schedule">
                            <div class="settings-row-icon schedule-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                    <line x1="16" y1="2" x2="16" y2="6"/>
                                    <line x1="8" y1="2" x2="8" y2="6"/>
                                    <line x1="3" y1="10" x2="21" y2="10"/>
                                </svg>
                            </div>
                            <div class="settings-row-content">
                                <span class="settings-row-title">Class Schedule</span>
                            </div>
                            <svg class="settings-row-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="9,18 15,12 9,6"/>
                            </svg>
                        </div>
                        <div class="settings-row" data-subpage="learning-resources">
                            <div class="settings-row-icon resources-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
                                    <path d="M12 6v14"/>
                                    <path d="M16 6v14"/>
                                </svg>
                            </div>
                            <div class="settings-row-content">
                                <span class="settings-row-title">Learning Resources</span>
                            </div>
                            <svg class="settings-row-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="9,18 15,12 9,6"/>
                            </svg>
                        </div>
                        <div class="settings-row" data-subpage="progress-overview">
                            <div class="settings-row-icon progress-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="12" y1="20" x2="12" y2="10"/>
                                    <line x1="18" y1="20" x2="18" y2="4"/>
                                    <line x1="6" y1="20" x2="6" y2="16"/>
                                </svg>
                            </div>
                            <div class="settings-row-content">
                                <span class="settings-row-title">Progress Overview</span>
                            </div>
                            <svg class="settings-row-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="9,18 15,12 9,6"/>
                            </svg>
                        </div>
                    </div>
                </section>

                <!-- Communication Section -->
                <section class="settings-section">
                    <h3 class="settings-section-title">Communication</h3>
                    <div class="settings-group">
                        <div class="settings-row" data-subpage="announcements">
                            <div class="settings-row-icon announcements-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="m3 11 18-5v12L3 13v-2z"/>
                                    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
                                </svg>
                            </div>
                            <div class="settings-row-content">
                                <span class="settings-row-title">Announcements</span>
                            </div>
                            <span class="settings-row-badge">3</span>
                            <svg class="settings-row-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="9,18 15,12 9,6"/>
                            </svg>
                        </div>
                        <div class="settings-row" data-subpage="supervisor">
                            <div class="settings-row-icon supervisor-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </svg>
                            </div>
                            <div class="settings-row-content">
                                <span class="settings-row-title">Supervisor / Mentor</span>
                            </div>
                            <svg class="settings-row-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="9,18 15,12 9,6"/>
                            </svg>
                        </div>
                    </div>
                </section>

                <!-- Account Section -->
                <section class="settings-section">
                    <h3 class="settings-section-title">Account</h3>
                    <div class="settings-group">
                        <div class="settings-row" data-subpage="profile">
                            <div class="settings-row-icon profile-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </svg>
                            </div>
                            <div class="settings-row-content">
                                <span class="settings-row-title">Profile</span>
                            </div>
                            <svg class="settings-row-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="9,18 15,12 9,6"/>
                            </svg>
                        </div>
                        <div class="settings-row" data-subpage="settings">
                            <div class="settings-row-icon settings-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                                    <circle cx="12" cy="12" r="3"/>
                                </svg>
                            </div>
                            <div class="settings-row-content">
                                <span class="settings-row-title">Settings</span>
                            </div>
                            <svg class="settings-row-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="9,18 15,12 9,6"/>
                            </svg>
                        </div>
                    </div>
                </section>

                <!-- Support Section -->
                <section class="settings-section">
                    <h3 class="settings-section-title">Support</h3>
                    <div class="settings-group">
                        <div class="settings-row" data-subpage="help">
                            <div class="settings-row-icon help-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                                </svg>
                            </div>
                            <div class="settings-row-content">
                                <span class="settings-row-title">Help & Support</span>
                            </div>
                            <svg class="settings-row-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="9,18 15,12 9,6"/>
                            </svg>
                        </div>
                        <div class="settings-row" data-subpage="about">
                            <div class="settings-row-icon about-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <line x1="12" y1="16" x2="12" y2="12"/>
                                    <line x1="12" y1="8" x2="12.01" y2="8"/>
                                </svg>
                            </div>
                            <div class="settings-row-content">
                                <span class="settings-row-title">About the Training Center</span>
                            </div>
                            <svg class="settings-row-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="9,18 15,12 9,6"/>
                            </svg>
                        </div>
                    </div>
                </section>
                <!-- Logout Section -->
                <section class="settings-section">
                    <div class="settings-group">
                        <div class="settings-row logout-row" onclick="logout()" style="cursor: pointer;">
                            <div class="settings-row-icon logout-icon" style="background: #fee2e2; color: #ef4444;">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
                                </svg>
                            </div>
                            <div class="settings-row-content">
                                <span class="settings-row-title" style="color: #ef4444;">Logout</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `;
        initMorePage();
        loadStudentProfile();
    }

    // Populate Class Schedule Page
    const schedulePage = document.getElementById('schedule');
    if (schedulePage) {
        schedulePage.innerHTML = `
            <div class="subpage-content">
                <div class="subpage-header">
                    <h1 class="subpage-title">Class Schedule</h1>
                </div>

                <div class="schedule-day-header">Today — Tuesday</div>
                
                <div class="schedule-item current">
                    <div class="schedule-time">
                        <span class="schedule-time-start">09:00</span>
                        <span class="schedule-time-end">11:00</span>
                    </div>
                    <div class="schedule-divider"></div>
                    <div class="schedule-details">
                        <div class="schedule-title">Web Development Fundamentals</div>
                        <div class="schedule-location">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                            Lab Room A
                        </div>
                    </div>
                </div>

                <div class="schedule-item">
                    <div class="schedule-time">
                        <span class="schedule-time-start">14:00</span>
                        <span class="schedule-time-end">16:00</span>
                    </div>
                    <div class="schedule-divider"></div>
                    <div class="schedule-details">
                        <div class="schedule-title">Database Management</div>
                        <div class="schedule-location">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                            Training Center B
                        </div>
                    </div>
                </div>

                <div class="schedule-day-header">Wednesday</div>
                
                <div class="schedule-item">
                    <div class="schedule-time">
                        <span class="schedule-time-start">09:00</span>
                        <span class="schedule-time-end">12:00</span>
                    </div>
                    <div class="schedule-divider"></div>
                    <div class="schedule-details">
                        <div class="schedule-title">UI/UX Design Principles</div>
                        <div class="schedule-location">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                            Design Studio
                        </div>
                    </div>
                </div>

                <div class="schedule-item">
                    <div class="schedule-time">
                        <span class="schedule-time-start">14:00</span>
                        <span class="schedule-time-end">17:00</span>
                    </div>
                    <div class="schedule-divider"></div>
                    <div class="schedule-details">
                        <div class="schedule-title">Project Workshop</div>
                        <div class="schedule-location">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                            Main Hall
                        </div>
                    </div>
                </div>

                <div class="schedule-day-header">Thursday</div>
                
                <div class="schedule-item">
                    <div class="schedule-time">
                        <span class="schedule-time-start">10:00</span>
                        <span class="schedule-time-end">12:00</span>
                    </div>
                    <div class="schedule-divider"></div>
                    <div class="schedule-details">
                        <div class="schedule-title">Backend Development</div>
                        <div class="schedule-location">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                            Lab Room A
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Populate Learning Resources Page
    const learningResourcesPage = document.getElementById('learning-resources');
    if (learningResourcesPage) {
        learningResourcesPage.innerHTML = `
            <div class="subpage-content">
                <div class="subpage-header">
                    <h1 class="subpage-title">Learning Resources</h1>
                </div>

                <div id="resources-container">
                    <div style="text-align: center; padding: 40px 20px; color: var(--text-secondary);">
                        <div class="loader-mini" style="margin: 0 auto 16px;"></div>
                        <p>Loading resources...</p>
                    </div>
                </div>
            </div>
        `;

        // Load resources dynamically
        loadLearningResources();
    }

    // Populate Progress Overview Page
    const progressPage = document.getElementById('progress-overview');
    if (progressPage) {
        progressPage.innerHTML = `
            <div class="subpage-content">
                <div class="subpage-header">
                    <h1 class="subpage-title">Progress Overview</h1>
                </div>

                <div class="progress-overview-card">
                    <div class="progress-overview-label">Overall Completion</div>
                    <div class="progress-overview-value">68%</div>
                    <div class="progress-overview-unit">12 of 18 modules completed</div>
                </div>

                <section class="section">
                    <div class="section-header">
                        <h2 class="section-title">Modules</h2>
                    </div>

                    <div class="progress-modules-list">
                        <div class="progress-module-item">
                            <div class="progress-module-header">
                                <span class="progress-module-name">HTML & CSS Basics</span>
                                <span class="progress-module-percent">100%</span>
                            </div>
                            <div class="progress-module-bar">
                                <div class="progress-module-fill complete" style="width: 100%"></div>
                            </div>
                        </div>

                        <div class="progress-module-item">
                            <div class="progress-module-header">
                                <span class="progress-module-name">JavaScript Fundamentals</span>
                                <span class="progress-module-percent">100%</span>
                            </div>
                            <div class="progress-module-bar">
                                <div class="progress-module-fill complete" style="width: 100%"></div>
                            </div>
                        </div>

                        <div class="progress-module-item">
                            <div class="progress-module-header">
                                <span class="progress-module-name">Responsive Design</span>
                                <span class="progress-module-percent">100%</span>
                            </div>
                            <div class="progress-module-bar">
                                <div class="progress-module-fill complete" style="width: 100%"></div>
                            </div>
                        </div>

                        <div class="progress-module-item">
                            <div class="progress-module-header">
                                <span class="progress-module-name">Version Control (Git)</span>
                                <span class="progress-module-percent">85%</span>
                            </div>
                            <div class="progress-module-bar">
                                <div class="progress-module-fill" style="width: 85%"></div>
                            </div>
                        </div>

                        <div class="progress-module-item">
                            <div class="progress-module-header">
                                <span class="progress-module-name">React Basics</span>
                                <span class="progress-module-percent">60%</span>
                            </div>
                            <div class="progress-module-bar">
                                <div class="progress-module-fill" style="width: 60%"></div>
                            </div>
                        </div>

                        <div class="progress-module-item">
                            <div class="progress-module-header">
                                <span class="progress-module-name">Backend with Node.js</span>
                                <span class="progress-module-percent">25%</span>
                            </div>
                            <div class="progress-module-bar">
                                <div class="progress-module-fill" style="width: 25%"></div>
                            </div>
                        </div>

                        <div class="progress-module-item">
                            <div class="progress-module-header">
                                <span class="progress-module-name">Database Management</span>
                                <span class="progress-module-percent">0%</span>
                            </div>
                            <div class="progress-module-bar">
                                <div class="progress-module-fill" style="width: 0%"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `;
    }

    // Populate Announcements Page
    const announcementsPage = document.getElementById('announcements');
    if (announcementsPage) {
        announcementsPage.innerHTML = `
            <div class="subpage-content">
                <div class="subpage-header">
                    <h1 class="subpage-title">Announcements</h1>
                </div>

                <div class="announcement-item unread">
                    <span class="announcement-date">Today, 10:30 AM</span>
                    <h3 class="announcement-title">Schedule Update: Week 9</h3>
                    <p class="announcement-preview">There will be a change in the class schedule for next week. The JavaScript Advanced session has been moved to Thursday afternoon...</p>
                    <span class="announcement-category">Schedule</span>
                </div>

                <div class="announcement-item unread">
                    <span class="announcement-date">Yesterday, 4:00 PM</span>
                    <h3 class="announcement-title">Project Submission Reminder</h3>
                    <p class="announcement-preview">This is a friendly reminder that the E-Commerce Dashboard project is due in 5 days. Make sure to push your final code to GitHub...</p>
                    <span class="announcement-category">Project</span>
                </div>

                <div class="announcement-item unread">
                    <span class="announcement-date">Jan 5, 2026</span>
                    <h3 class="announcement-title">New Learning Resources Available</h3>
                    <p class="announcement-preview">We've added new video tutorials on React Hooks and State Management. Check the Learning Resources section...</p>
                    <span class="announcement-category">Resources</span>
                </div>

                <div class="announcement-item">
                    <span class="announcement-date">Jan 3, 2026</span>
                    <h3 class="announcement-title">Welcome to Week 8</h3>
                    <p class="announcement-preview">Welcome back! This week we'll be focusing on advanced React patterns and building reusable components...</p>
                    <span class="announcement-category">General</span>
                </div>

                <div class="announcement-item">
                    <span class="announcement-date">Dec 28, 2025</span>
                    <h3 class="announcement-title">Holiday Schedule</h3>
                    <p class="announcement-preview">The training center will be closed from December 31st to January 2nd for the New Year holiday...</p>
            </div>
        `;
        initAnnouncements();
    }

    // Populate Supervisor Page
    const supervisorPage = document.getElementById('supervisor');
    if (supervisorPage) {
        supervisorPage.innerHTML = `
            <div class="subpage-content">
                <div class="subpage-header">
                    <h1 class="subpage-title">Supervisor</h1>
                </div>

                <div class="mentor-card">
                    <div class="mentor-avatar">DO</div>
                    <h2 class="mentor-name">Dr. Oluwaseun Adeyemi</h2>
                    <p class="mentor-role">Senior Training Supervisor</p>
                    <div class="mentor-contact-btns">
                        <button class="mentor-contact-btn primary">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            Call
                        </button>
                        <button class="mentor-contact-btn secondary">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                <polyline points="22,6 12,13 2,6"/>
                            </svg>
                            Email
                        </button>
                    </div>
                </div>

                <div class="mentor-info-section">
                    <div class="mentor-info-row">
                        <span class="mentor-info-label">Department</span>
                        <span class="mentor-info-value">Web Development</span>
                    </div>
                    <div class="mentor-info-row">
                        <span class="mentor-info-label">Office</span>
                        <span class="mentor-info-value">Room 204, Admin Block</span>
                    </div>
                    <div class="mentor-info-row">
                        <span class="mentor-info-label">Office Hours</span>
                        <span class="mentor-info-value">Mon-Fri, 9AM - 4PM</span>
                    </div>
                    <div class="mentor-info-row">
                        <span class="mentor-info-label">Email</span>
                        <span class="mentor-info-value">o.adeyemi@itc.edu.ng</span>
                    </div>
                    <div class="mentor-info-row">
                        <span class="mentor-info-label">Phone</span>
                        <span class="mentor-info-value">+234 801 234 5678</span>
                    </div>
                </div>
            </div>
        `;
    }

    // Populate Profile Page
    const profilePage = document.getElementById('profile');
    if (profilePage) {
        profilePage.innerHTML = `
            <div class="subpage-content">
                <div class="subpage-header">
                    <h1 class="subpage-title">Profile</h1>
                </div>

                <div class="profile-header-card">
                    <div class="profile-header-avatar">JD</div>
                    <h2 class="profile-header-name">John Doe</h2>
                    <p class="profile-header-id">STU/2025/0142</p>
                </div>



                <section class="section">
                    <div class="section-header">
                        <h2 class="section-title">Personal Information</h2>
                    </div>
                    <div class="profile-details-section">
                        <div class="profile-detail-row">
                            <span class="profile-detail-label">Full Name</span>
                            <span class="profile-detail-value" id="profile-full-name">Loading...</span>
                        </div>
                        <div class="profile-detail-row">
                            <span class="profile-detail-label">Email</span>
                            <span class="profile-detail-value" id="profile-email">Loading...</span>
                        </div>
                        <div class="profile-detail-row">
                            <span class="profile-detail-label">Phone</span>
                            <span class="profile-detail-value" id="profile-phone">Loading...</span>
                        </div>
                        <div class="profile-detail-row">
                            <span class="profile-detail-label">Gender</span>
                            <span class="profile-detail-value" id="profile-gender">Loading...</span>
                        </div>
                        <div class="profile-detail-row">
                            <span class="profile-detail-label">Date of Birth</span>
                            <span class="profile-detail-value" id="profile-dob">Loading...</span>
                        </div>
                        <div class="profile-detail-row">
                            <span class="profile-detail-label">Location</span>
                            <span class="profile-detail-value" id="profile-location">Loading...</span>
                        </div>
                    </div>
                </section>

                <section class="section">
                    <div class="section-header">
                        <h2 class="section-title">Academic & Training</h2>
                    </div>
                    <div class="profile-details-section">
                        <div class="profile-detail-row">
                            <span class="profile-detail-label">Institution</span>
                            <span class="profile-detail-value" id="profile-institution">Loading...</span>
                        </div>
                        <div class="profile-detail-row">
                            <span class="profile-detail-label">Course</span>
                            <span class="profile-detail-value" id="profile-course">Loading...</span>
                        </div>
                        <div class="profile-detail-row">
                            <span class="profile-detail-label">Matric No</span>
                            <span class="profile-detail-value" id="profile-matric">Loading...</span>
                        </div>
                        <div class="profile-detail-row">
                            <span class="profile-detail-label">Session / Batch</span>
                            <span class="profile-detail-value" id="profile-session">Loading...</span>
                        </div>
                        <div class="profile-detail-row">
                            <span class="profile-detail-label">Payment Status</span>
                            <span class="profile-detail-value" id="profile-payment">Loading...</span>
                        </div>
                    </div>
                </section>
            </div>
        `;
    }

    // Populate Settings Page
    const settingsPage = document.getElementById('settings');
    if (settingsPage) {
        settingsPage.innerHTML = `
            <div class="subpage-content">
                <div class="subpage-header">
                    <h1 class="subpage-title">Settings</h1>
                </div>

                <section class="settings-section">
                    <h3 class="settings-section-title">Notifications</h3>
                    
                    <div class="settings-toggle-row">
                        <div class="settings-toggle-info">
                            <div class="settings-toggle-title">Push Notifications</div>
                            <div class="settings-toggle-desc">Receive alerts for important updates</div>
                        </div>
                        <div class="toggle-switch active" data-setting="push-notifications"></div>
                    </div>

                    <div class="settings-toggle-row">
                        <div class="settings-toggle-info">
                            <div class="settings-toggle-title">Email Notifications</div>
                            <div class="settings-toggle-desc">Receive weekly summary emails</div>
                        </div>
                        <div class="toggle-switch" data-setting="email-notifications"></div>
                    </div>

                    <div class="settings-toggle-row">
                        <div class="settings-toggle-info">
                            <div class="settings-toggle-title">Reminder Alerts</div>
                            <div class="settings-toggle-desc">Get reminded about deadlines</div>
                        </div>
                        <div class="toggle-switch active" data-setting="reminders"></div>
                    </div>
                </section>

                <section class="settings-section">
                    <h3 class="settings-section-title">Display</h3>
                    
                    <div class="settings-toggle-row">
                        <div class="settings-toggle-info">
                            <div class="settings-toggle-title">Dark Mode</div>
                            <div class="settings-toggle-desc">Use dark theme</div>
                        </div>
                        <div class="toggle-switch" data-setting="dark-mode"></div>
                    </div>
                </section>

                <section class="settings-section">
                    <h3 class="settings-section-title">Privacy</h3>
                    
                    <div class="settings-toggle-row">
                        <div class="settings-toggle-info">
                            <div class="settings-toggle-title">Share Progress</div>
                            <div class="settings-toggle-desc">Allow supervisor to view your progress</div>
                        </div>
                        <div class="toggle-switch active" data-setting="share-progress"></div>
                    </div>
                </section>

                <div style="margin-top: 32px; text-align: center;">
                    <button class="project-action-btn" onclick="logout()" style="background: #ef4444; width: 100%; color: white; border: none; padding: 16px; font-weight: 700;">Log Out</button>
                </div>
            </div>
        `;
        initSettings();
    }

    // Populate Help & Support Page
    const helpPage = document.getElementById('help');
    if (helpPage) {
        helpPage.innerHTML = `
            <div class="subpage-content">
                <div class="subpage-header">
                    <h1 class="subpage-title">Help & Support</h1>
                </div>

                <div class="support-search">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"/>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                    <input type="text" placeholder="Search for help...">
                </div>

                <section class="section">
                    <div class="section-header">
                        <h2 class="section-title">Frequently Asked Questions</h2>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question">
                            <span class="faq-question-text">How do I check in for attendance?</span>
                            <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="6,9 12,15 18,9"/>
                            </svg>
                        </div>
                        <div class="faq-answer">
                            Go to the Attendance page from the bottom navigation and tap the "Check In" button. Make sure you're at the training center, as location might be verified.
                        </div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question">
                            <span class="faq-question-text">How do I submit a project?</span>
                            <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="6,9 12,15 18,9"/>
                            </svg>
                        </div>
                        <div class="faq-answer">
                            Navigate to the Projects page, select your project, and tap "Submit". Make sure to push your code to GitHub first and include the repository link.
                        </div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question">
                            <span class="faq-question-text">Where can I find learning materials?</span>
                            <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="6,9 12,15 18,9"/>
                            </svg>
                        </div>
                        <div class="faq-answer">
                            All learning resources are available in the Learning Resources section under the More menu. You'll find PDFs, video tutorials, and external links there.
                        </div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question">
                            <span class="faq-question-text">How do I contact my supervisor?</span>
                            <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="6,9 12,15 18,9"/>
                            </svg>
                        </div>
                        <div class="faq-answer">
                            Visit the Supervisor section under More. You'll see your supervisor's contact details and can call or email them directly from the app.
                        </div>
                    </div>
                </section>

                <div class="support-contact-section">
                    <h3 class="support-contact-title">Still need help?</h3>
                    <p class="support-contact-text">Our support team is here to assist you</p>
                    <button class="support-contact-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                        </svg>
                        Contact Support
                    </button>
                </div>
            </div>
        `;
        initFAQ();
    }

    // Populate About Page
    const aboutPage = document.getElementById('about');
    if (aboutPage) {
        aboutPage.innerHTML = `
            <div class="subpage-content">
                <div class="subpage-header">
                    <h1 class="subpage-title">About</h1>
                </div>

                <div class="about-logo-card">
                    <div class="about-logo">IT</div>
                    <h2 class="about-app-name">StudentIT</h2>
                    <p class="about-version">Version 1.0.0</p>
                    <p class="about-description">
                        StudentIT is your modern learning companion for SIWES training. Track your progress, manage attendance, submit projects, and stay connected with your supervisors — all in one place.
                    </p>
                </div>

                <div class="about-links-section">
                    <div class="about-link-row">
                        <span class="about-link-title">Terms of Service</span>
                        <svg class="about-link-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9,18 15,12 9,6"/>
                        </svg>
                    </div>
                    <div class="about-link-row">
                        <span class="about-link-title">Privacy Policy</span>
                        <svg class="about-link-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9,18 15,12 9,6"/>
                        </svg>
                    </div>
                    <div class="about-link-row">
                        <span class="about-link-title">Licenses</span>
                        <svg class="about-link-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9,18 15,12 9,6"/>
                        </svg>
                    </div>
                    <div class="about-link-row">
                        <span class="about-link-title">Rate the App</span>
                        <svg class="about-link-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9,18 15,12 9,6"/>
                        </svg>
                    </div>
                </div>

                <div class="about-footer">
                    <p class="about-footer-text">
                        © 2026 Training Center<br>
                        All rights reserved.
                    </p>
                </div>
            </div>
        `;
    }

    // Initialize back buttons for all subpages
    initBackButtons();
    initHelpPage();
    initSettings();
});

// Initialize More Page Navigation
window.loadStudentProfile = async function () {
    try {
        const response = await authenticatedFetch('/student/api/profile');
        if (!response) return;

        const result = await response.json();
        if (response.ok && result.success) {
            const profile = result.data;
            window.currentStudentProfile = profile;

            // 1. Update main "More" page profile card
            const mainProfileCard = document.querySelector('.profile-card');
            if (mainProfileCard) {
                const nameEl = mainProfileCard.querySelector('.profile-name');
                const schoolEl = mainProfileCard.querySelector('.profile-institution');
                const avatarEl = mainProfileCard.querySelector('.profile-avatar');

                if (nameEl) nameEl.textContent = profile.name || 'Student';
                if (schoolEl) schoolEl.textContent = profile.school_name || 'N/A';

                if (avatarEl && profile.name) {
                    const initials = profile.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
                    avatarEl.textContent = initials;
                }
            }

            // 2. Update Profile subpage header
            const profileHeaderCard = document.querySelector('.profile-header-card');
            if (profileHeaderCard) {
                const nameEl = profileHeaderCard.querySelector('.profile-header-name');
                const idEl = profileHeaderCard.querySelector('.profile-header-id');
                const avatarEl = profileHeaderCard.querySelector('.profile-header-avatar');

                if (nameEl) nameEl.textContent = profile.name || 'Student';
                if (idEl) idEl.textContent = profile.matric_no || 'N/A';
                if (avatarEl && profile.name) {
                    const initials = profile.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
                    avatarEl.textContent = initials;
                }
            }

            // 3. Update Personal Information section
            const mapping = {
                'profile-full-name': profile.name,
                'profile-email': profile.email,
                'profile-phone': profile.phone,
                'profile-gender': profile.gender,
                'profile-dob': profile.dob ? new Date(profile.dob).toLocaleDateString() : 'N/A',
                'profile-location': profile.city && profile.state ? `${profile.city}, ${profile.state}` : (profile.city || profile.state || 'N/A'),
                'profile-institution': profile.school_name,
                'profile-course': profile.course_title,
                'profile-matric': profile.matric_no,
                'profile-session': profile.batch_session,
                'profile-payment': profile.student_payment_status || 'Pending'
            };

            for (const [id, value] of Object.entries(mapping)) {
                const el = document.getElementById(id);
                if (el) el.textContent = value || 'N/A';
            }

            // Special handling for payment status badge/color if needed
            const paymentEl = document.getElementById('profile-payment');
            if (paymentEl) {
                const status = (profile.student_payment_status || '').toLowerCase();
                paymentEl.style.color = status === 'paid' ? 'var(--success)' : (status === 'partial' ? 'var(--warning)' : 'var(--danger)');
                paymentEl.style.fontWeight = '700';
            }

        }
    } catch (err) {
        console.error('Error loading student profile:', err);
    }
};

function initMorePage() {
    const settingsRows = document.querySelectorAll('.settings-row, .profile-card');

    settingsRows.forEach(row => {
        row.addEventListener('click', () => {
            const targetPage = row.dataset.subpage;
            if (targetPage) {
                navigateToSubpage(targetPage);
            }
        });
    });
}

// Initialize Back Buttons
function initBackButtons() {
    document.addEventListener('click', (e) => {
        const backBtn = e.target.closest('.back-btn');
        if (backBtn) {
            const targetPage = backBtn.dataset.back;
            navigateToPage(targetPage);
        }
    });
}

// Initialize Settings Toggles
function initSettings() {
    const toggles = document.querySelectorAll('.toggle-switch');
    const currentTheme = document.documentElement.getAttribute('data-theme');

    toggles.forEach(toggle => {
        const setting = toggle.dataset.setting;

        // Set initial state for dark mode toggle
        if (setting === 'dark-mode') {
            if (currentTheme === 'dark') {
                toggle.classList.add('active');
            } else {
                toggle.classList.remove('active');
            }
        }

        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            const isActive = toggle.classList.contains('active');

            if (setting === 'dark-mode') {
                const theme = isActive ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', theme);
                localStorage.setItem('theme', theme);

                if (typeof showToast === 'function') {
                    showToast(isActive ? 'Dark mode activated' : 'Light mode activated');
                }
            } else {
                // Show feedback for other toggles
                if (typeof showToast === 'function') {
                    showToast(isActive ? 'Setting enabled' : 'Setting disabled');
                }
            }
        });
    });
}

// Initialize FAQ Accordion
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('open');
                }
            });
            // Toggle current item
            item.classList.toggle('open');
        });
    });
}



// Initialize Help Page
function initHelpPage() {
    const reportBtn = document.getElementById('reportIssueBtn');
    const modal = document.getElementById('reportModal');
    const closeBtn = document.getElementById('closeReportModal');
    const form = document.getElementById('reportForm');

    // Also re-init FAQs
    initFAQ();

    if (reportBtn) {
        reportBtn.addEventListener('click', () => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            modal.classList.remove('active');
            document.body.style.overflow = '';
            showToast('Support ticket #ITC-4428 submitted!');
            form.reset();
        });
    }
}

// Initialize Announcements
function initAnnouncements() {
    const items = document.querySelectorAll('.announcement-item');
    const modal = document.getElementById('announcementModal');
    const closeBtn = document.getElementById('closeAnnounceModal');
    const doneBtn = document.getElementById('announceDoneBtn');

    items.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.querySelector('.announcement-title').textContent;
            const date = item.querySelector('.announcement-date').textContent;
            const category = item.querySelector('.announcement-category').textContent;
            const preview = item.querySelector('.announcement-preview').textContent;

            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalDate').textContent = date;
            document.getElementById('modalCategory').textContent = category;
            document.getElementById('modalBody').textContent = preview + " This is the full detail of the announcement. Stay updated with all training center activities.";

            modal.classList.add('active');
            item.classList.remove('unread');
            document.body.style.overflow = 'hidden';
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (doneBtn) {
        doneBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
}

// Navigate to Subpage
function navigateToSubpage(pageId) {
    if (typeof window.navigateToPage === 'function') {
        window.navigateToPage(pageId);
    } else {
        // Fallback if navigateToPage not ready (shouldn't happen)
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => page.classList.remove('active'));
        const targetPage = document.getElementById(pageId);
        if (targetPage) targetPage.classList.add('active');
        window.scrollTo(0, 0);
    }

    // Keep More nav active for subpages (override navigateToPage's nav handling)
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(nav => nav.classList.remove('active'));

    const moreNav = document.querySelector('[data-page="more"]');
    if (moreNav) {
        moreNav.classList.add('active');
    }
}


// Function to load and display learning resources grouped by week
async function loadLearningResources() {
    const container = document.getElementById('resources-container');

    if (!container) return;

    try {
        const response = await authenticatedFetch('/learning-resources/api/student');

        if (!response || !response.ok) {
            throw new Error('Failed to fetch resources');
        }

        const result = await response.json();

        if (!result.success) {
            throw new Error(result.message || 'Failed to load resources');
        }

        const { resourcesByWeek } = result.data;

        // Clear loading state
        container.innerHTML = '';

        // Check if there are any resources
        if (!resourcesByWeek || Object.keys(resourcesByWeek).length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 60px 20px; color: var(--text-secondary);">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 64px; height: 64px; margin: 0 auto 16px; opacity: 0.3;">
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
                        <path d="M12 6v14"/>
                        <path d="M16 6v14"/>
                    </svg>
                    <p style="font-size: 16px; margin-bottom: 8px;">No resources available yet</p>
                    <p style="font-size: 14px; opacity: 0.7;">Resources will appear here as they are added to your classes</p>
                </div>
            `;
            return;
        }

        // Get week numbers and sort descending (most recent first)
        const weeks = Object.keys(resourcesByWeek).sort((a, b) => b - a);

        // Render resources grouped by week
        weeks.forEach(weekNumber => {
            const weekResources = resourcesByWeek[weekNumber];

            const weekSection = document.createElement('div');
            weekSection.className = 'resource-category-section';
            weekSection.innerHTML = `<h3 class="resource-category-title">Week ${weekNumber}</h3>`;

            weekResources.forEach(resource => {
                const resourceItem = createResourceItem(resource);
                weekSection.appendChild(resourceItem);
            });

            container.appendChild(weekSection);
        });

    } catch (error) {
        console.error('Error loading learning resources:', error);
        container.innerHTML = `
            <div style="text-align: center; padding: 60px 20px; color: var(--danger);">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 64px; height: 64px; margin: 0 auto 16px; opacity: 0.5;">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <p style="font-size: 16px; margin-bottom: 8px;">Failed to load resources</p>
                <p style="font-size: 14px; opacity: 0.7;">Please try again later</p>
            </div>
        `;
    }
}

// Helper function to create a resource item element
function createResourceItem(resource) {
    const item = document.createElement('a');
    item.href = resource.url;
    item.className = 'resource-list-item';
    item.target = '_blank';
    item.rel = 'noopener noreferrer';
    item.style.cursor = 'pointer';
    item.style.textDecoration = 'none';

    // Determine icon and button based on type
    let iconClass = '';
    let iconSvg = '';
    let buttonSvg = '';

    if (resource.type === 'PDF') {
        iconClass = 'pdf';
        iconSvg = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
            </svg>
        `;
        buttonSvg = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        `;
    } else if (resource.type === 'YOUTUBE') {
        iconClass = 'video';
        iconSvg = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
            </svg>
        `;
        buttonSvg = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="5,3 19,12 5,21 5,3"/>
            </svg>
        `;
    } else { // LINK
        iconClass = 'link';
        iconSvg = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>
        `;
        buttonSvg = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15,3 21,3 21,9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
        `;
    }

    const metaText = resource.description || resource.type;

    item.innerHTML = `
        <div class="resource-file-icon ${iconClass}">
            ${iconSvg}
        </div>
        <div class="resource-file-info">
            <span class="resource-file-name">${resource.title}</span>
            <span class="resource-file-meta">${metaText}</span>
        </div>
        <button class="resource-download-btn" onclick="event.preventDefault();">
            ${buttonSvg}
        </button>
    `;

    return item;
}

