// Import all element from DOM
var firstName = document.querySelector('#firstname');
var lastName = document.querySelector('#lastname');
var email = document.querySelector('#email');
var message = document.querySelector('#message');
const errorMsg = document.querySelector('.error-msg');
const submitBtn = document.querySelector('#submit');

const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// On click event for submit button
submitBtn.addEventListener('click', (e) => {
  firstName = document.querySelector('#firstname').value;
  lastName = document.querySelector('#lastname').value;
  email = document.querySelector('#email').value;
  message = document.querySelector('#message').value;

  if (regex.test(email) === false) {
    showAlert(
      'Email format is wrong. All fields required.',
      'alert alert-danger'
    );
  }
  if (firstName === '' || lastName === '' || email === '' || message === '') {
    showAlert(
      'First name is not filled. All fields required',
      'alert alert-danger'
    );
  }

  // set time out for alerts
  setTimeout(() => {
    let alerts = document.querySelectorAll('.alert');

    alerts.forEach((alert) => {
      alert.remove();
    });
  }, 5000);

  e.preventDefault();
});

// Show alert function for alerts

const showAlert = (msg, className) => {
  let div = document.createElement('div');
  div.className = className;
  div.innerText = msg;
  errorMsg.appendChild(div);
};
