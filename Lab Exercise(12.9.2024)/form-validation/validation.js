document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const successMessage = document.getElementById('successMessage');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const birthdateError = document.getElementById('birthdateError');
    const genderError = document.getElementById('genderError');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Clear previous error messages
        nameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        birthdateError.textContent = '';
        genderError.textContent = '';
        successMessage.textContent = '';

        let valid = true;

        // Name validation
        const name = document.getElementById('name').value.trim();
        if (name.length < 2) {
            nameError.textContent = 'Full Name must be at least 2 characters long.';
            valid = false;
        }

        // Email validation
        const email = document.getElementById('email').value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            valid = false;
        }

        // Password validation
        const password = document.getElementById('password').value;
        if (password.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long.';
            valid = false;
        }

        // Gender validation
        const gender = document.querySelector('input[name="gender"]:checked');
        if (!gender) {
            genderError.textContent = 'Please select a gender.';
            valid = false;
        }

        // Birthdate validation
        const birthdate = document.getElementById('birthdate').value;
        if (!birthdate) {
            birthdateError.textContent = 'Please select your date of birth.';
            valid = false;
        }

        // Show success message if form is valid
        if (valid) {
            successMessage.textContent = 'Registration successful!';
        }
    });
});
