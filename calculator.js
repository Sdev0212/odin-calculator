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


//get numbers and store them for later

numberButtons.forEach((button) => 
button.addEventListener('click', () => storeNum(button.textContent))
)

function storeNum(number) {
    if (currentDisplay.textContent === '0'){
        resetDisplay()
    }
    currentDisplay.textContent += number; 
}

function resetDisplay(){
    currentDisplay.textContent = '';
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


