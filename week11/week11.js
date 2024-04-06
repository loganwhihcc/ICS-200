const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const mulitply = (a, b) => a * b;

const divide = (a, b) => a / b;

const power = (a,b) => Math.pow(a, b);

const operate = (a, op, b) => {
    switch(op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return mulitply(a, b);
        case '/':
            return divide(a, b);
        case '^':
            return power(a, b);
    }
};

let readInputs = (inputs) => {
    let a = [];
    let b = [];
    let op = [];
    for (let input of inputs) {
        if (input === ' ' && op.length > 0 && b.length > 0) {
            a = [operate(parseFloat(a.join('')), op.join(''), parseFloat(b.join('')))];
            b = [];
            op = [];
            continue;
        }else if ((Number.isInteger(Number(input)) || input === '.') && op.length === 0)
            a.push(input)
        else if ((Number.isInteger(Number(input)) || input === '.') && op.length > 0)
            b.push(input)
        else if (input !== ' ' && op.length === 0)
            op.push(input);
    }
    let answer = operate(parseFloat(a.join('')), op.join(''), parseFloat(b.join('')));
    return String(answer).split(''); 
}

let inputs = [];

let display = document.querySelector('.display');

let allowSym = true;

let allowDec = true;

let clearInputs = true;

let haveOp = false;
let ready = false;

let updateDisplay = (e) => {
    let content = e.target.textContent;
    let type = e.target.classList[0];
    if (type === 'clr') {
        inputs = [];
        allowDec = true;
    }
    else if (type === 'eql' && ready) {
        inputs = readInputs(inputs);
        clearInputs = true;
        ready = false;
    }else if (type === 'num') {
        if (clearInputs)
            inputs = [];
        if (haveOp) {
            ready = true;
            haveOp = false;
        }
        inputs.push(content);
        clearInputs = false;
        allowSym = true;
    }else if (type === 'sym' && allowSym) {
        inputs.push(' ');
        inputs.push(content);
        inputs.push(' ');
        haveOp = true;
        allowSym = false;
        ready = false;
        clearInputs = false;
        allowDec = true;
    }else if (type === 'dec' && allowDec) {
        inputs.push(content);
        allowDec = false;
        clearInputs = false;
    }
    if (inputs.length === 0)
        display.textContent = 0;
    else
        display.textContent = inputs.join(''); 
};

let buttons = document.querySelectorAll('button');
for (let button of buttons) {
    button.addEventListener('click', updateDisplay);
}