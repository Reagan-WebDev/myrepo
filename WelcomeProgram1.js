
(function() {
    emailjs.init('uZ2GTLCuKcPJcr6-8'); 
})();

// Function to welcome the customer
function welcomeCustomer() {
    const customerName = document.getElementById("customerName").value;
    const customerEmail = document.getElementById("customerEmail").value;
    
    if (customerName && customerEmail) {
        // Show welcome message
        document.getElementById("customerDisplayName").textContent = customerName;
        document.getElementById("welcomeMessage").style.display = "block";

        // Send email to notify the customer
        sendEmail(customerName, customerEmail);
    } else {
        alert("Please enter both your name and email.");
    }
}

// Function to send email notification
function sendEmail(customerName, customerEmail) {
    const templateParams = {
        customer_name: customerName,
        customer_email: customerEmail,
        message: `Dear ${customerName}, welcome to our company!`
    };

    // Sending the email to the customer
    emailjs.send('service_8uehule', 'template_740uijl', templateParams)
        .then(function(response) {
            console.log('Email sent successfully', response);
        }, function(error) {
            console.error('Failed to send email', error);
        });
}

// Function to thank the customer
function thankCustomer() {
    const customerName = document.getElementById("customerName").value;
    if (customerName) {
        // Show thank you message
        document.getElementById("thankYouCustomerName").textContent = customerName;
        document.getElementById("thankYouMessage").style.display = "block";

        // Hide welcome message and input field
        document.getElementById("welcomeMessage").style.display = "none";
        document.getElementById("customerName").style.display = "none";
        document.getElementById("customerEmail").style.display = "none";
    }
}
