const myInput = document.getElementById("myInput");
const toCelcius = document.getElementById("toCelcius");
const toFarenheit = document.getElementById("toFarenheit");
const myButton = document.getElementById("myButton");
const myP = document.getElementById("myP");
let temp;
myButton.onclick = function(){
    temp = Number(temp);
    temp = document.getElementById("myInput").value;
    if(toCelcius.checked){
        temp = (temp - 32) * 5/9;
        return myP.textContent = `${temp.toFixed(1)}°C`;
    }
    else if(toFarenheit.checked){
        temp = temp * 9/5 + 32;
        return myP.textContent = `${temp.toFixed(1)}°F`;
    }
    else{
        myP.textContent = "Select the unit to convert to";
    }
}