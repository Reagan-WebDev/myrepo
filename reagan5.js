const myH1 = document.getElementById("myH1");
const subscribeBtn = document.getElementById("subscribeBtn");
const cardBtn = document.getElementById("cardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const myButton = document.getElementById("myButton");
const SubscriptionResult = document.getElementById("SubscriptionResult");
const CardResult = document.getElementById("CardResult");
document.getElementById("myButton").onclick = function(){
    if(subscribeBtn.checked){
        SubscriptionResult.textContent = "You are Subscribed!";
    }
    else{
        SubscriptionResult.textContent = "You are not Subscribed!";
    }
    
    if(VisaBtn.checked){
        CardResult.textContent = "You have selected Visa!";
    }
    else if(MasterCardBtn.checked){
        CardResult.textContent = "You have selected MasterCard!";
    }
    else if(PayPalBtn.checked){
        CardResult.textContent = "You have selected PayPal!";
    }
    else{
        CardResult.textContent = "You have not selected a card!";
    }
}
