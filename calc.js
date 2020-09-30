function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

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
};

function emptyDisplay() {
    if (!executed) {
        executed = true;
        displayValue = '';
    }
};

let displayValue = '';
let num1;
let num2;
let operator
let executed = false;

document.querySelector('#addBtn').addEventListener('click', () => {
    if (num1 != undefined) {
        if (Number(displayValue) == 0) {
            num2 = num2;
        } else {
            num2 = Number(displayValue)};
        operator = '+';
        result = operate(operator, num1, num2);
        displayValue = result;
        document.getElementById('display').innerHTML = displayValue;
        num1 = result;
        displayValue = '';
        executed = false;
    } else {
        num1 = Number(displayValue);
        operator = '+';
        displayValue = '';
        executed = false;
        }
});
document.querySelector('#subtractBtn').addEventListener('click', () => {
    if (num1 != undefined) {
        if (Number(displayValue) == 0) {
            num2 = num2;
        } else {
            num2 = Number(displayValue)};
        operator = '-';
        result = operate(operator, num1, num2);
        displayValue = result;
        document.getElementById('display').innerHTML = displayValue;
        num1 = result;
        displayValue = '';
        executed = false;
    } else {
        num1 = Number(displayValue);
        operator = '-';
        displayValue = '';
        executed = false;
        }
});
document.querySelector('#multiplyBtn').addEventListener('click', () => {
    if (num1 != undefined) {
        if (Number(displayValue) == 0) {
            num2 = num2;
        } else {
            num2 = Number(displayValue)};
        operator = '*';
        result = operate(operator, num1, num2);
        displayValue = result;
        document.getElementById('display').innerHTML = displayValue;
        num1 = result;
        displayValue = '';
        executed = false;
    } else {
        num1 = Number(displayValue);
        operator = '*';
        displayValue = '';
        executed = false;
        }
});
document.querySelector('#divideBtn').addEventListener('click', () => {
    if (num1 != undefined) {
        if (Number(displayValue) == 0) {
            num2 = num2;
        } else {
            num2 = Number(displayValue)};
        operator = '/';
        result = operate(operator, num1, num2);
        displayValue = result;
        document.getElementById('display').innerHTML = displayValue;
        num1 = result;
        displayValue = '';
        executed = false;
    } else {
        num1 = Number(displayValue);
        operator = '/';
        displayValue = '';
        executed = false;
        }
});
document.querySelector('#resultBtn').addEventListener('click', () => {
    num2 = Number(displayValue);
    result = operate(operator, num1, num2);
    displayValue = result;
    document.getElementById('display').innerHTML = displayValue;
    executed = false;
});

document.querySelector('#numbers').addEventListener('click', () => {

});

document.querySelector('#oneBtn').addEventListener('click', () => {
    emptyDisplay ();
    displayValue += '1';
    document.getElementById('display').innerHTML = displayValue;
});
document.querySelector('#twoBtn').addEventListener('click', () => {
    emptyDisplay ();
    displayValue += '2';
    document.getElementById('display').innerHTML = displayValue;
});
document.querySelector('#threeBtn').addEventListener('click', () => {
    emptyDisplay ();
    displayValue += '3';
    document.getElementById('display').innerHTML = displayValue;
});
document.querySelector('#fourBtn').addEventListener('click', () => {
    emptyDisplay ();
    displayValue += '4';
    document.getElementById('display').innerHTML = displayValue;
});
document.querySelector('#fiveBtn').addEventListener('click', () => {
    emptyDisplay ();
    displayValue += '5';
    document.getElementById('display').innerHTML = displayValue;
});
document.querySelector('#sixBtn').addEventListener('click', () => {
    emptyDisplay ();
    displayValue += '6';
    document.getElementById('display').innerHTML = displayValue;
});
document.querySelector('#sevenBtn').addEventListener('click', () => {
    emptyDisplay ();
    displayValue += '7';
    document.getElementById('display').innerHTML = displayValue;
});
document.querySelector('#eightBtn').addEventListener('click', () => {
    emptyDisplay ();
    displayValue += '8';
    document.getElementById('display').innerHTML = displayValue;
});
document.querySelector('#nineBtn').addEventListener('click', () => {
    emptyDisplay ();
    displayValue += '9';
    document.getElementById('display').innerHTML = displayValue;
});
document.querySelector('#zeroBtn').addEventListener('click', () => {
    emptyDisplay ();
    displayValue += '0';
    document.getElementById('display').innerHTML = displayValue;
});
document.querySelector('#dotBtn').addEventListener('click', () => {
    if (!(Number.isInteger(displayValue))) {
        document.getElementById('dotBtn').disabled = true;
    } else {
        displayValue += '.';
        document.getElementById('display').innerHTML = displayValue;
    }
});
document.querySelector('#cBtn').addEventListener('click', () => {
    displayValue = '';
    num1 = undefined;
    num2 = undefined; 
    document.getElementById('display').innerHTML = displayValue;
    document.getElementById('dotBtn').disabled = false;
    executed = false;
});
document.querySelector('#backBtn').addEventListener('click', () => {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').innerHTML = displayValue;
});


