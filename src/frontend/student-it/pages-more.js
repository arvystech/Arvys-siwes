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

                <div class="resource-category-section">
                    <h3 class="resource-category-title">Documents</h3>
                    
                    <div class="resource-list-item">
                        <div class="resource-file-icon pdf">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                <polyline points="14,2 14,8 20,8"/>
                            </svg>
                        </div>
                        <div class="resource-file-info">
                            <span class="resource-file-name">SIWES Handbook 2026</span>
                            <span class="resource-file-meta">PDF • 4.2 MB</span>
                        </div>
                        <button class="resource-download-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                <polyline points="7,10 12,15 17,10"/>
                                <line x1="12" y1="15" x2="12" y2="3"/>
                            </svg>
                        </button>
                    </div>

                    <div class="resource-list-item">
                        <div class="resource-file-icon doc">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                <polyline points="14,2 14,8 20,8"/>
                                <line x1="16" y1="13" x2="8" y2="13"/>
                                <line x1="16" y1="17" x2="8" y2="17"/>
                                <polyline points="10,9 9,9 8,9"/>
                            </svg>
                        </div>
                        <div class="resource-file-info">
                            <span class="resource-file-name">Web Development Cheatsheet</span>
                            <span class="resource-file-meta">PDF • 1.8 MB</span>
                        </div>
                        <button class="resource-download-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                <polyline points="7,10 12,15 17,10"/>
                                <line x1="12" y1="15" x2="12" y2="3"/>
                            </svg>
                        </button>
                    </div>

                    <div class="resource-list-item">
                        <div class="resource-file-icon pdf">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                <polyline points="14,2 14,8 20,8"/>
                            </svg>
                        </div>
                        <div class="resource-file-info">
                            <span class="resource-file-name">Git and GitHub Guide</span>
                            <span class="resource-file-meta">PDF • 2.1 MB</span>
                        </div>
                        <button class="resource-download-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                <polyline points="7,10 12,15 17,10"/>
                                <line x1="12" y1="15" x2="12" y2="3"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="resource-category-section">
                    <h3 class="resource-category-title">Video Tutorials</h3>

                    <div class="resource-list-item">
                        <div class="resource-file-icon video">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="5,3 19,12 5,21 5,3"/>
                            </svg>
                        </div>
                        <div class="resource-file-info">
                            <span class="resource-file-name">Introduction to HTML & CSS</span>
                            <span class="resource-file-meta">Video • 45 min</span>
                        </div>
                        <button class="resource-download-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="5,3 19,12 5,21 5,3"/>
                            </svg>
                        </button>
                    </div>

                    <div class="resource-list-item">
                        <div class="resource-file-icon video">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="5,3 19,12 5,21 5,3"/>
                            </svg>
                        </div>
                        <div class="resource-file-info">
                            <span class="resource-file-name">JavaScript Fundamentals</span>
                            <span class="resource-file-meta">Video • 1h 20min</span>
                        </div>
                        <button class="resource-download-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="5,3 19,12 5,21 5,3"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="resource-category-section">
                    <h3 class="resource-category-title">External Links</h3>

                    <div class="resource-list-item">
                        <div class="resource-file-icon link">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                            </svg>
                        </div>
                        <div class="resource-file-info">
                            <span class="resource-file-name">MDN Web Docs</span>
                            <span class="resource-file-meta">External Link</span>
                        </div>
                        <button class="resource-download-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                <polyline points="15,3 21,3 21,9"/>
                                <line x1="10" y1="14" x2="21" y2="3"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
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
                            <span class="profile-detail-value">John Doe Okonkwo</span>
                        </div>
                        <div class="profile-detail-row">
                            <span class="profile-detail-label">Email</span>
                            <span class="profile-detail-value">john.doe@email.com</span>
                        </div>
                        <div class="profile-detail-row">
                            <span class="profile-detail-label">Phone</span>
                            <span class="profile-detail-value">+234 812 345 6789</span>
                        </div>
                        <div class="profile-detail-row">
                            <span class="profile-detail-label">Date of Birth</span>
                            <span class="profile-detail-value">March 15, 1999</span>
                        </div>
                    </div>
                </section>

                <section class="section">
                    <div class="section-header">
                        <h2 class="section-title">Academic Information</h2>
                    </div>
                    <div class="profile-details-section">
                        <div class="profile-detail-row">
                            <span class="profile-detail-label">Institution</span>
                            <span class="profile-detail-value">Federal Univ. of Technology</span>
                        </div>
                        <div class="profile-detail-row">
                            <span class="profile-detail-label">Course</span>
                            <span class="profile-detail-value">Computer Science</span>
                        </div>
                        <div class="profile-detail-row">
                            <span class="profile-detail-label">Level</span>
                            <span class="profile-detail-value">300 Level</span>
                        </div>
                        <div class="profile-detail-row">
                            <span class="profile-detail-label">IT Duration</span>
                            <span class="profile-detail-value">Dec 2025 - Feb 2026</span>
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
    initFAQs();

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


