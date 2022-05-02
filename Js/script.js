// DOM MANIPULATION
const numbers = document.querySelectorAll('data-number');
const operators = document.querySelectorAll('data-operator');
const equalsButton = document.querySelector("equals");
const pointBtn = document.querySelector('point');
const clearBtn = document.querySelector("clear__btn");
const delBtn = document.querySelector('del__btn');
const subScreen = document.querySelector("sub__screen");
const mainScreen = document.querySelector("main__screen");

// event functions
window.addEventListener('keydown', handleClickEvent)


//helper Functions
//1
function handleClickEvent(e) {
    
}

// main calculator functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

//helper function to navigate through the main calculator functions
function calculate(operator, a, b) {
    let a = Number(a);
    let b = Number(b);

    switch(operator) {
        case '/' :
            // incase
            if (b === 0) return null
             else return divide(a, b)
        case '*' :
            return multiply(a, b)
        case '+' :
            return add(a, b)
        case '-' :
            return subtract(a, b)
        default:
            return null
    }
}