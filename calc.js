function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    if (operator == '+') {
        return add(num1, num2);
    };
    if (operator == '-') {
        return subtract(num1, num2);
    };
    if (operator == '*') {
        return multiply(num1, num2);
    };
    if (operator == '/') {
        return divide(num1, num2);
    };
}

let displayValue = '';
let num1;
let num2;
let operator

document.querySelector('#addBtn').addEventListener('click', () => {
    num1 = Number(displayValue);
    operator = '+';
    displayValue = '';
});
document.querySelector('#subtractBtn').addEventListener('click', () => {
    num1 = Number(displayValue);
    operator = '-';
    displayValue = '';
});
document.querySelector('#multiplyBtn').addEventListener('click', () => {
    num1 = Number(displayValue);
    operator = '*';
    displayValue = '';
});
document.querySelector('#divideBtn').addEventListener('click', () => {
    num1 = Number(displayValue);
    operator = '/';
    displayValue = '';
});
document.querySelector('#resultBtn').addEventListener('click', () => {
    num2 = Number(displayValue);
    result = operate(operator, num1, num2);
    displayValue = result;
    document.getElementById('display').innerHTML = displayValue;
    
});


document.querySelector('#oneBtn').addEventListener('click', () => {
    displayValue += '1';
    document.getElementById('display').innerHTML = displayValue;
});
document.querySelector('#twoBtn').addEventListener('click', () => {
    displayValue += '2';
    document.getElementById('display').innerHTML = displayValue;
});
document.querySelector('#threeBtn').addEventListener('click', () => {
    displayValue += '3';
    document.getElementById('display').innerHTML = displayValue;
});
document.querySelector('#fourBtn').addEventListener('click', () => {
    displayValue += '4';
    document.getElementById('display').innerHTML = displayValue;
});
document.querySelector('#fiveBtn').addEventListener('click', () => {
    displayValue += '5';
    document.getElementById('display').innerHTML = displayValue;
});
document.querySelector('#sixBtn').addEventListener('click', () => {
    displayValue += '6';
    document.getElementById('display').innerHTML = displayValue;
});
document.querySelector('#sevenBtn').addEventListener('click', () => {
    displayValue += '7';
    document.getElementById('display').innerHTML = displayValue;
});
document.querySelector('#eightBtn').addEventListener('click', () => {
    displayValue += '8';
    document.getElementById('display').innerHTML = displayValue;
});
document.querySelector('#nineBtn').addEventListener('click', () => {
    displayValue += '9';
    document.getElementById('display').innerHTML = displayValue;
});
document.querySelector('#zeroBtn').addEventListener('click', () => {
    displayValue += '0';
    document.getElementById('display').innerHTML = displayValue;
});
document.querySelector('#dotBtn').addEventListener('click', () => {
    if (!(Number.isInteger(displayValue))) {
        document.getElementById('dotBtn').disabled = true;
    } else {
        displayValue += '.';
        document.getElementById('display').innerHTML = displayValue;
        if (displayValue.includes('.')) {
            document.getElementById('dotBtn').disabled = true;
        }
    }
});
document.querySelector('#cBtn').addEventListener('click', () => {
    displayValue = '';
    num1 = 0;
    num2 = 0; 
    document.getElementById('display').innerHTML = displayValue;
    document.getElementById('dotBtn').disabled = false;
});
document.querySelector('#backBtn').addEventListener('click', () => {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').innerHTML = displayValue;
});


