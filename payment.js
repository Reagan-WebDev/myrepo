const myMpesa = document.getElementById("myMpesa");
const sendMoney = document.getElementById("sendMoney");
const BuyGoods = document.getElementById("BuyGoods");
const paybill = document.getElementById("paybill");
const initiate = document.getElementById("initiate");
const methodofpayment = document.getElementById("methodofpayment");
const typeofpayment = document.getElementById("typeofpayment");
initiate.onclick = function() {
    if(myMpesa.checked){
        methodofpayment.textContent = "You Selected Mpesa as the Payment Method";
    }
    else{
        methodofpayment.textContent = "Please Select a Payment Method!";
    }
            if(sendMoney.checked) {
                typeofpayment.textContent = "You Selected Send Money";
            }
            else if(BuyGoods.checked) {
                typeofpayment.textContent = "You Selected Buy Goods";
            }
            else if(paybill.checked) {
                typeofpayment.textContent = "You Selected PayBill";
            }
            else{
                typeofpayment.textContent = "Please Select A Type of Payment To Proceed!";
            }
}