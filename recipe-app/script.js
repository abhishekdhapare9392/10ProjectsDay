document.addEventListener('DOMContentLoaded', async () => {
  const categories = await fetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php'
  );

  const res = await categories.json();
  //   console.log(res);

  let categoriesArray = res.categories;

  let output = '';
  categoriesArray.forEach((category) => {
    output += `
        <li>
            <img src="${category.strCategoryThumb}">
            <a href="#">${category.strCategory}</a>
        </li>
      `;
  });

  document.querySelector('.features').innerHTML = output;

  const resp = await fetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian'
  );

  const response = await resp.json();
  let recipe = await response.meals;
  let recp = '';
  recipe.forEach((rec) => {
    recp += `
        <div class="card">
            <img src="${rec.strMealThumb}" width="100%" alt="${rec.strMeal}" />
            <div class="card-body">
                <h4>${rec.strMeal}</h4>
            </div>
        </div>
    `;
  });

  document.querySelector('.recipe').innerHTML = recp;
});

document.querySelector('.search').addEventListener('click', () => {
  if (
    document.querySelector('#search').style.display == 'none' &&
    document.querySelector('#title').style.display == 'block'
  ) {
    document.querySelector('#search').style.display = 'block';
    document.querySelector('#title').style.display = 'none';
  } else {
    document.querySelector('#search').style.display = 'none';
    document.querySelector('#title').style.display = 'block';
  }
});

document.querySelector('#search').addEventListener('keyup', async (e) => {
  const resp = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.value}&limit=10`
  );

  const response = await resp.json();
  console.log(response);
  let meals = await response.meals;
  let output = '';
  meals.forEach((meal) => {
    output += `
    <div class="card">
        <img src="${meal.strMealThumb}" width="100%" alt="${meal.strMeal}" />
        <div class="card-body">
            <h4>${meal.strMeal}</h4>            
            <p><h5>Instructions: </h5>${meal.strInstructions}</p>
        </div>
    </div>
    `;
  });
  document.querySelector('.recipe').innerHTML = output;
});
