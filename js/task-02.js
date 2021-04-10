const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulEl = document.querySelector('#ingredients');

const ingredientList = list => {
    return list.map(ingredient => {
        const listEl = document.createElement('li');
        listEl.textContent = ingredient;
        return listEl;
    });
};

const elements = ingredientList(ingredients);
ulEl.append(...elements);