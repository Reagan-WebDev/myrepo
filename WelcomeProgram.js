
(function() {
    emailjs.init('uZ2GTLCuKcPJcr6-8'); 
})();

// Function to welcome the customer
function welcomeCustomer() {
    const customerName = document.getElementById("customerName").value;
    if (customerName) {
        // Show welcome message
        document.getElementById("customerDisplayName").textContent = customerName;
        document.getElementById("welcomeMessage").style.display = "block";

        // Send email to notify the customer
        sendEmail(customerName);
    } else {
        alert("Please enter your name.");
    }
}

// Function to send email notification
function sendEmail(customerName) {
    const templateParams = {
        customer_name: customerName,
        message: `Dear ${customerName}, welcome to our company!`
    };

    emailjs.send('service_8uehule', 'template_740uijl', templateParams)
        .then(function(response) {
            alert('Email sent successfully', response);
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
    }
}
