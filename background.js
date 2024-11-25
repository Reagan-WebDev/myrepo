let isDarkMode = false;

myButton.onclick = function(){
    isDarkMode = !isDarkMode;
    document.body.style.backgroundColor = isDarkMode ? "black" : "white";
    document.body.style.color = isDarkMode ? "white" : "black";
}