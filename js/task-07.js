const inputElRange = document.querySelector('#font-size-control');
const spanElText = document.querySelector('#text');

function changeFontSizeBySpan(event) {
  const curentValueRange = event.currentTarget.value;

  spanElText.setAttribute('style', `font-size:${curentValueRange}px`);
};

inputElRange.addEventListener('input', changeFontSizeBySpan);