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
            operator = '+';
            return;
        } else {
            num2 = Number(displayValue);
        };

        result = operate(operator, num1, num2);
        
        if (result == Infinity || isNaN(result)) {
            result = 'bruh.';
        };

        operator = '+';

        displayValue = result.toString().substring(0, 9);
        document.getElementById('display').innerHTML = displayValue;
        num1 = result;
        displayValue = '';
        executed = false;
    } else {
        num1 = Number(displayValue);
        operator = '+';
        
        executed = false;
        }
    
    document.getElementById('dotBtn').disabled = false;
});
document.querySelector('#subtractBtn').addEventListener('click', () => {
    if (num1 != undefined) {
        if (Number(displayValue) == 0) {
            operator = '-';
            return;
        } else {
            num2 = Number(displayValue);
        };

        result = operate(operator, num1, num2);
       
        if (result == Infinity || isNaN(result)) {
            result = 'bruh.';
        };

        operator = '-';

        displayValue = result.toString().substring(0, 9);
        document.getElementById('display').innerHTML = displayValue;
        num1 = result;
        displayValue = '';
        executed = false;
    } else {
        num1 = Number(displayValue);
        operator = '-';
        
        executed = false;
        }
    document.getElementById('dotBtn').disabled = false;
});
document.querySelector('#multiplyBtn').addEventListener('click', () => {
    if (num1 != undefined) {
        if (Number(displayValue) == 0) {
            operator = '*';
            return;
        } else {
            num2 = Number(displayValue);
        };

        result = operate(operator, num1, num2);
    
        if (result == Infinity || isNaN(result)) {
            result = 'bruh.';
        };

        operator = '*';

        displayValue = result.toString().substring(0, 9);
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
    document.getElementById('dotBtn').disabled = false;
});
document.querySelector('#divideBtn').addEventListener('click', () => {
    

    if (num1 != undefined) {
        if (Number(displayValue) == 0) {
            operator = '/';
            return;
        } else {
            num2 = Number(displayValue);
        };

        result = operate(operator, num1, num2);

        if (result == Infinity || isNaN(result)) {
            result = 'bruh.';
        };

        operator = '/';

        displayValue = result.toString().substring(0, 9);
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
    document.getElementById('dotBtn').disabled = false;
});
document.querySelector('#resultBtn').addEventListener('click', () => {
    num2 = Number(displayValue);
    if (num1 == undefined || num2 == undefined || operator == undefined) {
        return;
    }
    result = operate(operator, num1, num2);
    if (result == Infinity || isNaN(result)) {
        result = 'bruh.';
    };
    displayValue = result.toString().substring(0, 9);
    document.getElementById('display').innerHTML = displayValue;
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    executed = false;
});

document.querySelector('#oneBtn').addEventListener('click', () => {
    emptyDisplay ();
    displayValue += '1';
    document.getElementById('display').innerHTML = displayValue.substring(0, 9);
});
document.querySelector('#twoBtn').addEventListener('click', () => {
    emptyDisplay ();
    displayValue += '2';
    document.getElementById('display').innerHTML = displayValue.substring(0, 9);
});
document.querySelector('#threeBtn').addEventListener('click', () => {
    emptyDisplay ();
    displayValue += '3';
    document.getElementById('display').innerHTML = displayValue.substring(0, 9);
});
document.querySelector('#fourBtn').addEventListener('click', () => {
    emptyDisplay ();
    displayValue += '4';
    document.getElementById('display').innerHTML = displayValue.substring(0, 9);
});
document.querySelector('#fiveBtn').addEventListener('click', () => {
    emptyDisplay ();
    displayValue += '5';
    document.getElementById('display').innerHTML = displayValue.substring(0, 9);
});
document.querySelector('#sixBtn').addEventListener('click', () => {
    emptyDisplay ();
    displayValue += '6';
    document.getElementById('display').innerHTML = displayValue.substring(0, 9);
});
document.querySelector('#sevenBtn').addEventListener('click', () => {
    emptyDisplay ();
    displayValue += '7';
    document.getElementById('display').innerHTML = displayValue.substring(0, 9);
});
document.querySelector('#eightBtn').addEventListener('click', () => {
    emptyDisplay ();
    displayValue += '8';
    document.getElementById('display').innerHTML = displayValue.substring(0, 9);
});
document.querySelector('#nineBtn').addEventListener('click', () => {
    emptyDisplay ();
    displayValue += '9';
    document.getElementById('display').innerHTML = displayValue.substring(0, 9);
});
document.querySelector('#zeroBtn').addEventListener('click', () => {
    emptyDisplay ();
    displayValue += '0';
    document.getElementById('display').innerHTML = displayValue.substring(0, 9);
});
document.querySelector('#dotBtn').addEventListener('click', () => {
    if (document.getElementById('display').textContent.includes('.')) {
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

    addExecuted = false;
    subtractExecuted = false;
    multiplyExecuted = false;
    divideExecuted = false;
});
document.querySelector('#backBtn').addEventListener('click', () => {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').innerHTML = displayValue;
});


