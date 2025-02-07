const price = document.getElementById("price");
const myButton = document.getElementById("myButton");
const cost = document.getElementById("cost");
const myDepo = document.getElementById("myDepo");
const myRem = document.getElementById("myRem");
const AmountPerMonth = document.getElementById("AmountPerMonth");
const period = document.getElementById("period");
let costofvehicle;
let amountpermonth;
let deposit;
let remainingamount;
let periodofpayment;
myButton.addEventListener("click", () => {
    costofvehicle = document.getElementById("price").value;
    cost.textContent = `Cost Of Vehicle: Ksh. ${costofvehicle}`;
    if(costofvehicle >= 700000 && costofvehicle < 1000000){
        deposit = (20 / 100) * costofvehicle;
        myDepo.textContent = `Deposit: Ksh. ${deposit.toFixed(2)}`;
    }
    else if(costofvehicle >= 1000000 && costofvehicle < 2000000){
        deposit = (30 / 100) * costofvehicle;
        myDepo.textContent = `Deposit: Ksh. ${deposit.toFixed(2)}`;
    }
    else if(costofvehicle > 2000000){
        deposit = (50 / 100) * costofvehicle;
        myDepo.textContent = `Deposit: Ksh. ${deposit.toFixed(2)}`;
    }
    else {
        deposit = costofvehicle;
        myDepo.textContent = `Deposit: Ksh. ${deposit.toFixed(2)}`;
    }
    remainingamount = costofvehicle - deposit;
    myRem.textContent = `Balance: Ksh. ${remainingamount.toFixed(2)}`;
    if(costofvehicle >= 700000 && costofvehicle < 1000000){
        amountpermonth = (5 / 100) * remainingamount;
        AmountPerMonth.textContent = `Payment Per Month: Ksh. ${amountpermonth.toFixed(2)}`;
    }
    else if(costofvehicle >= 1000000 && costofvehicle < 2000000){
        amountpermonth = (10 / 100) * remainingamount;
        AmountPerMonth.textContent = `Payment Per Month: Ksh. ${amountpermonth.toFixed(2)}`;
    }
    else if(costofvehicle > 2000000){
        amountpermonth = (15 / 100) * remainingamount;
        AmountPerMonth.textContent = `Payment Per Month: Ksh. ${amountpermonth.toFixed(2)}`;
    }
    else {
        amountpermonth = 0;
        AmountPerMonth.textContent = `Payment Per Month: Ksh. ${amountpermonth.toFixed(2)}`;
    }
    periodofpayment = (remainingamount / amountpermonth) / 12;
    period.textContent = `Period Of Payment: ${periodofpayment.toFixed(2)}Yr(s)`;
});