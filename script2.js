// Get the toggle button and the body element
const toggleButton = document.getElementById('toggle-button');
const body = document.body;

// Function to toggle dark mode
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Change button text based on mode
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = "Toggle Light Mode";
    } else {
        toggleButton.textContent = "Toggle Dark Mode";
    }
});
