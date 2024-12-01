const myButton = document.getElementById("myButton");
const myP = document.getElementById("myP");
let RandomNum;
const maxNum = 100;
const minNum = 50;
myButton.onclick = function() {
    RandomNum = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
    return myP.textContent = RandomNum.toFixed(2);
}