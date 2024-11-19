const myInput = document.getElementById("myInput");
const toCelcius = document.getElementById("toCelcius");
const toKelvin = document.getElementById("toKelvin");
const mySubmit = document.getElementById("mySubmit");
const myP = document.getElementById("myP");
let temp;
mySubmit.onclick = function() {
    temp = document.getElementById("myInput").value;
    temp = Number(temp);
   
    if(toCelcius.checked){
        temp = temp - 273;
        return myP.textContent = `${temp.toFixed(2)}°C`;
    }
    else if(toKelvin.checked){
        temp = temp + 273;
        return myP.textContent = `${temp.toFixed(2)}K`;
    }
    else{
        return myP.textContent = "Select a conversion unit!";
    }
}


