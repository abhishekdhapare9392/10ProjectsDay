let container = document.querySelector('.container');

document.addEventListener('DOMContentLoaded', async () => {
    const res = await fetch('https://randomuser.me/api/')
    const data = await res.json();
    renderData(data.results[0])
    console.log(data.results[0]);
})


function renderData(user){
    
    let output = `
        <img src="${user.picture.thumbnail}" alt="image" class="image">
    <h2>${user.name.first} ${user.name.last}</h2>
    <h6>${user.gender}</h6>
    <a href="mailto:${user.email}">${user.email}</a>
    <a href="tel:${user.phone}">${user.phone}</a>
    `;

    container.innerHTML = output;

}