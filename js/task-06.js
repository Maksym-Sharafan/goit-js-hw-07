const inputElValidate = document.getElementById("validation-input");


function validateInputByLength(event) {
  const curentValue = event.currentTarget.value;
  const standartLength = parseInt(inputElValidate.getAttribute('data-length'));
  
  if (curentValue.length === standartLength) {
    inputElValidate.classList.remove("invalid");
    inputElValidate.classList.add("valid");

  } else {
    inputElValidate.classList.add("invalid");
    inputElValidate.classList.remove("valid");
  }
};

inputElValidate.addEventListener('blur', validateInputByLength);