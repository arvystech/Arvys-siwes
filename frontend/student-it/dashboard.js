/**
 * Dashboard Data Loader
 * Fetches and populates home page data
 */

// Load dashboard data on page load
async function loadDashboardData() {
    try {
        const response = await authenticatedFetch('/student/api/dashboard');
        if (!response) return;

        if (!response.ok) {
            throw new Error('Failed to load dashboard data');
        }

        const result = await response.json();

        if (!result.success) {
            throw new Error(result.message || 'Failed to load dashboard data');
        }

        const { data } = result;

        // Populate student info in header
        populateStudentInfo(data.student);

        // Populate current class info
        populateCurrentClass(data.currentClass);

        // Populate attendance stats
        populateAttendanceStats(data.attendanceStats);

        // Update logbook status
        updateLogbookStatus(data.logbookStatus);

        // Populate upcoming project
        populateUpcomingProject(data.upcomingProject);

        // Store the full current class data globally for logbook population
        window.currentClassData = data.currentClass;

        console.log('Dashboard data loaded successfully');

    } catch (error) {
        console.error('Error loading dashboard:', error);
        showToast('Failed to load dashboard data', 'error');
    }
}

// Populate student info (name, avatar)
function populateStudentInfo(student) {
    // Update user name
    const userNameEl = document.querySelector('.user-name');
    if (userNameEl && student.name) {
        userNameEl.textContent = student.name;
    }

    // Update avatar with initials
    const avatarEl = document.querySelector('.avatar span');
    if (avatarEl && student.name) {
        const initials = student.name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .substring(0, 2);
        avatarEl.textContent = initials;
    }

    // Store student data globally for other uses
    window.currentStudent = student;
}

// Populate current class information
function populateCurrentClass(currentClass) {
    const classPanel = document.querySelector('.class-panel');
    const statusBanner = document.getElementById('statusBanner');
    const bannerText = document.getElementById('bannerStatusText');

    if (!currentClass) {
        // No current class - hide panel and update banner
        if (classPanel) classPanel.style.display = 'none';
        if (statusBanner) {
            statusBanner.classList.remove('ongoing', 'upcoming', 'completed');
            statusBanner.classList.add('no-class');

            const liveIndicator = statusBanner.querySelector('.live-status-indicator');
            if (liveIndicator) liveIndicator.style.display = 'none';

            if (bannerText) bannerText.textContent = 'No class scheduled for today';
        }
        console.log('No current class scheduled');
        return;
    }

    // Class exists - show panel and update banner
    if (classPanel) classPanel.style.display = 'block';

    // Update Banner based on precise status
    if (statusBanner) {
        statusBanner.className = 'status-banner'; // Reset
        const liveIndicator = statusBanner.querySelector('.live-status-indicator');
        if (liveIndicator) liveIndicator.style.display = 'flex'; // Restore visibility

        const pulseDot = liveIndicator ? liveIndicator.querySelector('.pulse-dot') : null;
        const liveLabel = liveIndicator ? liveIndicator.querySelector('.live-label') : null;

        if (currentClass.status === 'ongoing') {
            statusBanner.classList.add('ongoing');
            if (bannerText) bannerText.textContent = 'Class is ongoing';
            if (pulseDot) pulseDot.className = 'pulse-dot ongoing';
            if (liveLabel) {
                liveLabel.textContent = 'LIVE';
                liveLabel.style.display = 'inline';
            }
        } else if (currentClass.status === 'upcoming') {
            statusBanner.classList.add('upcoming');
            if (bannerText) bannerText.textContent = `Next class at ${currentClass.startTime}`;
            if (pulseDot) pulseDot.className = 'pulse-dot upcoming';
            if (liveLabel) {
                liveLabel.textContent = 'SOON';
                liveLabel.style.display = 'inline';
                liveLabel.style.color = 'var(--info)';
                liveLabel.style.background = 'rgba(59, 130, 246, 0.1)';
            }
        } else if (currentClass.status === 'completed') {
            statusBanner.classList.add('completed');
            if (bannerText) bannerText.textContent = 'Class has ended for today';
            if (pulseDot) pulseDot.className = 'pulse-dot completed';
            if (liveLabel) liveLabel.style.display = 'none';
        }
    }

    // Update Status Badge inside the card
    const statusBadge = document.getElementById('classStatusBadge');
    if (statusBadge) {
        statusBadge.className = 'class-badge'; // Reset
        statusBadge.classList.add(currentClass.status);
        statusBadge.textContent = currentClass.status.charAt(0).toUpperCase() + currentClass.status.slice(1);
    }

    // Update class topic
    const topicTitleEl = document.getElementById('classTopicTitle');
    if (topicTitleEl && currentClass.topic) {
        topicTitleEl.textContent = currentClass.topic;
    }


    // Update subtopics
    const subtopicsList = document.getElementById('classSubtopics');
    if (subtopicsList && currentClass.subtopics && Array.isArray(currentClass.subtopics)) {
        subtopicsList.innerHTML = currentClass.subtopics
            .map(sub => `<li class="class-subtopic">${sub}</li>`)
            .join('');
    }

    // Update lecturer name
    const lecturerNameEl = document.querySelector('.lecturer-header .meta-value');
    if (lecturerNameEl && currentClass.instructorName) {
        lecturerNameEl.textContent = currentClass.instructorName;
    }

    // Update lecturer avatar
    const lecturerAvatarEl = document.querySelector('.lecturer-avatar img');
    if (lecturerAvatarEl && currentClass.instructorName) {
        lecturerAvatarEl.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentClass.instructorName)}&background=2a38a8&color=fff`;
        lecturerAvatarEl.alt = currentClass.instructorName;
    }

    // Update timing
    const timingEls = document.querySelectorAll('.timing-item span');
    if (timingEls.length >= 2 && currentClass.startTime && currentClass.endTime) {
        timingEls[0].textContent = `${currentClass.startTime} - ${currentClass.endTime}`;
        if (currentClass.duration) {
            timingEls[1].textContent = currentClass.duration;
        }
    }

    // Update attendance indicator
    const attendanceIndicator = document.getElementById('classAttendanceStatus');
    const logBtn = document.getElementById('panelLogAttendanceBtn');

    // Store class ID globally for the button click handler
    window.currentClassId = currentClass.id;

    if (attendanceIndicator && logBtn) {
        if (currentClass.isAttendanceLogged) {
            attendanceIndicator.style.display = 'flex';
            logBtn.style.display = 'none';
        } else {
            attendanceIndicator.style.display = 'none';
            // Show button only if class is ongoing or upcoming (if policy allows)
            // For now, assuming only ongoing or recently completed matters, but let's stick to ongoing.
            // Adjust logic based on requirements. If upcoming, maybe disable it?
            if (currentClass.status === 'ongoing') {
                logBtn.style.display = 'block';
                logBtn.disabled = false;
                logBtn.textContent = 'Log Attendance';
            } else {
                logBtn.style.display = 'none';
            }
        }
    }

    // Fetch and render resources for this class
    fetchAndRenderResources(currentClass.id);
}

// Fetch and render learning resources
async function fetchAndRenderResources(classId) {
    const resourcesContainer = document.querySelector('.class-resources .resource-flex-row');
    const resourcesSection = document.querySelector('.class-resources');

    if (!resourcesSection || !resourcesContainer) return;

    // Show loading state or clear
    resourcesContainer.innerHTML = '<span style="font-size: 13px; opacity: 0.7;">Loading resources...</span>';

    try {
        const response = await authenticatedFetch(`/learning-resources/api/class/${classId}`);

        if (!response || !response.ok) {
            throw new Error('Failed to fetch resources');
        }

        const result = await response.json();

        if (!result.success) {
            throw new Error(result.message || 'Failed to load resources');
        }

        const resources = result.data;

        // Clear loading state
        resourcesContainer.innerHTML = '';

        if (!resources || resources.length === 0) {
            resourcesContainer.innerHTML = '<span style="font-size: 13px; opacity: 0.5; font-style: italic;">No resources available for this session</span>';
            return;
        }

        resources.forEach(resource => {
            const card = document.createElement('a');
            card.href = resource.url;
            card.className = 'resource-mini-card';
            card.target = '_blank'; // Open in new tab
            card.rel = 'noopener noreferrer';

            // Determine Icon based on type
            let iconSvg = '';
            let iconClass = '';

            if (resource.type === 'PDF') {
                iconClass = 'pdf';
                iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`;
            } else if (resource.type === 'YOUTUBE') {
                iconClass = 'video'; // Using 'video' or existing 'lesson' class? let's stick to generic or custom
                // YouTube icon
                iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>`;
            } else {
                iconClass = 'link';
                // Link icon
                iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;
            }

            // Clean up title if too long
            const displayTitle = resource.title.length > 20 ? resource.title.substring(0, 18) + '...' : resource.title;

            card.innerHTML = `
                <div class="resource-icon ${iconClass}" style="${resource.type === 'pdf' ? '' : 'background: rgba(59, 130, 246, 0.1); color: var(--info);'}">
                    ${iconSvg}
                </div>
                <span title="${resource.title}">${displayTitle}</span>
            `;

            resourcesContainer.appendChild(card);
        });

    } catch (error) {
        console.error('Error loading resources:', error);
        resourcesContainer.innerHTML = '<span style="font-size: 13px; color: var(--danger); opacity: 0.8;">Failed to load resources</span>';
    }
}

// Populate attendance statistics
function populateAttendanceStats(stats) {
    // Update attendance percentage
    const attendancePercentageEl = document.querySelector('#statAttendance .home-stat-value');
    if (attendancePercentageEl) {
        attendancePercentageEl.textContent = `${stats.percentage}%`;
    }

    // Update logs count
    const logsCountEl = document.querySelector('#statLogs .home-stat-value');
    if (logsCountEl) {
        logsCountEl.textContent = stats.logsCount;
    }

    // Update projects count
    const projectsCountEl = document.querySelector('#statProjects .home-stat-value');
    if (projectsCountEl) {
        projectsCountEl.textContent = `${stats.projectsCompleted}/${stats.projectsTotal}`;
    }
}

// Update logbook status
function updateLogbookStatus(logbookStatus) {
    const logbookStatusTextEl = document.getElementById('logbookStatusText');
    const logbookCtaBtnEl = document.getElementById('logbookCtaBtn');

    if (logbookStatusTextEl) {
        if (logbookStatus.hasLoggedToday) {
            logbookStatusTextEl.textContent = 'Logged for today';
            if (logbookCtaBtnEl) {
                logbookCtaBtnEl.style.display = 'none';
            }
        } else {
            logbookStatusTextEl.textContent = "You haven't logged today";
            if (logbookCtaBtnEl) {
                logbookCtaBtnEl.style.display = 'flex';
            }
        }
    }
}

// Populate upcoming project in "Up Next" section
function populateUpcomingProject(upcomingProject) {
    const upNextList = document.querySelector('.home-upnext-list');
    if (!upNextList) return;

    // Check if we already have a project item (to avoid duplicates if called multiple times)
    const existingProjectItem = upNextList.querySelector('.home-upnext-item.project-item');
    if (existingProjectItem) existingProjectItem.remove();

    if (!upcomingProject) return;

    // Create project item
    const projectItem = document.createElement('div');
    projectItem.className = 'home-upnext-item project-item';
    projectItem.style.borderLeft = '4px solid var(--accent)';
    projectItem.onclick = () => window.navigateToPage('projects');

    const dueText = upcomingProject.daysUntilDue === 0
        ? 'Due Today'
        : (upcomingProject.daysUntilDue === 1 ? 'Due Tomorrow' : `Due in ${upcomingProject.daysUntilDue} days`);

    projectItem.innerHTML = `
        <div class="home-upnext-icon project" style="background: rgba(255, 107, 107, 0.1); color: var(--accent);">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
        </div>
        <div class="home-upnext-info">
            <span class="home-upnext-name">${upcomingProject.title}</span>
            <span class="home-upnext-meta">${dueText} • Project</span>
        </div>
    `;

    // Prepend to list so it's most visible
    upNextList.prepend(projectItem);
}

// Call this when the dashboard page becomes active
window.loadDashboardData = loadDashboardData;

// Auto-load on initial page load
// Auto-load on initial page load
document.addEventListener('DOMContentLoaded', () => {
    // Attendance Button Listener
    const btn = document.getElementById('panelLogAttendanceBtn');
    if (btn) {
        btn.addEventListener('click', async () => {
            if (!window.currentClassId) return;

            try {
                // Disable button and show loading state
                btn.disabled = true;
                const originalText = btn.textContent;
                btn.textContent = 'Marking...';

                const response = await authenticatedFetch(`/student/api/mark-attendance?classId=${window.currentClassId}&status=present`);

                // Handle non-JSON responses gracefully
                let result;
                try {
                    result = await response.json();
                } catch (e) {
                    throw new Error('Invalid server response');
                }

                if (response.ok && result.success) {
                    showToast('Attendance marked successfully');
                    btn.style.display = 'none';
                    // Update UI immediately (optimistic update)
                    const indicator = document.getElementById('classAttendanceStatus');
                    if (indicator) indicator.style.display = 'flex';

                    // Reload data to be sure
                    loadDashboardData();
                } else {
                    showToast(result.message || 'Failed to mark attendance', 'error');
                    btn.disabled = false;
                    btn.textContent = originalText;
                }
            } catch (err) {
                console.error(err);
                showToast('Error marking attendance', 'error');
                btn.disabled = false;
                btn.textContent = 'Log Attendance';
            }
        });
    }
});
