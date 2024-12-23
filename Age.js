
document.getElementById('dobForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from refreshing the page

    // Get the input values for birth year, month, and day
    const birthYear = parseInt(document.getElementById('birthYear').value);
    const birthMonth = parseInt(document.getElementById('birthMonth').value);
    const birthDay = parseInt(document.getElementById('birthDay').value);

    // Get the current date
    const currentDate = new Date();

    // Calculate the age
    const age = currentDate.getFullYear() - birthYear;

    // Adjust if the birthday has not occurred yet this year
    const isBirthdayPassed = currentDate.getMonth() + 1 > birthMonth || 
        (currentDate.getMonth() + 1 === birthMonth && currentDate.getDate() >= birthDay);

    const finalAge = isBirthdayPassed ? age : age - 1;

    // Display result
    const resultElement = document.getElementById('result');
    if (finalAge >= 18) {
        resultElement.textContent = `You are ${finalAge} years old. You are eligible to vote!`;
        resultElement.className = 'result eligible';
    } else {
        resultElement.textContent = `You are ${finalAge} years old. You are not eligible to vote.`;
        resultElement.className = 'result not-eligible';
    }
});
