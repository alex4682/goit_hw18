const categories = document.querySelectorAll('#categories');
const categorieNames = document.querySelectorAll('.categorieName');

const getTitles = (pseudoArr) => {
    let titles = [];
    pseudoArr.forEach(elem => titles.push(elem.textContent));
    return titles;
}

const titles = getTitles(categorieNames);

categories.forEach((category, index) => {
    console.log(`Кількість елементів в категорії: ${category.children.length}`);
    console.log(`Категорія: ${titles[index]}`);
});

console.log("");