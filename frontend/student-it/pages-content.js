/**
 * StudentIT - Pages Content Loader
 * Populates Projects, Logbook, Payments, and Resources pages
 */

document.addEventListener('DOMContentLoaded', () => {
    // Populate Projects Page
    const projectsPage = document.getElementById('projects');
    if (projectsPage) {
        window.fetchAndRenderProjects();
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

// Setup Project Event Listeners (called after render)
function setupProjectEventListeners() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    if (!filterTabs.length) return;

    const projectPanel = document.getElementById('projectSubmissionPanel');
    const closeProjectPanel = document.getElementById('closeProjectPanel');
    const submitBtns = document.querySelectorAll('#submitProjectBtn, .submit-btn-minimal, .project-submit-btn-premium');
    const projectsViewContainer = document.getElementById('projectsViewContainer');

    // Filter Tabs Logic
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const filter = tab.dataset.filter;

            // Toggle active state on tabs
            filterTabs.forEach(btn => btn.classList.toggle('active', btn === tab));

            // Show/hide project containers
            const cards = document.querySelectorAll('.project-featured-card, .project-modern-item, .projects-section');

            cards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = '';
                } else if (card.classList.contains('projects-section')) {
                    // Header logic: Show section if it contains at least one card matching the filter
                    const hasVisible = card.querySelectorAll(`.project-featured-card.${filter}, .project-modern-item.${filter}`).length > 0;
                    card.style.display = hasVisible ? '' : 'none';
                } else {
                    // Item logic: Show if class matches filter
                    card.style.display = card.classList.contains(filter) ? '' : 'none';
                }
            });
        });
    });

    // Panel Open/Close Logic
    const openPanel = (id, title, desc, isViewOnly = false) => {
        if (projectPanel) {
            document.getElementById('submittingProjectId').value = id;
            document.getElementById('submittingProjectTitle').textContent = title;
            document.getElementById('submittingProjectDesc').textContent = desc;

            const form = document.getElementById('projectForm');
            const submitBtn = document.getElementById('confirmProjectSubmit');
            const addImgBtn = document.getElementById('addScreenshotBtn');
            const gradeInfo = document.getElementById('gradeInfoContainer');
            const panelTitle = projectPanel.querySelector('.panel-title');

            if (isViewOnly) {
                if (panelTitle) panelTitle.textContent = 'Review Submission';
                if (form) form.querySelectorAll('input, textarea').forEach(el => el.disabled = true);
                if (submitBtn) submitBtn.style.display = 'none';
                if (addImgBtn) addImgBtn.style.display = 'none';
                if (gradeInfo) gradeInfo.style.display = 'block';
            } else {
                if (panelTitle) panelTitle.textContent = 'Submit Project';
                if (form) form.querySelectorAll('input, textarea').forEach(el => el.disabled = false);
                if (submitBtn) {
                    submitBtn.style.display = 'block';
                    submitBtn.querySelector('span').textContent = 'Confirm Submission';
                    delete submitBtn.dataset.isUpdate;
                }
                if (addImgBtn) addImgBtn.style.display = 'flex';
                if (gradeInfo) gradeInfo.style.display = 'none';

                // Reset form values if not viewing
                if (explanationField) explanationField.value = '';
                if (explanationCount) explanationCount.textContent = '0';
                const githubInput = document.getElementById('githubLink');
                if (githubInput) githubInput.value = '';
                uploadedScreenshots = [];
                renderScreenshotPreviews();
            }

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

    async function viewSubmission(projectId, title, desc) {
        try {
            // Show panel with loading state or just open it
            openPanel(projectId, title, desc, true);

            const response = await window.authenticatedFetch(`/project/api/${projectId}`);
            if (!response || !response.ok) throw new Error('Failed to fetch submission details');

            const result = await response.json();
            if (result.success && result.data.submission) {
                const sub = result.data.submission;

                // Populate fields
                if (explanationField) {
                    explanationField.value = sub.solution_approach;
                    const words = sub.solution_approach.trim().split(/\s+/).filter(w => w.length > 0);
                    if (explanationCount) explanationCount.textContent = words.length;
                }

                const githubInput = document.getElementById('githubLink');
                if (githubInput) githubInput.value = sub.github_link;

                // Populate screenshots
                const screenshots = typeof sub.screenshots === 'string' ? JSON.parse(sub.screenshots) : sub.screenshots;
                uploadedScreenshots = screenshots.map(src => ({ dataUrl: src }));
                renderScreenshotPreviews();

                // Update Grade Info
                const gradeBadge = document.getElementById('panelGradeBadge');
                const submittedAt = document.getElementById('panelSubmittedAt');
                const editBtn = document.getElementById('editSubmissionBtn');

                if (gradeBadge) {
                    if (sub.grade) {
                        gradeBadge.textContent = `Grade: ${sub.grade}`;
                        gradeBadge.style.background = 'var(--success-light)';
                        gradeBadge.style.color = 'var(--success)';
                        if (editBtn) editBtn.style.display = 'none';
                    } else {
                        gradeBadge.textContent = 'Status: Submitted';
                        gradeBadge.style.background = 'var(--warning-light)';
                        gradeBadge.style.color = 'var(--warning)';
                        // Show edit button only if not graded
                        if (editBtn) editBtn.style.display = 'block';
                    }
                }

                if (submittedAt) {
                    const date = new Date(sub.submitted_at);
                    submittedAt.textContent = `Submitted on ${date.toLocaleDateString()} at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
                }

                // In view mode, we remove the remove buttons from screenshots
                document.querySelectorAll('.screenshot-remove-btn').forEach(btn => btn.style.display = 'none');
            }
        } catch (error) {
            console.error('Error viewing submission:', error);
            showToast('Could not load submission details', 'error');
            closePanel();
        }
    }

    // Add Edit Button Listener
    const editSubmissionBtn = document.getElementById('editSubmissionBtn');
    if (editSubmissionBtn) {
        editSubmissionBtn.addEventListener('click', () => {
            const form = document.getElementById('projectForm');
            const submitBtn = document.getElementById('confirmProjectSubmit');
            const addImgBtn = document.getElementById('addScreenshotBtn');
            const panelTitle = projectPanel.querySelector('.panel-title');
            const editBtn = document.getElementById('editSubmissionBtn');

            // Toggle to Edit Mode
            if (panelTitle) panelTitle.textContent = 'Edit Submission';
            if (form) form.querySelectorAll('input, textarea').forEach(el => el.disabled = false);
            if (submitBtn) {
                submitBtn.style.display = 'block';
                submitBtn.querySelector('span').textContent = 'Update Submission';
                submitBtn.dataset.isUpdate = 'true'; // Flag for the submit handler
            }
            if (addImgBtn) addImgBtn.style.display = 'flex';
            if (editBtn) editBtn.style.display = 'none';

            // Show remove buttons on screenshots
            document.querySelectorAll('.screenshot-remove-btn').forEach(btn => btn.style.display = 'flex');
        });
    }

    submitBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = btn.closest('.project-featured-card') || btn.closest('.project-modern-item');

            // Prefer data attributes if available (premium button has them)
            const id = btn.dataset.id || card.dataset.id;
            const title = btn.dataset.title || card.querySelector('.project-title').textContent;
            const desc = btn.dataset.desc || card.querySelector('.project-description').textContent;

            if (btn.textContent.includes('Start')) {
                showToast(`Started project: ${title}`);
                btn.textContent = 'Submit';
                btn.classList.remove('secondary');
                return;
            }

            if (btn.textContent.trim() === 'View') {
                viewSubmission(id, title, desc);
            } else {
                openPanel(id, title, desc);
            }
        });
    });

    // Image Compression Utility
    async function compressImage(file, maxWidth = 1200, quality = 0.7) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target.result;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    let width = img.width;
                    let height = img.height;

                    // Resize if larger than maxWidth
                    if (width > maxWidth) {
                        height = (maxWidth / width) * height;
                        width = maxWidth;
                    }

                    canvas.width = width;
                    canvas.height = height;

                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);

                    // Export to base64 with quality factor
                    const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
                    resolve(compressedDataUrl);
                };
                img.onerror = reject;
            };
            reader.onerror = reject;
        });
    }

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

    // Screenshot Upload Logic
    const screenshotInput = document.getElementById('screenshotInput');
    const screenshotPreviews = document.getElementById('screenshotPreviews');
    const addScreenshotBtn = document.getElementById('addScreenshotBtn');
    const screenshotCountEl = document.getElementById('screenshotCount');
    let uploadedScreenshots = [];

    if (addScreenshotBtn && screenshotInput) {
        addScreenshotBtn.addEventListener('click', () => {
            screenshotInput.click();
        });

        screenshotInput.addEventListener('change', (e) => {
            const files = Array.from(e.target.files);

            files.forEach(file => {
                if (uploadedScreenshots.length >= 3) {
                    showToast('Maximum 3 screenshots allowed', 'error');
                    return;
                }

                if (!file.type.startsWith('image/')) {
                    showToast('Please upload image files only', 'error');
                    return;
                }

                // Pre-compression size check (prevent massive files from crashing browser)
                if (file.size > 10 * 1024 * 1024) { // 10MB limit for raw upload
                    showToast('Image file is too large (max 10MB before compression)', 'error');
                    return;
                }

                // Compress image before adding
                compressImage(file, 1200, 0.7).then(compressedDataUrl => {
                    // Final size check for the base64 string
                    // Data URL length is ~1.37x the binary size
                    const sizeInBytes = Math.floor((compressedDataUrl.length * 3) / 4);
                    if (sizeInBytes > 1024 * 1024) { // 1MB limit for compressed image
                        showToast('Compressed image is still too large. Try a less complex screenshot.', 'error');
                        return;
                    }

                    uploadedScreenshots.push({
                        file: file,
                        dataUrl: compressedDataUrl
                    });
                    renderScreenshotPreviews();
                }).catch(err => {
                    console.error('Compression error:', err);
                    showToast('Failed to process image', 'error');
                });
            });

            // Reset input so same file can be selected again
            screenshotInput.value = '';
        });
    }

    function renderScreenshotPreviews() {
        if (!screenshotPreviews) return;

        screenshotPreviews.innerHTML = uploadedScreenshots.map((screenshot, index) => `
            <div class="screenshot-preview-item" data-index="${index}">
                <img src="${screenshot.dataUrl}" alt="Screenshot ${index + 1}">
                <button type="button" class="screenshot-remove-btn" data-index="${index}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
            </div>
        `).join('');

        // Update count
        if (screenshotCountEl) {
            screenshotCountEl.textContent = uploadedScreenshots.length;
            screenshotCountEl.parentElement.classList.toggle('error', uploadedScreenshots.length < 2);
        }

        // Hide add button if max reached
        if (addScreenshotBtn) {
            addScreenshotBtn.classList.toggle('hidden', uploadedScreenshots.length >= 3);
        }

        // Add remove handlers
        document.querySelectorAll('.screenshot-remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const index = parseInt(btn.dataset.index);
                uploadedScreenshots.splice(index, 1);
                renderScreenshotPreviews();
            });
        });
    }

    // Confirm submission
    const confirmSubmitBtn = document.getElementById('confirmProjectSubmit');
    if (confirmSubmitBtn) {
        confirmSubmitBtn.addEventListener('click', async () => {
            const projectId = document.getElementById('submittingProjectId').value;
            const githubLink = document.getElementById('githubLink').value;
            const explanation = explanationField ? explanationField.value : '';

            if (!projectId) {
                showToast('Error: Project ID missing', 'error');
                return;
            }

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

            // Validate screenshots
            if (uploadedScreenshots.length < 2) {
                showToast('Please upload at least 2 screenshots', 'error');
                return;
            }

            if (uploadedScreenshots.length > 3) {
                showToast('Maximum 3 screenshots allowed', 'error');
                return;
            }

            // Prepare payload
            const screenshotData = uploadedScreenshots.map(s => s.dataUrl);

            // Submission
            confirmSubmitBtn.disabled = true;
            const originalBtnText = confirmSubmitBtn.querySelector('span').textContent;
            confirmSubmitBtn.querySelector('span').textContent = 'Submitting...';

            try {
                const isUpdate = confirmSubmitBtn.dataset.isUpdate === 'true';
                const method = isUpdate ? 'PUT' : 'POST';

                const response = await window.authenticatedFetch(`/project/api/${projectId}/submit`, {
                    method: method,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        solutionApproach: explanation,
                        githubLink: githubLink,
                        screenshots: screenshotData
                    })
                });

                if (!response) return; // Redirected via auth helper

                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.message || 'Submission failed');
                }

                showToast('Project submitted successfully!');

                // Reset form state BEFORE refresh
                if (explanationField) explanationField.value = '';
                if (explanationCount) explanationCount.textContent = '0';
                const githubInput = document.getElementById('githubLink');
                if (githubInput) githubInput.value = '';
                uploadedScreenshots = [];
                renderScreenshotPreviews();

                closePanel();

                // Refresh projects list (async)
                fetchAndRenderProjects();

            } catch (error) {
                console.error('Submission error:', error);
                showToast(error.message, 'error');
            } finally {
                confirmSubmitBtn.disabled = false;
                confirmSubmitBtn.querySelector('span').textContent = originalBtnText;
            }
        });
    }

    // Countdown Timer Logic
    function updateCountdown() {
        const countdownEl = document.getElementById('projectCountdown');
        const timerValue = document.querySelector('.countdown-value'); // Updated selector

        if (!countdownEl || !timerValue) return;

        const dueDateStr = countdownEl.getAttribute('data-due');
        if (!dueDateStr) return;

        const deadline = new Date(dueDateStr).getTime();
        const now = new Date().getTime();
        const distance = deadline - now;

        if (distance < 0) {
            timerValue.textContent = "Overdue";
            countdownEl.classList.add('overdue'); // Ensure CSS matches
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        timerValue.textContent = `${days}d ${hours}h ${minutes}m`;
    }

    // Initial call and interval
    updateCountdown();
    // Clear any existing interval to prevent duplicates if function called multiple times?
    // Since setupProjectEventListeners is called on re-render, we should check if interval exists.
    // However, intervals are global unless stored.
    // For simplicity, I'll use a property on window or just let it run (might be problematic).

    if (window.projectCountdownInterval) clearInterval(window.projectCountdownInterval);
    window.projectCountdownInterval = setInterval(updateCountdown, 60000);

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

// Fetch and Render Projects (Dynamic)
window.fetchAndRenderProjects = async function () {
    const projectsPage = document.getElementById('projects');
    if (!projectsPage) return;

    // Show loading skeleton or spinner
    projectsPage.innerHTML = `
        <div class="projects-view-container">
            <div style="padding: 40px; text-align: center; color: var(--gray-500);">
                <div class="spinner" style="width: 30px; height: 30px; border: 3px solid var(--gray-200); border-top-color: var(--primary); border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 16px;"></div>
                <p>Loading your projects...</p>
            </div>
        </div>
        <style>@keyframes spin { to { transform: rotate(360deg); } }</style>
    `;

    try {
        const response = await window.authenticatedFetch('/project/api');

        if (!response) return; // Redirected to login

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || `Failed to fetch projects (${response.status})`);
        }

        const result = await response.json();

        if (result.success) {
            const { projects, stats } = result.data;
            renderProjectsHTML(projectsPage, projects, stats);
            setupProjectEventListeners(); // Initialize listeners
        } else {
            throw new Error(result.message || 'Failed to load projects');
        }

    } catch (error) {
        console.error('Error loading projects:', error);
        projectsPage.innerHTML = `
            <div class="projects-view-container">
                <div style="padding: 40px; text-align: center; color: var(--danger);">
                    <p>Error loading projects: ${error.message}</p>
                    <button class="project-action-btn secondary" onclick="fetchAndRenderProjects()" style="margin-top: 16px;">Try Again</button>
                </div>
            </div>
        `;
    }
}

function renderProjectsHTML(container, projects, stats) {
    // 1. Separate projects
    const pendingProjects = projects.filter(p => !p.submission_id && (p.project_status === 'active'));
    const completedProjects = projects.filter(p => p.submission_id);

    // 2. Identify Featured Project (First pending project)
    const featuredProject = pendingProjects.length > 0 ? pendingProjects[0] : null;
    const otherPendingProjects = pendingProjects.length > 0 ? pendingProjects.slice(1) : [];

    // Helper functions
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    const getCountdown = (dueDate) => {
        const now = new Date();
        const due = new Date(dueDate);
        const diff = due - now;

        if (diff < 0) return 'Overdue';

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        if (days < 0) return 'Overdue';
        return `${days}d ${hours}h`;
    };

    container.innerHTML = `
        <div class="projects-view-container" id="projectsViewContainer">
            <!-- Filter Tabs at Top -->
            <div class="filter-tabs-top">
                <button class="filter-tab active" data-filter="all">All Projects</button>
                <button class="filter-tab" data-filter="pending">Pending</button>
                <button class="filter-tab" data-filter="completed">Completed</button>
            </div>

            <div class="projects-desktop-layout">
                <!-- Main Column (Left/Center) -->
                <div class="projects-main-column">
                    <!-- Top Priority: Featured Pending Project -->
                    ${featuredProject ? `
                    <div class="project-featured-card pending" id="priorityProject" data-id="${featuredProject.project_id}">
                        <div class="countdown-modern urgent" id="projectCountdown" data-due="${featuredProject.due_date}">
                            <span class="countdown-text">Due in <span class="countdown-value">${getCountdown(featuredProject.due_date)}</span></span>
                        </div>
                        <div class="featured-tag">Upcoming Deadline</div>
                        <div class="project-header">
                            <h3 class="project-title">${featuredProject.title}</h3>
                        </div>
                        
                        <div class="project-description-wrapper">
                            <p class="project-description truncated">${featuredProject.description}</p>
                            <button class="see-more-link">See more</button>
                        </div>

                        <div class="featured-footer">
                            <button class="project-submit-btn-premium" data-id="${featuredProject.project_id}" data-title="${featuredProject.title}" data-desc="${featuredProject.description}">
                                <span>Submit Project</span>
                            </button>
                        </div>
                    </div>
                    ` : '<div class="project-featured-card"><div style="text-align: center; color: var(--gray-500); padding: 20px;">🎉 No pending projects! You are all caught up.</div></div>'}

                    <!-- Pending Projects Section -->
                    <div class="projects-section">
                        <h4 class="projects-section-title">Pending Projects</h4>
                        <div class="projects-grid">
                            ${otherPendingProjects.length > 0 ? otherPendingProjects.map(p => `
                            <div class="project-modern-item pending" data-id="${p.project_id}">
                                <div class="project-main">
                                    <div class="project-info-stack">
                                        <h3 class="project-title">${p.title}</h3>
                                        <div class="project-description-wrapper">
                                            <p class="project-description truncated">${p.description}</p>
                                            <button class="see-more-link">See more</button>
                                        </div>
                                    </div>
                                    <div class="project-meta-row">
                                        <div class="project-due-inline">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                                            </svg>
                                            <span>Due ${formatDate(p.due_date)}</span>
                                        </div>
                                        <button class="submit-btn-minimal" data-id="${p.project_id}" data-title="${p.title}" data-desc="${p.description}">Submit</button>
                                    </div>
                                </div>
                            </div>
                            `).join('') : '<div class="empty-state-msg" style="padding: 24px; text-align: center; color: var(--gray-400); background: var(--gray-50); border-radius: var(--radius-lg); border: 1px dashed var(--gray-200);">No other pending projects</div>'}
                        </div>
                    </div>
                </div>

                <!-- Side Column (Right) -->
                <aside class="projects-side-column">
                    <div class="side-panel-card">
                        <h4 class="side-panel-title">Project Overview</h4>
                    </div>

                    <!-- Stats Card -->
                    <div class="side-stats-card">
                        <div class="stat-item">
                            <span class="stat-label">Total Allocated</span>
                            <span class="stat-value">${stats.total}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Pending</span>
                            <span class="stat-value">${stats.pending}</span>
                        </div>
                         <div class="stat-item">
                            <span class="stat-label">Completed</span>
                            <span class="stat-value">${stats.completed}</span>
                        </div>
                    </div>

                    <!-- Completed Section in Sidebar for Desktop -->
                    <div class="projects-section desktop-only">
                        <h4 class="projects-section-title">Recently Completed</h4>
                        ${completedProjects.length > 0 ? completedProjects.slice(0, 3).map(p => `
                        <div class="project-modern-item completed" data-id="${p.project_id}">
                            <div class="project-main">
                                <h3 class="project-title">${p.title}</h3>
                                <div class="project-meta-row" style="margin-top: 8px; justify-content: space-between; align-items: center;">
                                    <div class="project-grade-badge">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                                        </svg>
                                        <span>${p.grade ? `Grade: ${p.grade}` : 'Submitted'}</span>
                                    </div>
                                    <button class="submit-btn-minimal secondary" data-id="${p.project_id}" data-title="${p.title}" data-desc="${p.description}">View</button>
                                </div>
                            </div>
                        </div>
                        `).join('') : '<div style="text-align: center; color: var(--gray-400); font-size: 13px;">No completed projects yet</div>'}
                    </div>
                </aside>
            </div>

            <!-- Mobile Completed Section -->
            <section class="projects-mobile-list mobile-only">
                <div class="projects-section">
                    <h4 class="projects-section-title">Completed</h4>
                     ${completedProjects.length > 0 ? completedProjects.map(p => `
                    <div class="project-modern-item completed" data-id="${p.project_id}">
                        <div class="project-main">
                            <div class="project-info-stack">
                                <h3 class="project-title">${p.title}</h3>
                                <div class="project-description-wrapper">
                                    <p class="project-description truncated">${p.description}</p>
                                    <button class="see-more-link">See more</button>
                                </div>
                            </div>
                            <div class="project-meta-row">
                                <div class="project-grade-badge">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                                    </svg>
                                    <span>${p.grade ? `Grade: ${p.grade}` : 'Submitted'}</span>
                                </div>
                                <button class="submit-btn-minimal secondary" data-id="${p.project_id}" data-title="${p.title}" data-desc="${p.description}">View</button>
                            </div>
                        </div>
                    </div>
                    `).join('') : '<div style="text-align: center; color: var(--gray-400); padding: 20px;">No completed projects yet</div>'}
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
                    <h2 class="panel-title" id="projectPanelTitle">Submit Project</h2>
                </div>
                
                <div class="panel-scroll-content">
                    <div class="project-context-card">
                        <span class="context-label">Project</span>
                        <h3 class="context-title" id="submittingProjectTitle">Project Title</h3>
                        <div class="context-desc" id="submittingProjectDesc">Description...</div>
                        
                        <div id="gradeInfoContainer" style="display: none; margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--gray-100);">
                            <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div id="panelGradeBadge" class="project-grade-badge" style="padding: 6px 12px; border-radius: 8px; font-weight: 600;">Submitted</div>
                                    <span id="panelSubmittedAt" style="font-size: 12px; color: var(--gray-400);"></span>
                                </div>
                                <button type="button" id="editSubmissionBtn" class="project-action-btn secondary mini" style="display: none; padding: 6px 12px; font-size: 11px;">Edit Submission</button>
                            </div>
                        </div>
                    </div>

                    <form class="modern-submission-form" id="projectForm">
                        <input type="hidden" id="submittingProjectId" value="">
                        
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

                        <div class="form-section">
                            <label class="modern-label">Project Screenshots</label>
                            <p class="label-hint">Upload 2-3 screenshots (Max 1MB each). Images are auto-compressed.</p>
                            <div class="screenshot-upload-area" id="screenshotUploadArea">
                                <input type="file" id="screenshotInput" accept="image/*" multiple hidden>
                                <div class="screenshot-previews" id="screenshotPreviews"></div>
                                <button type="button" class="add-screenshot-btn" id="addScreenshotBtn">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                        <circle cx="8.5" cy="8.5" r="1.5"/>
                                        <polyline points="21 15 16 10 5 21"/>
                                    </svg>
                                    <span>Add Screenshots</span>
                                </button>
                            </div>
                            <div class="screenshot-count"><span id="screenshotCount">0</span> / 3 images (min 2)</div>
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
}
