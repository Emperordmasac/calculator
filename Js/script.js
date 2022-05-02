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