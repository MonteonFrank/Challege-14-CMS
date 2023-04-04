// Funcction to login an existing user
const loginFormHandler = async (event) => {
  event.preventDefault();

  // DOM elements to obtain the information 
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  // If the user fills in the email and password, then the API is called to validate
  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    // Error handlers to know if the login was successful or not
    if (response.ok) {
      document.location.replace('/');
      alert('Login successful!')
    } else {
      alert('Failed to login');
    }
  }
  else{
    alert('Failed to login');
  }
};


// Function to create a new user and add them into the database
const signupFormHandler = async (event) => {
  event.preventDefault();

  //DOM elements to obtain the information 
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  //If the user fills in the username, email and password fields, then the API is called to add the user into the database
  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    // Error handling to know if the user was added into the database successfully or not
    if (response.ok) {
      document.location.replace('/');
      alert('Signed up successfully!')
    } else {
      alert('Failed to sign up');
    }
  }
};


// Event listeners to call the login and the sign up forms
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
