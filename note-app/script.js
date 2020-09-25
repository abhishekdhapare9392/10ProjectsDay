let notes = [
  {
    title: 'Note 1',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, autem voluptates voluptatem consequuntur recusandae delectus vitae tempora deleniti quam rerum sapiente, ea facilis sunt iste animi nostrum, assumenda explicabo illum.',
  },
  {
    title: 'Note 2',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, autem voluptates voluptatem consequuntur recusandae delectus vitae tempora deleniti quam rerum sapiente, ea facilis sunt iste animi nostrum, assumenda explicabo illum.',
  },
  {
    title: 'Note 3',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, autem voluptates voluptatem consequuntur recusandae delectus vitae tempora deleniti quam rerum sapiente, ea facilis sunt iste animi nostrum, assumenda explicabo illum.',
  },
  {
    title: 'Note 4',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, autem voluptates voluptatem consequuntur recusandae delectus vitae tempora deleniti quam rerum sapiente, ea facilis sunt iste animi nostrum, assumenda explicabo illum.',
  },
];

localStorage.setItem('notes', JSON.stringify(notes));
notes = [];
let storeNotes = JSON.parse(localStorage.getItem('notes'));
// Show the list of notes on page load
document.addEventListener('DOMContentLoaded', () => {
  let output = '';
  let i = 0;
  storeNotes.forEach((note) => {
    output += `
        <div class="card">
          <div class="card-header">
            <h4>${note.title}</h4>
            <h4 id="close" data-id="${i}">&times;</h4>
          </div>
          <div class="card-content">
            <p>
              ${note.content}
            </p>
          </div>
        </div>
    `;
    i++;
  });

  document.querySelector('.note-container').innerHTML = output;
});

document.querySelector('.note-container').addEventListener('click', (e) => {
  if (e.target.id === 'close') {
    const cardId = e.target.getAttribute('data-id');
    let j = 0;
    storeNotes.forEach((note) => {
      //   console.log();

      if (parseInt(cardId) === j) {
        storeNotes.splice(j, 1);
        localStorage.setItem('notes', JSON.stringify(storeNotes));
      }
      j++;
    });
    e.target.parentElement.parentElement.remove();
  }
  e.preventDefault();
});
