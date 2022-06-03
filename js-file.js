const display = document.querySelector(".display");
const plus = document.querySelector("#add");
const numberButtons = document.querySelectorAll(".save");
const clearButton = document.querySelector("#clear");
const operatorButtons = document.querySelectorAll(".arithmetic");
const equalSign = document.querySelector("#equal");
const decimalPoint = document.querySelector("#decimal");
const negSign = document.querySelector("#neg");
let num1 = "";
let numberArray = [];
let operation = "";
let result = [];


//---------- Arithmetic Functions---------- //

function add(a, b) {
  return Math.round((a+b) *100000) /100000;
}
function subtract(a, b) {
  return Math.round((a-b) *100000) /100000;
}
function multiply(a, b) {
  return Math.round((a*b) *100000) /100000;
}
function divide(a,b) {
  return Math.round((a/b) *100000) /100000;
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

function addClickToButtons() {
  for (let i=0; i<numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', addToArray);
  };
};

function addToArray(e) {
  num1+=e.target.value;
  console.log(num1);
  display.textContent = num1;
}

//-----------Function to add decimal point----------------------//

function addDecimalClick() {
  decimalPoint.addEventListener('click', addDecimal) 
};

function addDecimal() {
  decimalPoint.disabled = true;
  num1 += ".";
  display.textContent = num1;
}


//-----------Function to make number negative---------------------//

function addNegativeClick() {
  negSign.addEventListener('click', addNegative)
};

function addNegative() {
  num1 *= -1;
  display.textContent = num1;
}

//-----------Function to Clear Display and Variables------------//

function addClearDisplayClick() {
  clearButton.addEventListener('click', clearDisplay)
};

function clearDisplay() {
  display.textContent = "";
  numberArray = [];
  num1 = "";
};

function pushToArray() {
  numberArray.push(num1);
  numberArray.push(operationValue);
  num1 = "";
}

function performOperation() {
  numberArray[0] = parseFloat(numberArray[0]);
  numberArray[2] = parseFloat(numberArray[2]);
  return result = operate(numberArray[1], numberArray[0], numberArray[2]);
}

//-------Function to choose operation----------//

function addOperationClick() {
  for (i=0; i<operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', chooseOperation)
  };
};

function chooseOperation(e) {
  decimalPoint.disabled = false;
  operationValue = e.target.value;
  if (numberArray.length < 4) {
    pushToArray();
  console.log(numberArray);
  } else {
      pushToArray();
      performOperation();
      numberArray.splice(0, 3, result);
      display.textContent = result;
      console.log(numberArray);
  }
}

//----------Function to perform calculation--------//

function addEqualSignClick() {
  equalSign.addEventListener('click', performCalculation);
};

function performCalculation() {
  decimalPoint.disabled = false;
  if (numberArray.length > 3) {
    numberArray.push(num1);
    num1="";
    performOperation();       
    numberArray.splice(0, 3, result);
    performOperation();
    console.log(result);
    display.textContent = result;

  } else {
    numberArray.push(num1);
    performOperation();
    display.textContent = result;
  }

}

//--------------Program-------------------------------//

addClickToButtons();
addDecimalClick();
addNegativeClick();
addClearDisplayClick();
addOperationClick();
addEqualSignClick();