const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");
let age;
mySubmit.onclick = function(){
    if(age >= 18){
        age = myText.value;
        result.textContent = "You are Old Enough to enter this site";
    }
    else if(age < 18){
        age = myText.value;
        result.textContent = "You are too young to enter this site!";
    }
    else if(age < 0){
        age = myText.value;
        result.textContent = "Your Age cannot be below zero!";
    }
    else{
        age = myText.value;
        result.textContent = "Please Enter Your Age!"; 
    }
}
