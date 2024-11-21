// Function to change the background color of the body
function changeBackground() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFC300'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
