/**
 * Authenticated Fetch Wrapper
 * Automatically handles 401/403 responses by redirecting to login
 */

async function authenticatedFetch(url, options = {}) {
    try {
        const response = await fetch(url, {
            ...options,
            credentials: 'include' // Important: ensures cookies are sent
        });

        // Handle authentication errors
        if (response.status === 401 || response.status === 403) {
            console.log('Authentication failed, redirecting to login...');
            window.location.href = '/student/login';
            return null;
        }

        return response;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

/**
 * Auth Check - Verifies user is authenticated before loading SPA
 * Call this at app startup
 */
async function checkAuth() {
    try {
        const response = await fetch('/student/api/auth-check', {
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error('Not authenticated');
        }

        const data = await response.json();

        if (!data.success || !data.authenticated) {
            throw new Error('Not authenticated');
        }

        // Return user data for use in the app
        return data.student;
    } catch (error) {
        console.log('Auth check failed:', error);
        window.location.href = '/student/login';
        return null;
    }
}

/**
 * Logout Function
 * Calls backend logout endpoint and redirects to login
 */
async function logout() {
    try {
        await fetch('/student/auth/logout', {
            method: 'POST',
            credentials: 'include'
        });
    } catch (error) {
        console.error('Logout error:', error);
    } finally {
        window.location.href = '/student/login';
    }
}

// Export for use in other modules
window.authenticatedFetch = authenticatedFetch;
window.checkAuth = checkAuth;
window.logout = logout;
