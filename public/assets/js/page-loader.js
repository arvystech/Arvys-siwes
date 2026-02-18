/**
 * Page Loader - Simple script to hide the loader
 */
window.addEventListener('load', function () {
    const loader = document.getElementById('pageLoader');
    if (loader) {
        // Add a class for CSS transition if it exists
        loader.classList.add('fade-out');

        // Ensure it disappears even if CSS transition fails
        setTimeout(function () {
            loader.style.display = 'none';
        }, 1000); // Wait for transition or just hide it
    }
});
