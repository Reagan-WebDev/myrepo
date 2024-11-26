const button = document.getElementById('myButton');
let isAlternateColors = false;

button.addEventListener('click', function() {
    if (!isAlternateColors) {
        // Change to alternate colors
        document.body.style.backgroundColor = '#2c3e50';
        document.body.style.color = '#ecf0f1';
    } else {
        // Revert to original colors
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
    }
    
    // Toggle the state
    isAlternateColors = !isAlternateColors;
});