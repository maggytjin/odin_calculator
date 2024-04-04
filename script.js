var numOne; 
var operator;
var numTwo;

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

function operate(operator, numOne, numTwo) {
    return operator(numOne, numTwo);
};

var display = document.querySelector(".display");
var displayValue = [];

var one = document.querySelector(".one");
one.addEventListener("click", function () {
    displayValue.push(1);
    display.textContent += 1;
});
var two = document.querySelector(".two");
two.addEventListener("click", function () {
    displayValue.push(2);
    display.textContent += 2;
});
var three = document.querySelector(".three");
three.addEventListener("click", function () {
    displayValue.push(3);
    display.textContent += 3;
});
var four = document.querySelector(".four");
four.addEventListener("click", function () {
    displayValue.push(4);
    display.textContent += 4;
});
var five = document.querySelector(".five");
five.addEventListener("click", function () {
    displayValue.push(5);
    display.textContent += 5;
});
var six = document.querySelector(".six");
six.addEventListener("click", function () {
    displayValue.push(6);
    display.textContent += 6;
});
var seven = document.querySelector(".seven");
seven.addEventListener("click", function () {
    displayValue.push(7);
    display.textContent += 7;
});
var eight = document.querySelector(".eight");
eight.addEventListener("click", function () {
    displayValue.push(8);
    display.textContent += 8;
});
var nine = document.querySelector(".nine");
nine.addEventListener("click", function () {
    displayValue.push(9);
    display.textContent += 9;
});
var zero = document.querySelector(".zero");
zero.addEventListener("click", function () {
    displayValue.push(0);
    display.textContent += 0;
});

var plus = document.querySelector(".plus");
plus.addEventListener("click", function () {
    
})