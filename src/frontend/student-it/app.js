/**
 * StudentIT - Main Application JavaScript
 * A modern, habit-forming student dashboard
 */

// Session Check
// if (localStorage.getItem('isLoggedIn') !== 'true') {
//     window.location.href = 'login.html';
// }

// Global Logout Function
window.logout = function () {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
};

// Hide Loader
window.addEventListener('load', () => {
    const loader = document.getElementById('pageLoader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('fade-out');
        }, 800);
    }
});

// DOM Elements
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');
const checkBtn = document.getElementById('checkBtn');
const attendanceStatus = document.getElementById('attendanceStatus');
const statusTitle = document.getElementById('statusTitle');
const statusSubtitle = document.getElementById('statusSubtitle');
const sessionInfo = document.getElementById('sessionInfo');
const checkInTimeEl = document.getElementById('checkInTime');
const checkOutTimeEl = document.getElementById('checkOutTime');
const sessionDuration = document.getElementById('sessionDuration');
const currentTimeEl = document.getElementById('currentTime');
const currentDateEl = document.getElementById('currentDate');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const quickCheckIn = document.getElementById('quickCheckIn');

// Learning-Focused Home Page Elements
const statusBanner = document.getElementById('statusBanner');
const classAttendanceStatus = document.getElementById('classAttendanceStatus');
const panelLogAttendanceBtn = document.getElementById('panelLogAttendanceBtn');
const homeStats = document.querySelectorAll('.home-stat');
const homeUpnextItems = document.querySelectorAll('.home-upnext-item');
const homeUpnextAll = document.querySelector('.home-upnext-all');

// New Home Attendance Elements
const logbookCtaBtn = document.getElementById('logbookCtaBtn');
const logbookStatusText = document.getElementById('logbookStatusText');
const homeAttendanceSection = document.getElementById('homeAttendanceSection');
const notificationBtn = document.getElementById('notificationBtn');

// State
let isCheckedIn = false;
let checkInTime = null;
let durationInterval = null;
window.navigationHistory = []; // History stack
window.pageScrollPositions = {}; // Scroll positions

// Navigation logic
const globalBackContainer = document.getElementById('globalBackContainer');
const headerUserInfo = document.getElementById('headerUserInfo');


navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        let target = e.target;
        const navItem = target.closest('.nav-item');
        if (!navItem) return;

        const targetPage = navItem.dataset.page;
        if (!targetPage) return;

        navigateToPage(targetPage);
    });
});

window.navigateToPage = function (pageId, isBack = false) {
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');
    const headerBackBtn = document.getElementById('headerBackBtn');
    const headerUserInfo = document.getElementById('headerUserInfo');
    const globalBackContainer = document.getElementById('globalBackContainer');
    const greetingEl = document.querySelector('.greeting-text'); // Changed selector to be more specific just in case

    // Get current active page
    const currentActivePage = document.querySelector('.page.active');
    const currentActiveId = currentActivePage ? currentActivePage.id : null;

    // Avoid pushing to history if navigating to the same page
    if (currentActiveId === pageId) return;

    // Handle History & Scroll
    if (!isBack && currentActiveId) {
        window.navigationHistory.push(currentActiveId);
        window.pageScrollPositions[currentActiveId] = window.scrollY;
    }

    // Update nav items
    navItems.forEach(nav => {
        nav.classList.remove('active');
        if (nav.dataset.page === pageId) nav.classList.add('active');
    });

    // Update pages
    pages.forEach(page => {
        page.classList.remove('active');
        if (page.id === pageId) {
            page.classList.add('active');
        }
    });

    // Header visibility logic
    if (globalBackContainer) globalBackContainer.style.display = 'none';
    if (headerUserInfo) headerUserInfo.style.display = 'flex';

    if (pageId === 'dashboard') {
        if (headerBackBtn) headerBackBtn.style.display = 'none';
        if (greetingEl) greetingEl.style.display = 'block';
    } else {
        if (headerBackBtn) headerBackBtn.style.display = 'inline-flex';
        // Keep profile info visible as requested
        if (greetingEl) greetingEl.style.display = 'block';
    }

    // Handle Scroll Restoration or Reset
    if (isBack && window.pageScrollPositions[pageId] !== undefined) {
        window.scrollTo(0, window.pageScrollPositions[pageId]);
    } else {
        window.scrollTo(0, 0);
    }

    // Haptic feedback simulation
    if (navigator.vibrate) {
        navigator.vibrate(10);
    }
};

// New Header Back Button
document.addEventListener('DOMContentLoaded', () => {
    const headerBackBtn = document.getElementById('headerBackBtn');
    if (headerBackBtn) {
        headerBackBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (window.navigationHistory.length > 0) {
                const prevPage = window.navigationHistory.pop();
                navigateToPage(prevPage, true);
            } else {
                navigateToPage('dashboard', true);
            }
        });
    }
});



// Attendance Collapsible Weeks
document.addEventListener('click', (e) => {
    const weekHeader = e.target.closest('.week-collapse-header');
    if (weekHeader) {
        const card = weekHeader.closest('.week-collapse-card');
        if (card) {
            const isExpanded = card.classList.contains('expanded');
            // Close others if needed, though usually stacked cards allow multiple or single
            // For this design, let's allow single expand for clarity
            document.querySelectorAll('.week-collapse-card').forEach(c => c.classList.remove('expanded'));

            if (!isExpanded) {
                card.classList.add('expanded');
            }
        }
    }
});

// Lecture Mini-Cards Click
document.addEventListener('click', (e) => {
    const lectureCard = e.target.closest('.lecture-mini-card');
    if (lectureCard) {
        const title = lectureCard.querySelector('.lecture-name').textContent;
        showToast(`Opening lecture: ${title}`);
    }
});

// More Menu removed - now using full-page More section
// Navigation to More page is handled by the standard nav-item click handler

// Time & Banner Display
function updateTime() {
    const now = new Date();
    const hoursNum = now.getHours();
    const minutesNum = now.getMinutes();
    const hours = hoursNum.toString().padStart(2, '0');
    const minutes = minutesNum.toString().padStart(2, '0');
    const options = { weekday: 'long', month: 'short', day: 'numeric' };

    if (currentTimeEl) {
        currentTimeEl.textContent = `${hours}:${minutes}`;
    }
    if (currentDateEl) {
        currentDateEl.textContent = now.toLocaleDateString('en-US', options);
    }

    updateClassStatus(hoursNum, minutesNum);
}

function updateClassStatus(h, m) {
    // Current class is 14:00 - 15:30
    const currentTimeMinutes = h * 60 + m;
    const startTimeMinutes = 14 * 60; // 14:00
    const endTimeMinutes = 15 * 60 + 30; // 15:30
    const warningMinutes = 15; // 15 minutes before class

    const isOngoing = currentTimeMinutes >= startTimeMinutes && currentTimeMinutes <= endTimeMinutes;
    const isCompleted = currentTimeMinutes > endTimeMinutes;
    const isUpcoming = currentTimeMinutes >= (startTimeMinutes - warningMinutes) && currentTimeMinutes < startTimeMinutes;

    // Update Live Status Banner
    const liveIndicator = document.getElementById('liveStatusIndicator');
    const bannerStatusText = document.getElementById('bannerStatusText');
    const pulseDot = liveIndicator ? liveIndicator.querySelector('.pulse-dot') : null;
    const liveLabel = liveIndicator ? liveIndicator.querySelector('.live-label') : null;

    if (statusBanner && liveIndicator && bannerStatusText && pulseDot) {
        if (isOngoing) {
            statusBanner.className = 'status-banner ongoing';
            pulseDot.className = 'pulse-dot ongoing';
            if (liveLabel) {
                liveLabel.textContent = 'LIVE';
                liveLabel.style.display = 'inline';
                liveLabel.style.color = 'var(--danger)';
                liveLabel.style.background = 'rgba(239, 68, 68, 0.1)';
            }
            bannerStatusText.textContent = 'Class is ongoing';
        } else if (isCompleted) {
            statusBanner.className = 'status-banner completed';
            pulseDot.className = 'pulse-dot completed';
            if (liveLabel) {
                liveLabel.textContent = '';
                liveLabel.style.display = 'none';
            }
            bannerStatusText.textContent = 'Just completed';
        } else if (isUpcoming) {
            statusBanner.className = 'status-banner upcoming';
            pulseDot.className = 'pulse-dot upcoming';
            if (liveLabel) {
                liveLabel.textContent = 'SOON';
                liveLabel.style.display = 'inline';
                liveLabel.style.color = 'var(--warning)';
                liveLabel.style.background = 'rgba(245, 158, 11, 0.1)';
            }
            bannerStatusText.textContent = 'About to start';
        } else {
            statusBanner.className = 'status-banner no-class';
            pulseDot.className = 'pulse-dot';
            pulseDot.style.background = 'var(--gray-400)';
            pulseDot.style.animation = 'none';
            if (liveLabel) {
                liveLabel.style.display = 'none';
            }
            bannerStatusText.textContent = 'No class at the moment';
        }
    }

    // Update Dashboard Class Card Status
    const classStatusLive = document.getElementById('classStatusLive');
    if (classStatusLive) {
        const cardPulseDot = classStatusLive.querySelector('.pulse-dot');
        const statusText = classStatusLive.querySelector('.status-text');

        if (isOngoing) {
            classStatusLive.className = 'class-status-live';
            if (cardPulseDot) cardPulseDot.className = 'pulse-dot ongoing';
            if (statusText) statusText.textContent = 'Class is ongoing';
        } else if (isCompleted) {
            classStatusLive.className = 'class-status-live completed';
            if (cardPulseDot) cardPulseDot.className = 'pulse-dot completed';
            if (statusText) statusText.textContent = 'Just completed';
        } else if (isUpcoming) {
            classStatusLive.className = 'class-status-live upcoming';
            if (cardPulseDot) cardPulseDot.className = 'pulse-dot upcoming';
            if (statusText) statusText.textContent = 'About to start';
        } else {
            classStatusLive.className = 'class-status-live';
            if (cardPulseDot) {
                cardPulseDot.className = 'pulse-dot';
                cardPulseDot.style.background = 'var(--gray-400)';
            }
            if (statusText) statusText.textContent = 'No class scheduled';
        }

        // Update time meta if completed
        if (isCompleted) {
            const timeMetaLabel = document.querySelectorAll('.meta-label')[1];
            if (timeMetaLabel) timeMetaLabel.textContent = 'Ended At';
            const timeMetaValue = document.querySelectorAll('.meta-value')[1];
            if (timeMetaValue) timeMetaValue.textContent = '15:30';
        }
    }

    updateAttendanceIndicator();
}

function updateAttendanceIndicator() {
    if (classAttendanceStatus && panelLogAttendanceBtn) {
        if (isCheckedIn) {
            classAttendanceStatus.style.display = 'flex';
            panelLogAttendanceBtn.style.display = 'none';
            if (logbookStatusText) logbookStatusText.textContent = 'Attendance Logged';
            if (logbookCtaBtn) logbookCtaBtn.style.display = 'none';
        } else {
            classAttendanceStatus.style.display = 'none';
            panelLogAttendanceBtn.style.display = 'block';
            if (logbookStatusText) logbookStatusText.textContent = 'You haven\'t logged today';
            if (logbookCtaBtn) logbookCtaBtn.style.display = 'flex';
        }
    }
}

updateTime();
setInterval(updateTime, 60000); // Update every minute


// Attendance Check-in/out
if (checkBtn) {
    checkBtn.addEventListener('click', () => {
        if (!isCheckedIn) {
            checkIn();
        } else {
            checkOut();
        }
    });
}

function checkIn() {
    isCheckedIn = true;
    checkInTime = new Date();

    // Update UI
    if (attendanceStatus) {
        attendanceStatus.classList.remove('not-checked-in');
        attendanceStatus.classList.add('checked-in');
    }
    if (statusTitle) statusTitle.textContent = 'Checked In';
    if (statusSubtitle) statusSubtitle.textContent = 'Your session has started. Have a productive day!';

    if (checkBtn) {
        const btnText = checkBtn.querySelector('.check-btn-text');
        if (btnText) btnText.textContent = 'Check Out';
        checkBtn.classList.add('checked-in');
        checkBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            checkBtn.style.transform = 'scale(1)';
        }, 150);
    }

    // Show session info
    if (sessionInfo) {
        sessionInfo.style.display = 'block';
        if (checkInTimeEl) checkInTimeEl.textContent = formatTime(checkInTime);
        if (checkOutTimeEl) checkOutTimeEl.textContent = '--:--';
    }

    // Start duration counter
    startDurationCounter();

    // Update dashboard indicator
    updateAttendanceIndicator();

    // Show toast
    showToast('Successfully checked in!');
}

function checkOut() {
    const checkOutTime = new Date();
    isCheckedIn = false;

    // Update UI
    if (attendanceStatus) {
        attendanceStatus.classList.remove('checked-in');
        attendanceStatus.classList.add('not-checked-in');
    }
    if (statusTitle) statusTitle.textContent = 'Checked Out';
    if (statusSubtitle) statusSubtitle.textContent = 'Great work today! See you next time.';

    if (checkBtn) {
        const btnText = checkBtn.querySelector('.check-btn-text');
        if (btnText) btnText.textContent = 'Check In';
        checkBtn.classList.remove('checked-in');
    }

    // Update session info
    if (checkOutTimeEl) checkOutTimeEl.textContent = formatTime(checkOutTime);

    // Stop duration counter
    if (durationInterval) {
        clearInterval(durationInterval);
    }

    // Update dashboard indicator
    updateAttendanceIndicator();

    // Show toast
    showToast('Successfully checked out!');
}

function startDurationCounter() {
    updateDuration();
    durationInterval = setInterval(updateDuration, 60000);
}

function updateDuration() {
    if (!checkInTime || !sessionDuration) return;

    const now = new Date();
    const diff = now - checkInTime;
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);

    const durationValEl = sessionDuration.querySelector('.duration-value');
    if (durationValEl) {
        durationValEl.textContent = `${hours}h ${minutes}m`;
    }
}

function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Toast
window.showToast = function (message) {
    if (toast && toastMessage) {
        toastMessage.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// Quick Actions
if (quickCheckIn) {
    quickCheckIn.addEventListener('click', () => {
        // Go to attendance page
        navItems.forEach(nav => nav.classList.remove('active'));
        const attendanceNav = document.querySelector('[data-page="attendance"]');
        if (attendanceNav) attendanceNav.classList.add('active');

        pages.forEach(page => page.classList.remove('active'));
        const attendancePage = document.getElementById('attendance');
        if (attendancePage) attendancePage.classList.add('active');

        setTimeout(() => {
            if (!isCheckedIn) {
                checkIn();
            }
        }, 300);
    });
}

// Global ripple effect for dashboard cards
function addRippleEffect() {
    const rippleElements = document.querySelectorAll('.stat-card, .activity-item, .progress-card');

    rippleElements.forEach(el => {
        el.addEventListener('click', function (e) {
            const rect = el.getBoundingClientRect();
            const ripple = document.createElement('span');

            ripple.style.cssText = `
                position: absolute;
                background: rgba(42, 56, 168, 0.1);
                border-radius: 50%;
                pointer-events: none;
                width: 100px;
                height: 100px;
                left: ${e.clientX - rect.left - 50}px;
                top: ${e.clientY - rect.top - 50}px;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
            `;

            el.style.position = 'relative';
            el.style.overflow = 'hidden';
            el.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Set greeting based on time
    const hour = new Date().getHours();
    const greetingEl = document.querySelector('.greeting-text');

    if (greetingEl) {
        if (hour < 12) {
            greetingEl.textContent = 'Good morning';
        } else if (hour < 17) {
            greetingEl.textContent = 'Good afternoon';
        } else {
            greetingEl.textContent = 'Good evening';
        }
    }

    addRippleEffect();
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        from { transform: scale(0); opacity: 1; }
        to { transform: scale(4); opacity: 0; }
    }
`;
document.head.appendChild(style);

// ========================================
// Learning-Focused Home Page Interactions
// ========================================



// Log Attendance Button in Class Panel
const lecturerCard = document.getElementById('lecturerCard');
if (lecturerCard) {
    lecturerCard.addEventListener('click', () => {
        navigateToPage('dashboard');
    });
}

if (panelLogAttendanceBtn) {
    panelLogAttendanceBtn.addEventListener('click', () => {
        // Just navigate to attendance page, let student click check-in manually
        navigateToPage('attendance');
    });
}

// Home Stats Navigation
homeStats.forEach(stat => {
    stat.addEventListener('click', () => {
        const targetPage = stat.dataset.nav;
        if (targetPage) {
            navigateToPage(targetPage);
        }
    });
});

// Home Up Next Items
homeUpnextItems.forEach(item => {
    item.addEventListener('click', () => {
        // For now, show toast - in real app, this would open the lesson/quiz
        showToast('Loading content...');

        // Haptic feedback
        if (navigator.vibrate) {
            navigator.vibrate(10);
        }
    });
});

// Home Up Next "See All" button
if (homeUpnextAll) {
    homeUpnextAll.addEventListener('click', () => {
        const targetPage = homeUpnextAll.dataset.nav;
        if (targetPage) {
            navigateToPage(targetPage);
        }
    });
}

// Home Logbook CTA Button
if (logbookCtaBtn) {
    logbookCtaBtn.addEventListener('click', () => {
        navigateToPage('logbook');
    });
}

// Notification Button
if (notificationBtn) {
    notificationBtn.addEventListener('click', () => {
        navigateToPage('announcements');
    });
}
