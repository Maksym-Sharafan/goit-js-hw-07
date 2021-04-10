const outputListOnConsole = function () {
    const categoryList = document.querySelectorAll('#categories .item')
    console.log(`В списке ${categoryList.length} категории.`);

    const items = categoryList.forEach(item => {
        const titleItems = item.querySelector('h2');
        console.log(`Категория: ${titleItems.textContent}`);

        const quantityItems = item.querySelectorAll('li');
        console.log(`Количество элементов: ${quantityItems.length}`);
    });
};
    
outputListOnConsole();