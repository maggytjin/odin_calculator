function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

var numOne; 
var operator;
var numTwo;

function operate(operator, numOne, numTwo) {
    return operator(numOne, numTwo);
};

console.log(operate(add, 3, 4));