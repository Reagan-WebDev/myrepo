const myButton = document.getElementById("myButton");
const myh2 = document.getElementById("myh2");

myButton.addEventListener("click", function() {
    setTimeout(function() {
        myh2.textContent = "I Love You Too😂"
    }, 3000);
});