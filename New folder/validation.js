function validateForm(event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const errorMessage = document.getElementById('errorMessage');
    const modal = document.getElementById('errorModal');

    let isValid = true;

    emailError.textContent = '';
    passwordError.textContent = '';
    errorMessage.textContent = '';

    if (!email) {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    }
    
    if (!password) {
        passwordError.textContent = 'Password is required';
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long';
        isValid = false;
    }

    if (!isValid) {
        errorMessage.textContent = 'Please fill the Email address & Password';
        modal.style.display = 'block';
        return false; 
    }

    return true; 
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.getElementById('closeModal').onclick = function() {
    document.getElementById('errorModal').style.display = 'none';
};

window.onclick = function(event) {
    if (event.target === document.getElementById('errorModal')) {
        document.getElementById('errorModal').style.display = 'none';
    }
};
