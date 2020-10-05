const itemName = document.querySelector('#item-name');
const amount = document.querySelector('#amount');

const submit = document.querySelector('#button');

submit.addEventListener('click', (e) => {
  if (itemName.value === '' || amount.value === '') {
    showAlert('Please fill all fields.', 'alert alert-danger');
  } else {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let icon = document.createElement('i');
    icon.className = 'fa fa-trash';
    td1.append(itemName.value);
    td2.append(amount.value);
    td3.append(icon);

    tr.append(td1);
    tr.append(td2);
    tr.append(td3);

    document.querySelector('tbody').append(tr);
  }
  e.preventDefault();
});

function showAlert(msg, className) {
  let div = document.createElement('div');
  div.className = className;
  div.innerText = msg;

  document.querySelector('.showAlert').appendChild(div);

  setTimeout(() => {
    let alerts = document.querySelectorAll('.alert');
    alerts.forEach((alert) => {
      alert.remove();
    });
  }, 5000);
}
