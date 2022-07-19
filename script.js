const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const current = document.querySelector('.current');
const previous = document.querySelector('.previous');
const clearBtn = document.querySelector('#clear');
const deleteBtn = document.querySelector('#delete');
const equalsBtn = document.querySelector('#equals');

let displayVal = current.textContent;
let operatorVal = ''; 
let firstNum = '';
let secondNum = '';
let result = '';

deleteBtn.addEventListener('click', () => deleteDisplay());
clearBtn.addEventListener('click', () => clearDisplay());
equalsBtn.addEventListener('click', () => calculate());

numberBtn.forEach(button => {
    button.addEventListener('click', () => updateDisplay(button.textContent));
});

operatorBtn.forEach(button => {
    button.addEventListener('click', () => setOperator(button.textContent));
})

function updateDisplay(value) {
    if (current.textContent == '0' || displayVal == '') {
        current.textContent = '';
    }
    current.textContent += value;
    displayVal = current.textContent;
}

function setOperator(operator) {
    if (operatorVal) {
        calculate();
    }
    operatorVal = operator;
    firstNum = current.textContent;
    displayVal = '';
    previous.textContent = `${firstNum} ${operatorVal}`;
    console.log(operatorVal);
}

function deleteDisplay() {
    current.textContent = current.textContent.slice(0, -1);
    displayVal = current.textContent;
}

function clearDisplay() {
    current.textContent = '0';
    previous.textContent = '';
    displayVal = current.textContent;
    operatorVal = '';
    firstNum = '';
    secondNum = '';
    result = '';
}

function calculate() {
    // if (displayVal != '') {
    //     secondNum = current.textContent;
    // }
    if (operatorVal == '') {
        return;
    }
    secondNum = current.textContent;
    result = operate(operatorVal, parseFloat(firstNum), parseFloat(secondNum));
    current.textContent = result;
    previous.textContent = `${firstNum} ${operatorVal} ${secondNum} =`;
    operatorVal = '';
    secondNum = '';
    displayVal = '';
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

function remainder(a , b) {
    if (b == 0) {
        return 'OOPS';
    }
    return a % b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '×':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
        case '%':
            return remainder(a, b);
    }
}

