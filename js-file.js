const display = document.querySelector(".display");
const plus = document.querySelector("#add");
const numberButtons = document.querySelectorAll(".save");
const clearButton = document.querySelector("#clear");
const operatorButtons = document.querySelectorAll(".arithmetic");
const equalSign = document.querySelector("#equal");
let num1 = "";
let ab = [];
let operation = "";
let result = [];


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
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "x") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  } else {
    return "ERROR"
  }
};



//-------------Function to change Display------------//

function addSaveValueClick() {
  for (let i=0; i<numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', saveValue);
  };
};

function addClearDisplayClick() {
  clearButton.addEventListener('click', clearDisplay)
};

function clearDisplay() {
  display.textContent = "";
};

function saveValue(e) {
  console.log(e.target.value);
  num1 += e.target.value;
  display.textContent = num1;
};

function addOperationClick() {
  for (i=0; i<operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', chooseOperation)
  };
};

function computer() {
  equalSign.addEventListener('click', performCalculation);
};

function chooseOperation(e) {
  console.log(e.target.value)
  operation = e.target.value;
  ab.push(num1);
  num1="";
  console.log(ab);
};

function performCalculation() {
  ab.push(num1);
  console.log(ab);
  a = parseInt(ab[0]);
  b = parseInt(ab[1])
  let result = operate(operation, a, b);
  display.textContent = result;
  ab = [];
  num1 = "";
}

//--------------Program-------------------------------//

addSaveValueClick();
addClearDisplayClick();
addOperationClick();
computer();