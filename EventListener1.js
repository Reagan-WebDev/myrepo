const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "Full 🌝";
})
myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "blue";
    myBox.textContent = "I'm Reagan";
    myBox.style.color = "white";
})
myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "green";
    myBox.textContent = "OT 😊";
})