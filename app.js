document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('signupForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document
      .getElementById('confirmPassword')
      .value.trim();

    if (validateForm(username, email, password, confirmPassword)) {
      alert('Sign-up successful!');
    }
  });

  function validateForm(username, email, password, confirmPassword) {
    if (username.length < 3) {
      alert('Username must be at least 3 characters long.');
      return false;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return false;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return false;
    }

    return true;
  }

  function validateEmail(email) {
    // Basic email validation
    return email.includes('@') && email.includes('.');
  }
});
