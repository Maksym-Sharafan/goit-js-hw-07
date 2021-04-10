const inputEl = document.getElementById('name-input');
const spanEl = document.getElementById('name-output');

inputEl.addEventListener('input', replaceContentInSpan);

function replaceContentInSpan(event) {
  const curentValue = event.currentTarget.value;
  if (curentValue === '') {  
      return spanEl.textContent = 'незнакомец';
  } else {
      console.log(spanEl.textContent = curentValue);
      return spanEl.textContent = curentValue;
  }
}