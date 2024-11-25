const myInput = document.getElementById("myInput");
const myButton = document.getElementById("myButton");
const myP = document.getElementById("myP");
let PriceOfCommodity;
document.getElementById("myButton").onclick = function() {
    PriceOfCommodity = document.getElementById("myInput").value;
    PriceOfCommodity = Number(PriceOfCommodity);
    if(PriceOfCommodity > 1500){
        PriceOfCommodity = PriceOfCommodity - (PriceOfCommodity * (10 / 100));
        return myP.textContent = "Ksh" + PriceOfCommodity.toFixed(2);
    }
    else{
        return myP.textContent = "Ksh" + PriceOfCommodity.toFixed(2);
    }
}