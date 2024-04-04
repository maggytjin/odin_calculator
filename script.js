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
function numberClicked(num) {
    displayValue.push(num);
    console.log(displayValue);
    display.textContent += `${num}`;
};

var one = document.querySelector(".one");
one.addEventListener("click", function () {
    numberClicked(1);
});
var two = document.querySelector(".two");
two.addEventListener("click", function () {
    numberClicked(2);
});
var three = document.querySelector(".three");
three.addEventListener("click", function () {
    numberClicked(3);
});
var four = document.querySelector(".four");
four.addEventListener("click", function () {
    numberClicked(4);
});
var five = document.querySelector(".five");
five.addEventListener("click", function () {
    numberClicked(5);
});
var six = document.querySelector(".six");
six.addEventListener("click", function () {
    numberClicked(6);
});
var seven = document.querySelector(".seven");
seven.addEventListener("click", function () {
    numberClicked(7);
});
var eight = document.querySelector(".eight");
eight.addEventListener("click", function () {
    numberClicked(8);
});
var nine = document.querySelector(".nine");
nine.addEventListener("click", function () {
    numberClicked(9);
});
var zero = document.querySelector(".zero");
zero.addEventListener("click", function () {
    numberClicked(0);
});

var plus = document.querySelector(".plus");
plus.addEventListener("click", function () {
    numOne = displayValue.join("");
});


var equals = document.querySelector(".equal");
equals.addEventListener("click", function operate(operator, numOne, numTwo) {
    return operator(numOne, numTwo);
});