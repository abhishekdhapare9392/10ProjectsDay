const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const message = document.getElementById('message');
const errorMsg = document.querySelector('.error-msg');
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', (e) => {
  console.log('testing');
  if (
    firstName.value === '' ||
    lastName.value === '' ||
    email.value === '' ||
    message.value === ''
  ) {
    console.log('testing');
    showAlert(
      'First name is not filled. All fields required',
      'alert alert-danger'
    );
    setTimeout(() => {
      let alerts = document.querySelectorAll('.alert');

      alerts.forEach((alert) => {
        alert.remove();
      });
    }, 5000);
  }

  e.preventDefault();
});

const showAlert = (msg, className) => {
  let div = document.createElement('div');
  div.className = className;
  div.innerText = msg;
  errorMsg.append(div);
};
