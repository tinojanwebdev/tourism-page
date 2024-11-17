document.querySelector('.signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const mobile = document.getElementById('mobile').value;
    const password = document.getElementById('password').value;
    const dobDay = document.getElementById('dobDay').value;
    const dobMonth = document.getElementById('dobMonth').value;
    const dobYear = document.getElementById('dobYear').value;
    const gender = document.querySelector('input[name="gender"]:checked');

    if (!firstName || !lastName || !mobile || !password || !dobDay || !dobMonth || !dobYear || !gender) {
        alert("Please fill in all fields correctly.");
        return;
    }

    const formData = new URLSearchParams({
        firstName,
        lastName,
        mobile,
        password,
        dobDay,
        dobMonth,
        dobYear,
        gender: gender.value
    });

    fetch('signup.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        alert(data); 
        this.reset(); 
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred while submitting the form.");
    });
});
