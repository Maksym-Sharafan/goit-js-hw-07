const containerEl = document.querySelector('#controls');
const inputElByRenderBox = containerEl.querySelector('input');
const buttonRander = containerEl.querySelector('[data-action="render"]');
const buttonDestroy = containerEl.querySelector('[data-action="destroy"]');
const container = document.getElementById('boxes');


buttonRander.addEventListener('click', () => {
    let inputValue = parseInt(inputElByRenderBox.value);
    createBoxes(inputValue);
});

buttonDestroy.addEventListener('click', () => {
    container.innerHTML = '';
});

function createBoxes(amount) {
    let counterSize = 30;
    for (let i = 0; i < amount; i++){
        const box = document.createElement('div');
        counterSize += 10;
        box.style.width += `${counterSize}px`;
        box.style.height += `${counterSize}px`;
        box.style.backgroundColor = randomRgb();
        box.classList.add('randeredBox');
        container.appendChild(box);
    }
};

const randomRgb = () => {
        const rgbNum = () => Math.floor(Math.random() * 256);
        const r = rgbNum();
        const g = rgbNum();
        const b = rgbNum();
        return `rgb(${r},${g},${b})`;
    };
