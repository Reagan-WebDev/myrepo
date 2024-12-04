const minNum = 50;
const maxNum = 150;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running) {
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("Please Enter a valid Number!");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please Enter a Valid Number!");
    }
    else{
        attempts ++;
        if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN");
        }
        else if(guess > answer){
            window.alert("TOO HIGH! TRY AGAIN");
        }
        else{
            window.alert(`CORRECT! The answer was ${answer}. The attempts were ${attempts}`);
            running = false;
        }
    }
    
}
