const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];

const ingredientsList = document.querySelector('#ingredients');

const addIngredientsToList = (ingredients) => {
    const liIngredients = ingredients.map((ingredient) => {
        return `<li>${ingredient}</li>`;
    }).join('');
    return liIngredients;
}

const liIngredients = addIngredientsToList(ingredients);

ingredientsList.innerHTML = liIngredients; 