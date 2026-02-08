/**
 * Profile Page Data Loader
 * Fetches and populates student profile information
 */

// Load profile data when profile page is accessed
async function loadProfileData() {
    try {
        const response = await authenticatedFetch('/student/api/profile');
        if (!response) return;

        if (!response.ok) {
            throw new Error('Failed to load profile data');
        }

        const result = await response.json();

        if (!result.success) {
            throw new Error(result.message || 'Failed to load profile data');
        }

        const profile = result.data;

        // Populate profile UI
        populateProfileHeader(profile);
        populatePersonalInfo(profile);
        populateAcademicInfo(profile);

        console.log('Profile data loaded successfully');

    } catch (error) {
        console.error('Error loading profile:', error);
        showToast('Failed to load profile data', 'error');
    }
}

// Populate profile header (avatar, name, matric number)
function populateProfileHeader(profile) {
    // Update avatar initials
    const avatarEl = document.querySelector('.profile-header-avatar');
    if (avatarEl && profile.name) {
        const initials = profile.name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .substring(0, 2);
        avatarEl.textContent = initials;
    }

    // Update name
    const nameEl = document.querySelector('.profile-header-name');
    if (nameEl && profile.name) {
        nameEl.textContent = profile.name;
    }

    // Update matric number
    const matricEl = document.querySelector('.profile-header-id');
    if (matricEl && profile.matric_no) {
        matricEl.textContent = profile.matric_no;
    }
}

// Populate personal information section
function populatePersonalInfo(profile) {
    const fields = {
        'profile-full-name': profile.name,
        'profile-email': profile.email,
        'profile-phone': profile.phone,
        'profile-gender': profile.gender,
        'profile-location': (profile.city && profile.state) ? `${profile.city}, ${profile.state}` : (profile.city || profile.state || 'N/A')
    };

    for (const [id, value] of Object.entries(fields)) {
        const el = document.getElementById(id);
        if (el) el.textContent = value || 'N/A';
    }

    // Handle Date of Birth separately for formatting
    const dobEl = document.getElementById('profile-dob');
    if (dobEl) {
        if (profile.dob) {
            const date = new Date(profile.dob);
            dobEl.textContent = date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } else {
            dobEl.textContent = 'N/A';
        }
    }
}

// Populate academic information section
function populateAcademicInfo(profile) {
    const fields = {
        'profile-institution': profile.school_name,
        'profile-course': profile.course_title,
        'profile-matric': profile.matric_no,
        'profile-session': profile.batch_session,
        'profile-payment': profile.student_payment_status
    };

    for (const [id, value] of Object.entries(fields)) {
        const el = document.getElementById(id);
        if (el) {
            if (id === 'profile-payment') {
                el.textContent = value ? value.charAt(0).toUpperCase() + value.slice(1) : 'N/A';
                // Add color styling for payment status
                if (value === 'completed') el.style.color = '#10b981';
                else el.style.color = '#f59e0b';
            } else {
                el.textContent = value || 'N/A';
            }
        }
    }
}

// Export for global access
window.loadProfileData = loadProfileData;

// Initial load is now handled by app.js navigateToPage or initial load logic
