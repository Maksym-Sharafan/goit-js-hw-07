const counterDiv = document.querySelector('#counter');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const scoreboard = document.querySelector('#value');

let counterValue = parseInt(scoreboard.textContent);

function increment() {
  counterValue += 1;
  scoreboard.textContent = counterValue;
};

function decrement() {
  counterValue -= 1;
  scoreboard.textContent = counterValue;
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);