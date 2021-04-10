const containerEl = document.querySelector('#controls');
const inputElByRenderBox = containerEl.querySelector('input');
const buttonRander = containerEl.querySelector('[data-action="render"]');
const buttonDestroy = containerEl.querySelector('[data-action="destroy"]');



function createBoxes(amount) {
  
  for (let i = 0; i <= amount; i++) {
    
    let boxes = document.createElement('div');
    console.log(boxes);
  };

};

const value = parseInt(inputElByRenderBox.value);
console.log(value);

//     const takeValueInput = (event) => {
    //         const value = event.currentTarget.value;
    //         return parseInt(value);
    //     };
    
//inputElByRenderBox.addEventListener('change', takeValueInput);

// buttonRander.addEventListener('click', anyway());
