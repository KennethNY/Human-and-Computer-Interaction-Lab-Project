function validateForm() {
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error').forEach(error => error.style.display = 'none');

    // Username validation
    const username = document.getElementById('username').value;
    if (username.length < 3 || username.length > 15) {
        document.getElementById('usernameError').textContent = 'Username must be 3-15 characters long.';
        document.getElementById('usernameError').style.display = 'block';
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Phone number validation
    const phone = document.getElementById('phone').value;
    const phonePattern = /^\d{10,15}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone number must be 10-15 digits long.';
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }

    // Password validation
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    // Confirm password validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        document.getElementById('confirmPasswordError').style.display = 'block';
        isValid = false;
    }

    return isValid;
}
