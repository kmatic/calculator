const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const display = document.querySelector('.display');

let displayVal

numberBtn.forEach(button => {
    button.addEventListener('click', () => updateDisplay(button.textContent));
});

function updateDisplay(value) {
    if (display.textContent == '0') {
        display.textContent = '';
    }
    display.textContent += value;
    displayVal = display.textContent;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a , b) {
    return a * b;
}

function divide(a , b) {
    if (b == 0) {
        return 'OOPS';
    }
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
    }
}

