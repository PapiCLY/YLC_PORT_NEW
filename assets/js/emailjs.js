document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_8ub0jvl', 'template_ebj8pof', params)
        .then(() => {
            openModal();
        })
        .catch((error) => {
            console.error('Failed to send email:', error);
        });
});

function openModal() {
    const modal = document.getElementById("confirmationModal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("confirmationModal");
    modal.style.display = "none";
}


window.onclick = function(event) {
    const modal = document.getElementById("confirmationModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};