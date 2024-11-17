document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact_form');

    if (form) { 
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const name = document.getElementById('name').value; 
            const emailadd = document.getElementById('emailadd').value;
            const subject = document.getElementById('Subject').value; 
            const message = document.getElementById('message').value;

            if (!name || !emailadd || !subject || !message) {
                alert("Please fill in all fields correctly.");
                return;
            }
            fetch('contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    name: name,
                    email: emailadd,
                    subject: subject,
                    message: message,
                }),
            })
            .then(response => response.text())
            .then(data => {
                alert("Your message has been sent successfully!"); 
                form.reset(); 
            })
            .catch(error => {
                console.error('Error:', error);
                alert("An error occurred while submitting the form.");
            });
        });
    } else {
        console.error("Form not found!");
    }
});
