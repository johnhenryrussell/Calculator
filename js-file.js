const display = document.querySelector(".display");
const plus = document.querySelector("#add");
const numberButtons = document.querySelectorAll(".save");
let a = "";
let b = "";
let operation = "";


//---------- Arithmetic Functions---------- //

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a-b;
}
function multiply(a, b) {
  return a*b;
}
function divide(a,b) {
  return a/b;
}

function operate(operator, a, b) {
  if (operator === "add") {
    return add(a, b);
  } else if (operator === "subtract") {
    return subtract(a, b);
  } else if (operator === "multiply") {
    return multiply(a, b);
  } else if (operator === "divide") {
    return divide(a, b);
  } else {
    return "ERROR"
  }
};



//-------------Function to change Display------------//

function addClick() {
  for (let i=0; i<numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', saveValue);
  };
};

function saveValue(e) {
  console.log(e.target.value);
}

addClick();