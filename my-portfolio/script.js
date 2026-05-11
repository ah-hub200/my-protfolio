// Wait for the full page to load before running the code
window.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('dark-mode-toggle');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            // This is the core logic
            document.body.classList.toggle('dark-theme');
            
            // UI Feedback: Change button text
            if (document.body.classList.contains('dark-theme')) {
                toggleBtn.textContent = '☀️ Light Mode';
            } else {
                toggleBtn.textContent = '🌙 Dark Mode';
            }
        });
    } else {
        console.error("Button not found! Check your HTML ID.");
    }
});