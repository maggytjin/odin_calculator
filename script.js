var numOne; 
var operator;
var numTwo;

function add(a, b) {
    numOne = parseFloat(a) + parseFloat(b);
    display.textContent = `${numOne}`;
};

function subtract(a, b) {
    numOne = parseFloat(a) - parseFloat(b);
    display.textContent = `${numOne}`;
};

function multiply(a, b) {
    numOne = parseFloat(a) * parseFloat(b);
    display.textContent = `${numOne}`;
};

function divide(a, b) {
    numOne = parseFloat(a) / parseFloat(b);
    let shortNum = numOne.toFixed(2);
    display.textContent = `${shortNum}`;
};

function operate(operator, numOne, numTwo) {
    return operator(numOne, numTwo);
};

var display = document.querySelector(".display");
var displayValue = [];

function numberClicked(num) {
    if (displayValue.length == 0) {
        display.textContent = "";
    };
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

function getOne() {
    if (numOne == null) {
        numOne = displayValue.join("");
        displayValue = [];
    }
    console.log(`Number One:  ${numOne}`);
};
function getTwo() {
    if (numOne.length != 0) {
        numTwo = displayValue.join("");
        displayValue = [];
    }
};

var plus = document.querySelector(".plus");
plus.addEventListener("click", function () {
    getOne();
    if (displayValue.length !== 0) {
        getTwo();
        operate(operator, numOne, numTwo);
    }
    operator = add;
});
var minus = document.querySelector(".minus");
minus.addEventListener("click", function() {
    getOne();
    if (displayValue.length !== 0) {
        getTwo();
        operate(operator, numOne, numTwo);
    }
    operator = subtract;
});
var multiplier = document.querySelector(".multiplier");
multiplier.addEventListener("click", function() {
    getOne();
    if (displayValue.length !== 0) {
        getTwo();
        operate(operator, numOne, numTwo);
    }
    operator = multiply;
});
var divider = document.querySelector(".divider");
divider.addEventListener("click", function() {
    getOne();
    if (displayValue.length !== 0) {
        getTwo();
        operate(operator, numOne, numTwo);
    }
    operator = divide;
});

var equals = document.querySelector(".equal");
equals.addEventListener("click", function () {
    getTwo();
    console.log(`Number One:  ${numOne}`);
    console.log(`Number Two:  ${numTwo}`);
    operate(operator, numOne, numTwo);
});

var startOver = document.querySelector(".clear");
startOver.addEventListener("click", function () {
    numOne = null;
    numTwo = null;
    display.textContent = "";
    console.log(numOne);
});

// Add backspace, decimal, figure out rounding and decimal placing