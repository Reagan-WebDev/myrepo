const myButton = document.getElementById("myButton");
const myH2 = document.getElementById("myH2");
const myH = document.getElementById("myH");
const condition = document.getElementById("condition");
const myH1 = document.getElementById("myH1");
myButton.addEventListener("click", function(){
    setTimeout(() => {
        myH2.textContent = "Samuel:" + " " + "I ❤️ You Ann";
        myH2.style.color = "green";
    }, 1000);
    setTimeout(() => {
        myH.textContent = "Anna:" + " " + "I ❤️ You Too Samuel";
        myH.style.color = "green";
    }, 3000);
    setTimeout(() => {
        condition.textContent = "Anna:" + " " + "But With Conditions🙁!";
        condition.style.color = "tomato";
    }, 4000);
    setTimeout(() => {
        myH1.textContent = "Dust!Dust!Dust!😂😂😂";
        myH1.style.color = "red";
    }, 5500);
});