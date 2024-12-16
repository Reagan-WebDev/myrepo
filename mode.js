// Get the button and body elements
const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;

// Check if the user has a saved mode preference
const savedMode = localStorage.getItem('mode');

// If a saved mode exists, apply it
if (savedMode === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = 'Switch to Light Mode';
} else {
    body.classList.remove('dark-mode');
    toggleBtn.textContent = 'Switch to Dark Mode';
}

// Add event listener to the button
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save the current mode to localStorage
    if (body.classList.contains('dark-mode')) {
        toggleBtn.textContent = 'Switch to Light Mode';
        localStorage.setItem('mode', 'dark');
    } else {
        toggleBtn.textContent = 'Switch to Dark Mode';
        localStorage.setItem('mode', 'light');
    }
});
