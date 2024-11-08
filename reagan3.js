const PI = 3.14159;
let radius;
let circumference;
document.getElementById("myButton").onclick = function(){
    radius = document.getElementById("myInput").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myh3").textContent = circumference + "cm";
}