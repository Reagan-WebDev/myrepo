const backgrounds = [
    'url("images/pexels-alxs-919734.jpg")',
    'url("images/pexels-luis-gomes-166706-546819.jpg")',
    'url("images/pexels-pixabay-158826.jpg")',
    'url("images/pexels-thisisengineering-3861969.jpg")',
    'url("images/pexels-pixabay-356056.jpg")'
];

let currentIndex = 0;

// Function to change the background
function changeBackground() {
    document.body.style.backgroundImage = backgrounds[currentIndex];
    currentIndex = (currentIndex + 1) % backgrounds.length; // Loop through the array
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);

// Initial background
changeBackground();
