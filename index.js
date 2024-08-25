//Form Declarations
const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const successCard = document.querySelector('.success-card');
const dismissButton = successCard.querySelector('button');
const mainContainer = document.querySelector('.form-signup');
const userEmailSpan = document.getElementById('user-email');

// Event listener to clear the input when focused
    emailInput.addEventListener('focus', function () {
    emailInput.value = ''; // Clear the email input field when clicked
  });

//Function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

//Event Listener for form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting

    const email = emailInput.value;

 // Check if the email is valid
 if (isValidEmail(email)) {
    emailError.textContent = '';
    mainContainer.style.display = 'none';
    successCard.style.display = 'block';
    userEmailSpan.textContent = email;
  } else {
    emailError.textContent = 'Valid email required'; // Show error message
    emailInput.classList.add('input-error');
  }
});

// Event listener for dismissing the success message
dismissButton.addEventListener('click', function () {
    successCard.style.display = 'none';
    mainContainer.style.display = 'block';
    emailInput.value = 'email@company.com';
  });