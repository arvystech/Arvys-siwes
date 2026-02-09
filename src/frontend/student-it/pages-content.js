/**
 * StudentIT - Pages Content Loader
 * Populates Projects, Logbook, Payments, and Resources pages
 */

document.addEventListener('DOMContentLoaded', () => {
    // Populate Projects Page
    const projectsPage = document.getElementById('projects');
    if (projectsPage) {
        projectsPage.innerHTML = `
            <div class="projects-view-container" id="projectsViewContainer">
                <div class="projects-desktop-layout">
                    <!-- Main Column (Left/Center) -->
                    <div class="projects-main-column">
                        <!-- Top Priority: Featured Pending Project -->
                        <div class="project-featured-card pending" id="priorityProject">
                            <div class="countdown-modern urgent" id="projectCountdown">
                                <div class="countdown-icon-pulse"></div>
                                <span class="countdown-text">Due in <span class="countdown-value" id="countdownValue">2d 14h 30m</span></span>
                            </div>
                            <div class="featured-tag">Upcoming Deadline</div>
                            <div class="project-header">
                                <h3 class="project-title">E-Commerce Dashboard</h3>
                            </div>
                            
                            <div class="project-description-wrapper">
                                <p class="project-description truncated" id="priorityDesc">Build a responsive admin dashboard with charts, tables, and user management. Implement a complex navigation system with collapsible sidebar, implement real-time data visualization with Chart.js, create CRUD operations interface for products and users, and ensure full mobile responsiveness.</p>
                                <button class="see-more-link" id="seeMoreBtn">See more</button>
                            </div>

                            <div class="featured-footer">
                                <button class="project-submit-btn-premium" id="submitProjectBtn">
                                    <span>Submit Project</span>
                                </button>
                            </div>
                        </div>

                        <!-- Pending Projects Section -->
                        <div class="projects-section">
                            <h4 class="projects-section-title">Pending Projects</h4>
                            <div class="projects-grid">
                                <div class="project-modern-item" data-project="2">
                                    <div class="project-main">
                                        <div class="project-info-stack">
                                            <h3 class="project-title">Blog Platform</h3>
                                            <div class="project-description-wrapper">
                                                <p class="project-description truncated">Full-stack blog with authentication, CRUD operations, comments system, and markdown support.</p>
                                                <button class="see-more-link">See more</button>
                                            </div>
                                        </div>
                                        <div class="project-meta-row">
                                            <div class="project-due-inline">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                                                </svg>
                                                <span>Due Jan 25</span>
                                            </div>
                                            <button class="submit-btn-minimal" data-project="2">Submit</button>
                                        </div>
                                    </div>
                                </div>

                                <div class="project-modern-item not-started" data-project="3">
                                    <div class="project-main">
                                        <div class="project-info-stack">
                                            <h3 class="project-title">Social Media Clone</h3>
                                            <div class="project-description-wrapper">
                                                <p class="project-description truncated">Build a mini social platform with posts, likes, follows, and real-time notifications.</p>
                                                <button class="see-more-link">See more</button>
                                            </div>
                                        </div>
                                        <div class="project-meta-row">
                                            <div class="project-due-inline urgent">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                                                </svg>
                                                <span>Due Feb 10</span>
                                            </div>
                                            <button class="submit-btn-minimal secondary">Start</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Side Column (Right) -->
                    <aside class="projects-side-column">
                        <div class="side-panel-card">
                            <h4 class="side-panel-title">Project Overview</h4>
                            <!-- Filter Tabs -->
                            <div class="filter-tabs-desktop">
                                <button class="filter-tab active" data-filter="all">All Projects</button>
                                <button class="filter-tab" data-filter="pending">Pending</button>
                                <button class="filter-tab" data-filter="completed">Completed</button>
                            </div>
                        </div>

                        <!-- Stats Card -->
                        <div class="side-stats-card">
                            <div class="stat-item">
                                <span class="stat-label">Total Assigned</span>
                                <span class="stat-value">6</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">In Review</span>
                                <span class="stat-value">2</span>
                            </div>
                        </div>

                        <!-- Completed Section in Sidebar for Desktop -->
                        <div class="projects-section desktop-only">
                            <h4 class="projects-section-title">Recently Completed</h4>
                            <div class="project-modern-item completed" data-project="4">
                                <div class="project-main">
                                    <h3 class="project-title">Portfolio Website</h3>
                                    <div class="project-grade-badge">

                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                                        </svg>
                                        <span>Grade: A</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>

                <!-- Mobile Filter Tabs (Kept for mobile view) -->
                <div class="filter-tabs mobile-only">
                    <button class="filter-tab active" data-filter="all">All Projects</button>
                    <button class="filter-tab" data-filter="pending">Pending</button>
                    <button class="filter-tab" data-filter="completed">Completed</button>
                </div>

                <!-- Mobile Completed Section (Hidden on desktop in JS or CSS) -->
                <section class="projects-mobile-list mobile-only">
                    <div class="projects-section">
                        <h4 class="projects-section-title">Completed</h4>
                        <div class="project-modern-item completed" data-project="4">
                            <div class="project-main">
                                <div class="project-info-stack">
                                    <h3 class="project-title">Portfolio Website</h3>
                                    <div class="project-description-wrapper">
                                        <p class="project-description truncated">Personal portfolio showcasing skills, projects, and contact info with modern design.</p>
                                        <button class="see-more-link">See more</button>
                                    </div>
                                </div>
                                <div class="project-meta-row">
                                    <div class="project-grade-badge">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                                        </svg>
                                        <span>Grade: A</span>
                                    </div>
                                    <button class="submit-btn-minimal secondary">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <!-- Modern Scrollable Submission Form Panel (Directly on page) -->
            <div class="project-submission-panel" id="projectSubmissionPanel">
                <div class="panel-header">
                    <button class="panel-back-btn" id="closeProjectPanel">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <h2 class="panel-title">Submit Project</h2>
                </div>
                
                <div class="panel-scroll-content">
                    <div class="project-context-card">
                        <span class="context-label">Project</span>
                        <h3 class="context-title" id="submittingProjectTitle">E-Commerce Dashboard</h3>
                        <div class="context-desc" id="submittingProjectDesc">Build a responsive admin dashboard with charts, tables, and user management.</div>
                    </div>

                    <form class="modern-submission-form" id="projectForm">
                        <div class="form-section">
                            <label class="modern-label">The Solution Approach</label>
                            <p class="label-hint">Explain how you solved the problem (100 words max)</p>
                            <textarea class="modern-textarea" id="projectExplanation" placeholder="Describe your logic, tools used, and challenges overcome..." rows="5"></textarea>
                            <div class="modern-word-count"><span id="explanationCount">0</span> / 100 words</div>
                        </div>

                        <div class="form-section">
                            <label class="modern-label">GitHub Repository</label>
                            <div class="modern-input-wrapper">
                                <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                                </svg>
                                <input type="url" class="modern-input" id="githubLink" placeholder="https://github.com/username/project">
                            </div>
                        </div>

                        <div class="form-actions">
                            <button type="button" class="btn-premium-full" id="confirmProjectSubmit">
                                <span>Confirm Submission</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `;
        initProjectPage();
    }

    // Populate Logbook Page
    const logbookPage = document.getElementById('logbook');
    if (logbookPage) {
        logbookPage.innerHTML = `
            <!-- Filter Tabs -->
            <div class="view-tabs" style="margin-bottom: 20px;">
                <button class="view-tab active" data-view="all">Daily Logs</button>
                <button class="view-tab" data-view="weekly">Weekly View</button>
            </div>

            <!-- Logbook Summary -->
            <div class="logbook-summary-card" style="margin-bottom: 24px; background: var(--primary-gradient); color: #ffffff; border-radius: var(--radius-2xl); padding: 20px; box-shadow: var(--shadow-lg);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                    <span style="font-size: 13px; font-weight: 700; opacity: 0.9; text-transform: uppercase; letter-spacing: 0.5px;">Your Progress</span>
                    <span class="summary-week-badge" style="font-size: 14px; font-weight: 700; background: rgba(255,255,255,0.2); padding: 4px 12px; border-radius: var(--radius-full);">Loading...</span>
                </div>
                <div class="summary-logs-count" style="font-size: 20px; font-weight: 800; margin-bottom: 4px;">-- Logs Completed</div>
                <div class="summary-logs-hint" style="font-size: 13px; opacity: 0.9;">Fetching your progress...</div>
            </div>


            <!-- Daily Logs List -->
            <section class="logbook-content" id="logbookContent">
                <!-- Current Week Section -->
                <div class="logbook-section-header" style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
                    <h3 style="font-size: 15px; font-weight: 800; color: var(--gray-900);">This Week</h3>
                    <div style="height: 1px; flex: 1; background: var(--gray-200);"></div>
                </div>


                <div class="logs-stack" id="currentWeekLogs">
                    <!-- Day 4 (Today/Upcoming) -->
                    <div class="logbook-entry-expandable" data-day="4">
                        <div class="logbook-week-header">
                            <div style="flex: 1;">
                                <div class="logbook-day-tag">Day 4 • Today</div>
                                <div class="logbook-entry-preview">Working on the project submission flow and fixing responsive bugs in the dashboard...</div>
                            </div>
                            <div class="week-collapse-toggle">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6,9 12,15 18,9" />
                                </svg>
                            </div>
                        </div>
                        <div class="log-entry-content" style="display: none;">
                            <div class="log-entry-class-details">
                                <div style="font-size: 11px; font-weight: 700; color: var(--gray-500); text-transform: uppercase; margin-bottom: 8px;">Class Details</div>
                                <div style="font-weight: 700; font-size: 14px; color: var(--gray-800);">Advanced UI Interactivity</div>
                                <div style="font-size: 12px; color: var(--gray-600);">Tutor: Sarah Johnson • 14:00 - 15:30</div>
                            </div>
                            <div class="log-entry-full">
                                <div style="font-size: 11px; font-weight: 700; color: var(--gray-500); text-transform: uppercase; margin-bottom: 8px;">Your Learning Log</div>
                                <p style="font-size: 14px; color: var(--gray-800); line-height: 1.6;">Build a responsive admin dashboard with charts, tables, and user management. Use Chart.js for data visualization. Managed to implement the sidebar and main content areas.</p>

                                <div style="display: flex; gap: 8px; margin-top: 12px;">
                                    <button class="project-action-btn secondary mini" style="padding: 6px 12px; font-size: 11px;">Edit Log</button>
                                    <button class="project-action-btn mini share-btn" style="padding: 6px 12px; font-size: 11px;">Share Card</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Day 3 -->
                    <div class="logbook-entry-expandable" data-day="3">
                        <div class="logbook-week-header">
                            <div style="flex: 1;">
                                <div class="logbook-day-tag">Day 3 • Completed</div>
                                <div class="logbook-entry-preview">Learned how to use CSS variables and custom properties for theme management...</div>
                            </div>
                            <div class="week-collapse-toggle">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6,9 12,15 18,9" />
                                </svg>
                            </div>
                        </div>
                        <div class="log-entry-content" style="display: none;">
                            <!-- Full content here similarly -->
                        </div>
                    </div>
                </div>

                <!-- Past Weeks Section -->
                <div class="logbook-section-header" style="display: flex; align-items: center; gap: 8px; margin-top: 32px; margin-bottom: 16px;">
                    <h3 style="font-size: 15px; font-weight: 800; color: var(--gray-900);">Past Weeks</h3>
                    <div style="height: 1px; flex: 1; background: var(--gray-200);"></div>
                </div>


                <div class="past-weeks-stack">
                    <div class="week-collapse-card" data-week="7">
                        <div class="week-collapse-header">
                            <div class="week-collapse-info">
                                <span class="week-collapse-title">Week 7 • CSS Fundamentals</span>
                                <span class="week-collapse-summary">5 logs • Completed</span>
                            </div>
                            <div class="week-collapse-toggle">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6,9 12,15 18,9" />
                                </svg>
                            </div>
                        </div>
                        <div class="week-collapse-content">
                            <div style="padding: 12px 0;">Past logs for this week would appear here...</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Floating Action Button -->
            <button class="fab-btn" id="addLogBtn" style="position: fixed; bottom: 100px; right: 24px; width: 56px; height: 56px; border-radius: 50%; background: var(--primary-gradient); color: #ffffff; border: none; box-shadow: var(--shadow-xl); display: flex; align-items: center; justify-content: center; z-index: 100; cursor: pointer;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 24px; height: 24px;">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
            </button>


            <!-- Redesigned Log Entry Panel (Matches Project Submission Style) -->
            <div class="project-submission-panel" id="logSubmissionPanel">
                <div class="panel-header">
                    <button class="panel-back-btn" id="closeLogPanel">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <h2 class="panel-title">Add Daily Log</h2>
                </div>
                
                <div class="panel-scroll-content">
                    <div class="project-context-card">
                        <span class="context-label">Current Progress</span>
                        <h3 class="context-title">-- • --</h3>
                        <div class="context-desc" id="logContextDesc">Log details are synchronized with your scheduled classes. Please check back when a session is active.</div>
                    </div>

                    <form class="modern-submission-form" id="logEntryForm">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                            <div class="form-section" style="margin-bottom: 0;">
                                <label class="modern-label">Week Number</label>
                                <div class="modern-value-display" id="logWeek">--</div>
                            </div>
                            <div class="form-section" style="margin-bottom: 0;">
                                <label class="modern-label">Class Day</label>
                                <div class="modern-value-display" id="logDay">--</div>
                            </div>
                        </div>

                        <div class="form-section">
                            <label class="modern-label">Topic</label>
                            <div class="modern-value-display" id="logTopic">TBA</div>
                        </div>

                        <div class="form-section">
                            <label class="modern-label">Tutor</label>
                            <div class="modern-value-display" id="logTutor">TBA</div>
                        </div>

                        <div class="form-section">
                            <label class="modern-label">Learning Log</label>
                            <p class="label-hint">What did you learn today? (50 words max)</p>
                            <textarea class="modern-textarea" id="logContent" placeholder="Describe your key takeaways..." rows="5"></textarea>
                            <div class="modern-word-count"><span id="logWordCount">0</span> / 50 words</div>
                        </div>

                        <div class="form-actions" style="margin-top: 24px;">
                            <button type="button" class="btn-premium-full" id="saveLogBtn">
                                <span>Save & Generate Card</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Share Card Modal (Kept for displaying the generated card) -->
            <div class="modal-overlay" id="shareCardModal">
                <div class="modal" style="background: transparent; box-shadow: none; padding: 0; max-width: 360px;">
                    <div id="shareableCardContainer"></div>
                    <div style="display: flex; gap: 12px; margin-top: 24px; padding: 0 20px;">
                        <button class="btn-premium-full" id="downloadCardBtn">
                            <span>Save to Photos</span>
                        </button>
                        <button class="btn-premium-full" id="closeShareModal" style="background: rgba(255,255,255,0.2); backdrop-filter: blur(10px);">
                            <span>Done</span>
                        </button>
                    </div>
                </div>
            </div>

        `;
        initLogbook();
    }

    // Populate Payments Page
    const paymentsPage = document.getElementById('payments');
    if (paymentsPage) {
        paymentsPage.innerHTML = `
            <div class="payment-hero">
                <span class="payment-hero-label">Total Outstanding Balance</span>
                <div class="payment-hero-amount">$450.00</div>
                <div class="payment-hero-meta">
                    <span class="payment-badge">Next Due: Jan 5, 2026</span>
                </div>
            </div>

            <section class="payment-method-section">
                <div class="section-header">
                    <h3 class="section-title">Payment Method</h3>
                    <button class="view-all-btn">Manage</button>
                </div>
                <div class="payment-card-list">
                    <div class="payment-method-card active">
                        <div class="method-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 24px; height: 24px;">
                                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
                            </svg>
                        </div>
                        <div class="method-info">
                            <span class="method-name">Visa Card</span>
                            <span class="method-details">•••• 4242 • Exp 12/26</span>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="section-header">
                    <h3 class="section-title">Recent Transactions</h3>
                    <button class="view-all-btn">View All</button>
                </div>
                <div class="activity-list">
                    <div class="activity-item">
                        <div class="activity-icon" style="background: var(--success-light); color: var(--success);">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
                        </div>
                        <div class="activity-content">
                            <span class="activity-title">Quarter 1 Tuition</span>
                            <span class="activity-meta">Bank Transfer • Dec 01</span>
                        </div>
                        <div style="text-align: right;">
                            <div style="font-weight: 700; color: var(--gray-900);">$1,200.00</div>
                            <div style="font-size: 11px; color: var(--success); font-weight: 600;">Paid</div>
                        </div>
                    </div>
                </div>
                <button class="submit-btn" id="proceedToPaymentBtn" style="margin-top: 24px;">Proceed to Payment</button>
            </section>

            <!-- Payment Modal -->
            <div class="modal-overlay" id="paymentModal">
                <div class="modal">
                    <div class="modal-header">
                        <h2 class="modal-title">Make Payment</h2>
                        <button class="modal-close" id="closePaymentModal">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="18" y1="6" x2="6" y2="18"/>
                                <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        </button>
                    </div>
                    <form class="entry-form" id="paymentForm">
                        <div class="payment-summary-card" style="background: var(--gray-50); padding: 16px; border-radius: var(--radius-lg); margin-bottom: 20px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                <span style="color: var(--gray-500); font-size: 14px;">Item</span>
                                <span style="font-weight: 600; font-size: 14px;">Tuition Balance</span>
                            </div>
                            <div style="display: flex; justify-content: space-between;">
                                <span style="color: var(--gray-500); font-size: 14px;">Amount</span>
                                <span style="font-weight: 700; color: var(--primary); font-size: 18px;">$450.00</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Cardholder Name</label>
                            <input type="text" class="tag-input" value="John Doe" style="width: 100%; border: 2px solid var(--gray-200); border-radius: var(--radius-lg); padding: 12px;" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Card Number</label>
                            <input type="text" class="tag-input" placeholder="•••• •••• •••• 4242" style="width: 100%; border: 2px solid var(--gray-200); border-radius: var(--radius-lg); padding: 12px;" required>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                            <div class="form-group">
                                <label class="form-label">Expiry</label>
                                <input type="text" class="tag-input" placeholder="MM/YY" style="width: 100%; border: 2px solid var(--gray-200); border-radius: var(--radius-lg); padding: 12px;" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label">CVC</label>
                                <input type="text" class="tag-input" placeholder="•••" style="width: 100%; border: 2px solid var(--gray-200); border-radius: var(--radius-lg); padding: 12px;" required>
                            </div>
                        </div>
                        <button type="submit" class="submit-btn" id="confirmPaymentBtn" style="margin-top: 10px;">Pay $450.00</button>
                    </form>
                </div>
            </div>

            <!-- Receipt Page (Mocked as a full-page modal) -->
            <div class="modal-overlay" id="receiptModal" style="background: var(--gray-50);">
                <div class="subpage-content" style="max-width: 480px; margin: 0 auto; background: var(--gray-50);">
                    <div class="subpage-header">
                        <button class="modal-close" id="closeReceiptModal" style="background: var(--white); width: 40px; height: 40px; border-radius: 50%; box-shadow: var(--shadow-sm); display: flex; align-items: center; justify-content: center;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 20px;">
                                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        </button>
                        <h1 class="subpage-title">Receipt</h1>
                        <button class="view-all-btn" onclick="window.print()" style="margin-left: auto;">Print</button>
                    </div>

                    <div class="receipt-card" style="background: var(--white); padding: 32px; border-radius: var(--radius-2xl); box-shadow: var(--shadow-lg); text-align: center; margin-top: 20px;">
                        <div style="width: 64px; height: 64px; background: var(--success-light); color: var(--success); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="width: 32px;"><polyline points="20,6 9,17 4,12"/></svg>
                        </div>
                        <h2 style="font-size: 24px; font-weight: 800; color: var(--gray-900);">Payment Successful</h2>
                        <p style="color: var(--gray-500); margin-bottom: 30px;">Transaction ID: #ITC-88294-XP</p>
                        
                        <div style="border-top: 1px dashed var(--gray-200); border-bottom: 1px dashed var(--gray-200); padding: 20px 0; margin-bottom: 30px; text-align: left;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                                <span style="color: var(--gray-500);">Date</span>
                                <span style="font-weight: 600;">${new Date().toLocaleDateString()}</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                                <span style="color: var(--gray-500);">Payment Method</span>
                                <span style="font-weight: 600;">Visa •••• 4242</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                                <span style="color: var(--gray-500);">Amount Paid</span>
                                <span style="font-weight: 700; color: var(--primary);">$450.00</span>
                            </div>
                        </div>
                        
                        <button class="project-action-btn" id="doneReceiptBtn" style="width: 100%;">Done</button>
                    </div>
                </div>
            </div>
        `;
        initPayments();
    }

    // Populate Resources Page
    const resourcesPage = document.getElementById('resources');
    if (resourcesPage) {
        resourcesPage.innerHTML = `
            <div class="resource-hero">
                <div class="search-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 20px; height: 20px;">
                        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                    <input type="text" placeholder="Search resources...">
                </div>
                <div class="resource-categories">
                    <button class="category-chip active">All</button>
                    <button class="category-chip">Guides</button>
                    <button class="category-chip">Videos</button>
                </div>
            </div>

            <div class="resource-grid">
                <div class="featured-resource">
                    <div>
                        <span style="font-size: 12px; font-weight: 700; opacity: 0.8; text-transform: uppercase;">Masterclass</span>
                        <h3 style="font-size: 20px; margin-top: 4px;">Advanced JavaScript Patterns</h3>
                    </div>
                    <p style="font-size: 13px; opacity: 0.7; margin-bottom: 20px;">Dive deep into closures, prototypes, and asynchronous programming.</p>
                    <button style="background: var(--white); color: #1e293b; border: none; padding: 10px 20px; border-radius: var(--radius-lg); font-size: 13px; font-weight: 700;">Start Learning</button>
                </div>

                <div class="resource-detailed-card">
                    <div class="resource-icon-wrapper" style="background: rgba(59, 130, 246, 0.1); color: var(--info);">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 24px; height: 24px;">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                        </svg>
                    </div>
                    <div class="resource-title">HTML5 Reference</div>
                    <span class="resource-meta">PDF • 2.4 MB</span>
                </div>
                     <div class="resource-detailed-card">
                    <div class="resource-icon-wrapper" style="background: rgba(59, 130, 246, 0.1); color: var(--info);">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 24px; height: 24px;">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                        </svg>
                    </div>
                    <div class="resource-title">HTML5 Reference</div>
                    <span class="resource-meta">PDF • 2.4 MB</span>
                </div>
            </div>
            
            <div style="margin-top: 32px; text-align: center; border-top: 1px solid var(--gray-100); padding-top: 24px;">
                <button class="project-action-btn secondary">Contact Support</button>
            </div>
        `;
    }
});

// Initialize Projects Page
function initProjectPage() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    if (!filterTabs.length) return;

    const projectPanel = document.getElementById('projectSubmissionPanel');
    const closeProjectPanel = document.getElementById('closeProjectPanel');
    const submitBtns = document.querySelectorAll('#submitProjectBtn, .submit-btn-minimal');
    const projectsViewContainer = document.getElementById('projectsViewContainer');

    // Filter Tabs
    const allFilterTabs = document.querySelectorAll('.filter-tab');
    allFilterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const filter = tab.dataset.filter;

            // Sync all tabs with the same filter
            allFilterTabs.forEach(t => {
                if (t.dataset.filter === filter) {
                    t.classList.add('active');
                } else {
                    t.classList.remove('active');
                }
            });

            const projectSections = document.querySelectorAll('.projects-section');
            const featuredCard = document.getElementById('priorityProject');

            // Handle featured card visibility
            if (featuredCard) {
                if (filter === 'all' || filter === 'pending') {
                    featuredCard.style.display = 'block';
                    setTimeout(() => featuredCard.style.opacity = '1', 50);
                } else {
                    featuredCard.style.display = 'none';
                    featuredCard.style.opacity = '0';
                }
            }

            // Handle sections and individual modern items
            const allItems = document.querySelectorAll('.project-modern-item');
            allItems.forEach(item => {
                const isItemPending = item.classList.contains('pending') || item.parentElement.closest('.projects-section')?.querySelector('.projects-section-title')?.textContent.includes('Pending') || !item.classList.contains('completed');
                const isItemCompleted = item.classList.contains('completed');

                let shouldShow = filter === 'all';
                if (filter === 'pending') shouldShow = isItemPending && !isItemCompleted;
                if (filter === 'completed') shouldShow = isItemCompleted;

                if (shouldShow) {
                    item.style.display = 'block';
                    setTimeout(() => item.style.opacity = '1', 50);
                } else {
                    item.style.display = 'none';
                    item.style.opacity = '0';
                }
            });

            // Hide empty sections (but ignore side-panel-card if it contains tabs)
            projectSections.forEach(section => {
                if (section.classList.contains('side-panel-card')) return;
                const visibleItems = Array.from(section.querySelectorAll('.project-modern-item')).filter(i => i.style.display !== 'none');

                // Remove existing empty state if any
                const existingEmpty = section.querySelector('.empty-state-msg');
                if (existingEmpty) existingEmpty.remove();

                if (visibleItems.length === 0) {
                    const title = section.querySelector('.projects-section-title')?.textContent || '';
                    const msg = title.includes('Pending') ? 'No pending projects' : 'No completed projects';

                    const emptyMsg = document.createElement('div');
                    emptyMsg.className = 'empty-state-msg';
                    emptyMsg.style.cssText = 'padding: 24px; text-align: center; color: var(--gray-400); font-size: 14px; background: var(--gray-50); border-radius: var(--radius-lg); border: 1px dashed var(--gray-200); margin-top: 8px;';
                    emptyMsg.textContent = msg;
                    section.appendChild(emptyMsg);
                    section.style.display = 'block'; // Keep section visible to show the message
                } else {
                    section.style.display = 'block';
                }
            });

        });
    });


    // See More/Less Logic
    const seeMoreLinks = document.querySelectorAll('.see-more-link');
    seeMoreLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.stopPropagation();
            const wrapper = link.closest('.project-description-wrapper');
            const desc = wrapper.querySelector('.project-description');

            if (desc.classList.contains('truncated')) {
                desc.classList.remove('truncated');
                link.textContent = 'See less';
            } else {
                desc.classList.add('truncated');
                link.textContent = 'See more';
            }
        });
    });

    // Panel Open/Close Logic
    const openPanel = (title, desc) => {
        if (projectPanel) {
            document.getElementById('submittingProjectTitle').textContent = title;
            document.getElementById('submittingProjectDesc').textContent = desc;
            projectPanel.classList.add('active');
            if (projectsViewContainer) projectsViewContainer.classList.add('blurred');
            document.body.style.overflow = 'hidden';
        }
    };

    const closePanel = () => {
        if (projectPanel) {
            projectPanel.classList.remove('active');
            if (projectsViewContainer) projectsViewContainer.classList.remove('blurred');
            document.body.style.overflow = '';
        }
    };

    submitBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = btn.closest('.project-featured-card') || btn.closest('.project-modern-item');
            const title = card.querySelector('.project-title').textContent;
            const desc = card.querySelector('.project-description').textContent;

            if (btn.textContent.includes('Start')) {
                showToast(`Started project: ${title}`);
                btn.textContent = 'Submit';
                btn.classList.remove('secondary');
                return;
            }

            openPanel(title, desc);
        });
    });

    if (closeProjectPanel) {
        closeProjectPanel.addEventListener('click', closePanel);
    }

    // Word count for explanation
    const explanationField = document.getElementById('projectExplanation');
    const explanationCount = document.getElementById('explanationCount');

    if (explanationField && explanationCount) {
        explanationField.addEventListener('input', () => {
            const words = explanationField.value.trim().split(/\s+/).filter(w => w.length > 0);
            explanationCount.textContent = words.length;

            if (words.length > 100) {
                explanationCount.style.color = 'var(--danger)';
            } else {
                explanationCount.style.color = 'var(--gray-400)';
            }
        });
    }

    // Confirm submission
    const confirmSubmitBtn = document.getElementById('confirmProjectSubmit');
    if (confirmSubmitBtn) {
        confirmSubmitBtn.addEventListener('click', () => {
            const githubLink = document.getElementById('githubLink').value;
            const explanation = explanationField ? explanationField.value : '';

            if (!githubLink) {
                showToast('Please enter your GitHub repository link', 'error');
                return;
            }

            if (!explanation.trim()) {
                showToast('Please explain how you solved the problem', 'error');
                return;
            }

            const wordCount = explanation.trim().split(/\s+/).filter(w => w.length > 0).length;
            if (wordCount > 100) {
                showToast('Explanation exceeds 100 words limit', 'error');
                return;
            }

            // Simulate submission
            confirmSubmitBtn.disabled = true;
            confirmSubmitBtn.querySelector('span').textContent = 'Submitting...';

            setTimeout(() => {
                closePanel();
                showToast('Project submitted successfully!');

                // Reset
                confirmSubmitBtn.disabled = false;
                confirmSubmitBtn.querySelector('span').textContent = 'Confirm Submission';
                if (explanationField) explanationField.value = '';
                if (explanationCount) explanationCount.textContent = '0';
                document.getElementById('githubLink').value = '';
            }, 1800);
        });
    }

    // Countdown Timer Logic
    const deadline = new Date().getTime() + (2 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000);

    function updateCountdown() {
        const timerValue = document.getElementById('countdownValue');
        if (!timerValue) return;

        const now = new Date().getTime();
        const distance = deadline - now;

        if (distance < 0) {
            timerValue.textContent = "Expired";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        timerValue.textContent = `${days}d ${hours}h ${minutes}m`;
    }
    updateCountdown();
    setInterval(updateCountdown, 60000);

    // Initial filter trigger to set empty states
    const activeTab = document.querySelector('.filter-tab.active');
    if (activeTab) activeTab.click();
}


// Initialize Logbook Page
function initLogbook() {
    // View Tab Switching Logic
    const viewTabs = document.querySelectorAll('.view-tab');
    const logbookContent = document.getElementById('logbookContent');

    viewTabs.forEach(tab => {
        tab.onclick = () => {
            viewTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const view = tab.dataset.view;
            if (logbookContent) {
                logbookContent.classList.remove('view-all', 'view-weekly');
                logbookContent.classList.add(`view-${view}`);

                // Refresh rendering to update week headers
                if (window.lastLogbookEntries) {
                    renderLogbookEntries(window.lastLogbookEntries);
                }
            }
        };
    });

    // Initialize expansion for static entries
    initializeLogbookExpansionListeners();

    // New Log Entry Flow
    const addLogBtn = document.getElementById('addLogBtn');
    const logSubmissionPanel = document.getElementById('logSubmissionPanel');
    const closeLogPanel = document.getElementById('closeLogPanel');
    const saveLogBtn = document.getElementById('saveLogBtn');
    const logContent = document.getElementById('logContent');
    const logWordCount = document.getElementById('logWordCount');

    if (addLogBtn && logSubmissionPanel) {
        addLogBtn.addEventListener('click', () => {
            // Pre-fill form if current class info is available (stored in dashboard.js)
            const classData = window.currentClassData;

            const weekField = document.getElementById('logWeek');
            const dayField = document.getElementById('logDay');
            const topicField = document.getElementById('logTopic');
            const tutorField = document.getElementById('logTutor');
            const contextTitle = document.querySelector('#logSubmissionPanel .context-title');

            if (classData) {
                if (weekField) weekField.textContent = classData.weekNumber || '--';
                if (dayField) dayField.textContent = `Day ${classData.dayNumber}` || '--';
                if (topicField) topicField.textContent = classData.topic || 'No Topic Set';
                if (tutorField) tutorField.textContent = classData.instructorName || 'Not Assigned';

                if (contextTitle) {
                    contextTitle.textContent = `Week ${classData.weekNumber || '?'} • Day ${classData.dayNumber || '?'}`;
                }
                const contextDesc = document.getElementById('logContextDesc');
                if (contextDesc) contextDesc.textContent = 'Use this form to log your daily learning activities and progress.';
            } else {
                // No class scheduled fallback
                if (weekField) weekField.textContent = '--';
                if (dayField) dayField.textContent = '--';
                if (topicField) topicField.textContent = 'Session Not Available';
                if (tutorField) tutorField.textContent = 'N/A';

                if (contextTitle) contextTitle.textContent = 'No Class Scheduled';
                const contextDesc = document.getElementById('logContextDesc');
                if (contextDesc) contextDesc.textContent = 'There is currently no class session scheduled for today.';
            }

            logSubmissionPanel.classList.add('active');
            document.body.style.overflow = 'hidden';
            if (typeof window.blurMainContainer === 'function') window.blurMainContainer(true);
        });
    }

    if (closeLogPanel) {
        closeLogPanel.addEventListener('click', () => {
            logSubmissionPanel.classList.remove('active');
            document.body.style.overflow = '';
            if (typeof window.blurMainContainer === 'function') window.blurMainContainer(false);
        });
    }


    if (logContent && logWordCount) {
        logContent.addEventListener('input', () => {
            const words = logContent.value.trim().split(/\s+/).filter(w => w.length > 0);
            logWordCount.textContent = words.length;
            if (words.length > 50) {
                logWordCount.style.color = 'var(--danger)';
            } else {
                logWordCount.style.color = 'var(--gray-400)';
            }
        });
    }

    if (saveLogBtn) {
        saveLogBtn.addEventListener('click', async () => {
            const content = logContent.value;
            const week = document.getElementById('logWeek').textContent;
            const day = document.getElementById('logDay').textContent;
            const topic = document.getElementById('logTopic').textContent;
            const tutor = document.getElementById('logTutor').textContent;

            if (!content || !topic || !tutor) {
                showToast('Please fill in all fields', 'error');
                return;
            }

            if (!window.currentClassId) {
                showToast('No active class to log for', 'error');
                return;
            }

            const wordCount = content.trim().split(/\s+/).filter(w => w.length > 0).length;
            if (wordCount > 50) {
                showToast('Log must be 50 words or less', 'error');
                return;
            }

            // Real save
            saveLogBtn.disabled = true;
            const originalText = saveLogBtn.innerHTML;
            saveLogBtn.innerHTML = '<span>Saving...</span>';

            try {
                const response = await authenticatedFetch('/logbook/create', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        classId: window.currentClassId,
                        entry: content
                    })
                });

                const result = await response.json();

                if (response.ok && result.success) {
                    logSubmissionPanel.classList.remove('active');
                    document.body.style.overflow = '';
                    if (typeof window.blurMainContainer === 'function') window.blurMainContainer(false);

                    generateShareableCard({
                        week, day, topic, tutor, content
                    });

                    showToast('Log saved successfully!');

                    // Reset form
                    logContent.value = '';
                    logWordCount.textContent = '0';

                    // Refresh dashboard and logs
                    if (window.loadDashboardData) window.loadDashboardData();
                    if (window.loadLogbookEntries) window.loadLogbookEntries();
                } else {
                    showToast(result.message || 'Failed to save log', 'error');
                }
            } catch (err) {
                console.error(err);
                showToast('Error saving logbook entry', 'error');
            } finally {
                saveLogBtn.disabled = false;
                saveLogBtn.innerHTML = originalText;
            }
        });
    }

    // Load entries on init
    loadLogbookEntries();

    // Share buttons on existing logs - handled in renderLogbookEntries

}

window.generateShareableCard = function (data) {
    const container = document.getElementById('shareableCardContainer');
    const modal = document.getElementById('shareCardModal');

    if (!container || !modal) return;

    // Get current student name for the card
    const studentName = window.currentStudent ? window.currentStudent.name : 'Student';
    const studentInitials = studentName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

    container.innerHTML = `
        <div class="shareable-log-card status-story-optimized">
            <div class="story-branding">
                <img src="logo/logo.svg" alt="StudentIT" class="story-logo">
                <span class="story-app-name">StudentIT</span>
            </div>

            <div class="story-middle">
                <div class="story-meta">
                    <span class="story-date">${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    <h2 class="story-topic">${data.topic}</h2>
                </div>

                <div class="story-log-text">
                    <svg class="quote-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3H20.017C21.1216 3 22.017 3.89543 22.017 5V19C22.017 20.1046 21.1216 21 20.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.9124 16 4.01697 16H7.01697C7.56925 16 8.01697 15.5523 8.01697 15V9C8.01697 8.44772 7.56925 8 7.01697 8H4.01697C2.9124 8 2.01697 7.10457 2.01697 6V3H8.01697C9.12154 3 10.017 3.89543 10.017 5V19C10.017 20.1046 9.12154 21 8.01697 21H2.01697Z"/>
                    </svg>
                    <p>${data.content}</p>
                </div>
            </div>

            <div class="story-footer">
                <div class="story-student">
                    <div class="story-avatar">${studentInitials}</div>
                    <div class="story-student-details">
                        <span class="story-name">${studentName}</span>
                        <span class="story-week">${data.week ? `Week ${data.week}` : ''} ${data.day ? `• Day ${data.day}` : ''}</span>
                    </div>
                </div>
                <div class="story-qr-placeholder">
                    <div class="qr-label">TRACKING</div>
                    <div class="qr-value">PROGRESS</div>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    const downloadBtn = document.getElementById('downloadCardBtn');
    const closeShare = document.getElementById('closeShareModal');

    if (downloadBtn) {
        downloadBtn.onclick = () => {
            showToast('Card saved to your photos!');
            setTimeout(() => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }, 1000);
        };
    }

    if (closeShare) {
        closeShare.onclick = () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        };
    }
}

// Initialize Payments
function initPayments() {
    const proceedBtn = document.getElementById('proceedToPaymentBtn');
    const paymentModal = document.getElementById('paymentModal');
    const closePaymentModal = document.getElementById('closePaymentModal');
    const paymentForm = document.getElementById('paymentForm');
    const receiptModal = document.getElementById('receiptModal');
    const closeReceiptModal = document.getElementById('closeReceiptModal');
    const doneReceiptBtn = document.getElementById('doneReceiptBtn');

    if (proceedBtn && paymentModal) {
        proceedBtn.addEventListener('click', () => {
            paymentModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closePaymentModal) {
        closePaymentModal.addEventListener('click', () => {
            paymentModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (paymentForm) {
        paymentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = document.getElementById('confirmPaymentBtn');
            btn.disabled = true;
            btn.textContent = 'Processing...';

            setTimeout(() => {
                paymentModal.classList.remove('active');
                receiptModal.classList.add('active');
                btn.disabled = false;
                btn.textContent = 'Pay $450.00';
                showToast('Payment successful!');
            }, 2000);
        });
    }

    if (closeReceiptModal) {
        closeReceiptModal.addEventListener('click', () => {
            receiptModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (doneReceiptBtn) {
        doneReceiptBtn.addEventListener('click', () => {
            receiptModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
}


// Load logbook entries from API
window.loadLogbookEntries = async function () {
    try {
        const response = await authenticatedFetch('/logbook/entries');
        if (!response) return;

        const result = await response.json();

        if (response.ok && result.success) {
            window.lastLogbookEntries = result.entries; // Cache for view switching
            console.log('Logbook entries:', result.entries);

            renderLogbookEntries(result.entries);
        }
    } catch (err) {
        console.error('Error loading logs:', err);
    }
};

// Render entries to the UI
function renderLogbookEntries(entries) {
    const currentWeekLogsContainer = document.getElementById('currentWeekLogs');
    const pastWeeksStack = document.querySelector('.past-weeks-stack');
    if (!currentWeekLogsContainer) return;

    if (!entries || entries.length === 0) {
        currentWeekLogsContainer.innerHTML = '<div style="text-align: center; padding: 40px 24px; color: var(--gray-400); background: var(--gray-50); border-radius: var(--radius-xl); border: 1px dashed var(--gray-200);">No entries yet. Add your first log!</div>';
        if (pastWeeksStack) pastWeeksStack.innerHTML = '';
        return;
    }

    // Determine actual "current" week for sectioning
    const activeClassWeek = window.currentClassData ? Number(window.currentClassData.weekNumber) : 0;
    const latestLoggedWeek = entries[0] && entries[0].week_number ? Number(entries[0].week_number) : 0;

    // We favor the highest week number between active class and latest activity
    let currentWeekNum = Math.max(activeClassWeek, latestLoggedWeek);

    // Fallback: If currentWeekNum results in 0, but we have entries, use the latest entry's week
    if (!currentWeekNum && entries.length > 0) {
        currentWeekNum = latestLoggedWeek || 'N/A';
    }

    // Group entries by week
    const groupedEntries = entries.reduce((groups, entry) => {
        const week = entry.week_number || 'N/A';
        if (!groups[week]) groups[week] = [];
        groups[week].push(entry);
        return groups;
    }, {});

    // Helper to render a single log item
    const renderLogItem = (entry, index, isCurrentWeek) => {
        const date = new Date(entry.created_at).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
        const dayLabel = entry.day_number ? `Day ${entry.day_number}` : 'No Day';
        const isLatest = isCurrentWeek && index === 0;

        return `
            <div class="logbook-entry-expandable" data-id="${entry.entry_id}">
                <div class="logbook-week-header">
                    <div style="flex: 1;">
                        <div class="logbook-day-tag">${date} • ${dayLabel} ${isLatest ? '• Latest' : ''}</div>
                        <div class="logbook-entry-preview">${entry.entry.substring(0, 60)}${entry.entry.length > 60 ? '...' : ''}</div>
                    </div>
                    <div class="week-collapse-toggle">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="6,9 12,15 18,9" />
                        </svg>
                    </div>
                </div>
                <div class="log-entry-content" style="display: none;">
                    <div class="log-entry-class-details">
                        <div style="font-size: 11px; font-weight: 700; color: var(--gray-500); text-transform: uppercase; margin-bottom: 8px;">Class Details</div>
                        <div style="font-weight: 700; font-size: 14px; color: var(--gray-900);">${entry.title}</div>
                        <div style="font-size: 12px; color: var(--gray-600);">Tutor: ${entry.instructor_name || 'TBA'}</div>
                    </div>
                    <div class="log-entry-full">
                        <div style="font-size: 11px; font-weight: 700; color: var(--gray-500); text-transform: uppercase; margin-bottom: 8px;">Your Learning Log</div>
                        <p style="font-size: 14px; color: var(--gray-800); line-height: 1.6;">${entry.entry}</p>
                        <div style="display: flex; gap: 8px; margin-top: 12px;">
                            <button class="project-action-btn mini share-btn" style="padding: 6px 12px; font-size: 11px;" 
                                data-topic="${entry.title.replace(/"/g, '&quot;')}" 
                                data-content="${entry.entry.replace(/"/g, '&quot;')}"
                                data-week="${entry.week_number || ''}"
                                data-day="${entry.day_number || ''}">
                                Share Card
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    // 1. Render Current Week
    let currentWeekEntries = (groupedEntries[currentWeekNum] || []).sort((a, b) => (b.day_number || 0) - (a.day_number || 0));

    // If "This Week" is calculated but empty, and we have N/A logs, show N/A logs in "This Week" instead of leaving it empty
    if (currentWeekEntries.length === 0 && groupedEntries['N/A']) {
        currentWeekEntries = groupedEntries['N/A'];
        currentWeekNum = 'N/A';
    }

    currentWeekLogsContainer.innerHTML = currentWeekEntries.map((entry, idx) => renderLogItem(entry, idx, true)).join('');

    // Header Management
    const isWeeklyView = document.querySelector('.view-tab[data-view="weekly"]')?.classList.contains('active');
    const thisWeekHeader = document.querySelector('.logbook-section-header:nth-of-type(1)');
    const pastWeeksHeaderSection = document.querySelector('.logbook-section-header:nth-of-type(2)');
    const pastWeeksTitle = pastWeeksHeaderSection?.querySelector('h3');

    if (thisWeekHeader) {
        thisWeekHeader.style.display = isWeeklyView ? 'none' : 'flex';
        const thisWeekTitle = thisWeekHeader.querySelector('h3');
        if (thisWeekTitle) {
            thisWeekTitle.textContent = currentWeekNum ? `Week ${currentWeekNum} (This Week)` : "This Week";
        }
    }

    if (pastWeeksTitle) {
        pastWeeksTitle.textContent = isWeeklyView ? "Program Timeline" : "Past Weeks";
        // Also ensure the past weeks section header is always visible if there are logs
        if (pastWeeksHeaderSection) pastWeeksHeaderSection.style.display = 'flex';
    }

    // Update summary card
    const summaryWeek = document.querySelector('.summary-week-badge');
    const summaryCount = document.querySelector('.summary-logs-count');
    const summaryHint = document.querySelector('.summary-logs-hint');

    if (summaryWeek) summaryWeek.textContent = currentWeekNum ? `Week ${currentWeekNum}` : 'No Class';
    if (summaryCount) summaryCount.textContent = `${currentWeekEntries.length} Logs Completed`;

    if (summaryHint) {
        if (currentWeekEntries.length === 0) {
            summaryHint.textContent = "Start logging your learning today!";
        } else if (currentWeekEntries.length < 5) {
            summaryHint.textContent = `${5 - currentWeekEntries.length} more logs to complete your weekly goal!`;
        } else {
            summaryHint.textContent = "Weekly goal achieved! Great work!";
        }
    }

    // 2. Render Past Weeks (and current week as a card for Weekly View)
    if (pastWeeksStack) {
        const sortedWeeks = Object.keys(groupedEntries)
            .map(Number)
            .sort((a, b) => b - a); // Newest first

        const isWeeklyView = document.querySelector('.view-tab[data-view="weekly"]')?.classList.contains('active');

        // Count visible past weeks
        const hasVisiblePastWeeks = sortedWeeks.some(w => w !== Number(currentWeekNum));

        if (sortedWeeks.length === 0 || (!isWeeklyView && !hasVisiblePastWeeks)) {
            pastWeeksStack.innerHTML = '<div style="text-align: center; padding: 24px; color: var(--gray-400); font-size: 13px; background: var(--gray-50); border: 1px dashed var(--gray-200); border-radius: var(--radius-lg);">No past logs found in your history.</div>';
        } else {
            pastWeeksStack.innerHTML = sortedWeeks.map(week => {
                const weekLogs = (groupedEntries[week] || []).sort((a, b) => (b.day_number || 0) - (a.day_number || 0));
                const isCurrent = String(week) === String(currentWeekNum);

                if (isCurrent && !isWeeklyView) return ''; // Skip rendering in dual section if not in weekly view

                // Construct a summary of days (e.g., "Days 1, 2, 4 complete")
                const daysLogged = [...new Set(weekLogs.map(l => l.day_number).filter(Boolean))].sort((a, b) => a - b);
                const daySummary = daysLogged.length > 0 ? `Days ${daysLogged.join(', ')} complete` : `${weekLogs.length} logs completed`;

                return `
                    <div class="week-collapse-card ${isCurrent ? 'past-week-card-current' : ''}" 
                         data-week="${week}" 
                         style="${(isCurrent && !isWeeklyView) ? 'display: none;' : ''}">
                        <div class="week-collapse-header">
                            <div class="week-collapse-info">
                                <span class="week-collapse-title">Week ${week} Logs ${isCurrent ? '• Active' : ''}</span>
                                <span class="week-collapse-summary">${daySummary}</span>
                            </div>
                            <div class="week-collapse-toggle">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6,9 12,15 18,9" />
                                </svg>
                            </div>
                        </div>
                        <div class="week-collapse-content" style="display: none; padding: 12px 0;">
                            <div class="logs-stack">
                                ${weekLogs.map((entry, idx) => renderLogItem(entry, idx, isCurrent)).join('')}
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }

    // Re-attach listeners for expansion and share buttons
    initializeLogbookExpansionListeners();
    initializeShareButtons();
    initializePastWeekListeners();
}

function initializePastWeekListeners() {
    const weekCards = document.querySelectorAll('.week-collapse-card');
    weekCards.forEach(card => {
        const header = card.querySelector('.week-collapse-header');
        header.onclick = () => {
            const content = card.querySelector('.week-collapse-content');
            const isExpanded = card.classList.contains('expanded');

            // Close other week cards
            weekCards.forEach(c => {
                if (c !== card) {
                    c.classList.remove('expanded');
                    const cContent = c.querySelector('.week-collapse-content');
                    if (cContent) cContent.style.display = 'none';
                }
            });

            if (isExpanded) {
                card.classList.remove('expanded');
                if (content) content.style.display = 'none';
            } else {
                card.classList.add('expanded');
                if (content) content.style.display = 'block';
            }
        };
    });
}

function initializeLogbookExpansionListeners() {
    const expandables = document.querySelectorAll('.logbook-entry-expandable');
    expandables.forEach(entry => {
        const header = entry.querySelector('.logbook-week-header');
        header.onclick = () => { // Use onclick to replace existing listeners if any
            const content = entry.querySelector('.log-entry-content');
            const isExpanded = entry.classList.contains('expanded');

            // Close others (Accordion style)
            expandables.forEach(e => {
                if (e !== entry) {
                    e.classList.remove('expanded');
                    const c = e.querySelector('.log-entry-content');
                    if (c) c.style.display = 'none';
                }
            });

            // Toggle current
            if (isExpanded) {
                entry.classList.remove('expanded');
                if (content) content.style.display = 'none';
            } else {
                entry.classList.add('expanded');
                if (content) content.style.display = 'block';
            }
        };
    });
}

function initializeShareButtons() {
    const container = document.getElementById('currentWeekLogs');
    if (!container) return;

    container.querySelectorAll('.share-btn').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            if (typeof window.generateShareableCard === 'function') {
                window.generateShareableCard({
                    topic: btn.dataset.topic,
                    content: btn.dataset.content,
                    week: btn.dataset.week,
                    day: btn.dataset.day
                });
            }
        };
    });
}
