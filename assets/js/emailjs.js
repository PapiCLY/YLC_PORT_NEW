document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


      // Get form field values
     const form = document.getElementById('contactForm')

    // Get form field values
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let subject = document.getElementById('subject').value.trim(); // Optional field
    let message = document.getElementById('message').value.trim();

    // Validate required fields
    if (!name || !email || !message) {
        displayError('Please fill in all required fields: name, email, and message.');
        return; // Stop form submission
    }

    let params = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    // Send email using EmailJS
    emailjs.send('service_8ub0jvl', 'template_ebj8pof', params)
        .then(() => {
            openModal();
            form.reset();
        })
        .catch((error) => {
            console.error('Failed to send email:', error);
            displayError('There was an error sending your message. Please try again later.');
        });
});

// Function to open modal
function openModal() {
    const modal = document.getElementById("confirmationModal");
    modal.style.display = "block";
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById("confirmationModal");
    modal.style.display = "none";
}

// Function to display error messages
function displayError(message) {
    const errorContainer = document.getElementById('errorContainer');
    errorContainer.textContent = message; // Set the error message
    errorContainer.style.display = 'block'; // Show the error message
}

// Hide error container on click
window.onclick = function(event) {
    const modal = document.getElementById("confirmationModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
