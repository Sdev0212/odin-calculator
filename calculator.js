/* Pseudocode:
    get first number
        detect numbers and . store in object & display as typed out
    get operation
        detect when operation button pressed
    get second number
        detect numbers and . store in object & display as typed
    wait for equals or another operation
    do calculation and display result
    if equals => go back to get operation
    else if operation => go back to get second number
*/

//initialize variables
let firstNum = ''
let secondNum = ''
let operation = null

//buttons and displays
const numberButtons = document.querySelectorAll(['.number'])
const operationButtons = document.querySelectorAll(['.operation'])
const decimalPointButton = document.getElementById('decimal')
const equalsButton = document.getElementById('equals')
const clearButton = document.getElementById('clear')
const deleteButton = document.getElementById('delete')
const previousDisplay = document.getElementById('previous')
const currentDisplay = document.getElementById('current')


//event listeners

equalsButton.addEventListener('click', evaluate)
clearButton.addEventListener('click', clear)


//get numbers and store them for later

numberButtons.forEach((button) => 
button.addEventListener('click', () => storeNum(button.textContent))
)

function storeNum(number) {
    if (currentDisplay.textContent === '0'||shouldReset){
        resetDisplay()
    }
    currentDisplay.style.fontSize = '50px'
    currentDisplay.textContent += number; 
}

function resetDisplay(){
    currentDisplay.textContent = '';
    currentDisplay.style.fontSize = '50px'
    shouldReset = false;
}

function clear(){
    currentDisplay.textContent = '0';
    previousDisplay.textContent = '';
    firstNum = '';
    secondNum = '';
    operation = null;
}

//get and set operation

operationButtons.forEach((button) => 
button.addEventListener('click', () => setOperation(button.textContent))
)

function setOperation(operator) {
    if(operation !== null) { evaluate()}
    firstNum = currentDisplay.textContent;
    operation = operator
    previousDisplay.textContent = `${firstNum} ${operation}`
    resetDisplay();    
}

//calculations

function evaluate() {
    if(operation === null) {return}
    if(operation === '÷' && currentDisplay.textContent == '0'){
        currentDisplay.textContent = 'Dividing by 0 is dangerous'
        currentDisplay.style.fontSize = '20px'
        shouldReset = true;
        return;
    }
    secondNum = currentDisplay.textContent
    currentDisplay.textContent = roundResult(
      calculate(operation, firstNum, secondNum)
    )
    previousDisplay.textContent = `${firstNum} ${operation} ${secondNum} =`
    operation = null
    shouldReset = true
}

function roundResult(ans) {
    return Math.round(ans * 1000)/1000;
}




//operations

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function calculate (operation, a, b){
    a = Number(a);
    b = Number(b);
    switch (operation) {
        case '+':
          return add(a, b)
        case '-':
          return subtract(a, b)
        case '*':
          return multiply(a, b)
        case '÷':
          if (b === 0) return null
          else return divide(a, b)
        default:
          return null
    }
}
