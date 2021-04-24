const searchText = document.getElementById('searchInput');
const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');


btnSearch.addEventListener('click', (e) => {
    e.preventDefault();
    getBookList(searchText.value);
})


async function getBookList(string){
    let res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${string.split(' ').join('+')}`);
    let data = await res.json();
    console.log(data.items);
    renderBookList(data.items);
}

function renderBookList(books){
    let output = '';
    books.forEach(book => {
        book = book.volumeInfo;
        output += `
            <div class="card">
                <div class="grid-1">
                    <img src="http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api">
                </div>
                <div className="grid-2">
                    <h2>${book.title}</h2>
                    <p class="text-muted">Author: ${book.author ? book.author : 'NA'}</p>
                    <p class="subtitle">${book.subtitle ? book.subtitle : 'NA'}</p>
                    <div>
                        <span><strong class="text-muted">Page Count:</strong> ${book.pageCount ? book.pageCount : 'NA'}</span>
                        <span><strong class="text-muted">Published Date:</strong> ${book.publishedDate ? book.publishedDate : 'NA'}</span>
                    </div>
                    <a href="${book.infoLink}" target="_blank" class="btn-view">View Info</a>
                </div>
            </div>
        `
    })
    console.log(output);
    document.querySelector('.result').innerHTML = output;
}

btnClear.addEventListener('click', (e)=>{
    document.querySelector('.result').innerHTML = '';
    document.getElementById('searchInput').value = '';
    e.preventDefault();
})