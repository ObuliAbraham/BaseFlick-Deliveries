// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const subject = document.querySelector('#subject').value;
  const message = document.querySelector('#message').value;

  if (name === '' || email === '' || subject === '' || message === '') {
    alert('Please fill out all fields');
  } else {
    // Send form data to server
  }
});

// Button Actions
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // Handle button click actions
  });
});

// about us

document.querySelector('.call-to-action button').addEventListener('click', () => {
  console.log('Button clicked!');
});