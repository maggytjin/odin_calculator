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
    let shortNum = numOne.toFixed(3);
    display.textContent = `${shortNum}`;
};

function operate(operator, numOne, numTwo) {
    return operator(numOne, numTwo);
};

var display = document.querySelector(".display");
var buttons = document.querySelectorAll(".button");
var displayValue = [];
let value = [];
let decimalCount = 0;

function numberClicked(num) {
    if (decimalCount == 2) {
        decimalCount--;
        alert("Numbers can't have multiple decimals! Try again.");
        return;
    } else if (displayValue.length == 8) {
        return;
    }
    value.push(num);
    displayValue = value.join("");
    display.textContent = `${displayValue}`;
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
var decimal = document.querySelector(".decimal");
decimal.addEventListener("click", function () {
    decimalCount++;
    if (value.length == 0) {
        value = [0];
    }
    numberClicked(".");

})

function getOne() {
    if (numOne == null) {
        numOne = displayValue;
        value = [];
    }
};
function getTwo() {
    if (numOne.length != 0) {
        numTwo = displayValue;
        value = [];
    }
};

var plus = document.querySelector(".plus");
plus.addEventListener("click", function () {
    getOne();
    if (value.length !== 0) {
        getTwo();
        operate(operator, numOne, numTwo);
    }
    operator = add;
});
var minus = document.querySelector(".minus");
minus.addEventListener("click", function() {
    getOne();
    if (value.length !== 0) {
        getTwo();
        operate(operator, numOne, numTwo);
    }
    operator = subtract;
});
var multiplier = document.querySelector(".multiplier");
multiplier.addEventListener("click", function() {
    getOne();
    if (value.length !== 0) {
        getTwo();
        operate(operator, numOne, numTwo);
    }
    operator = multiply;
});
var divider = document.querySelector(".divider");
divider.addEventListener("click", function() {
    getOne();
    if (value.length !== 0) {
        getTwo();
        operate(operator, numOne, numTwo);
    }
    operator = divide;
});

var equals = document.querySelector(".equal");
equals.addEventListener("click", function () {
    if (value.length == 0) {
        display.textContent = "Enter a number";
    } 
    getTwo();
    if (numTwo == 0) {
        display.textContent = "Google it!";
        return;
    } 
    operate(operator, numOne, numTwo);
});

var backspace = document.querySelector(".backspace");
backspace.addEventListener("click", function () {
    var removeNum = displayValue
                        .split("")
    removeNum.pop();
    displayValue = removeNum.join("");
    display.textContent = `${displayValue}`;
});

var startOver = document.querySelector(".clear");
startOver.addEventListener("click", function () {
    numOne = null;
    numTwo = null;
    value = [];
    displayValue = [];
    decimalCount = 0;
    display.textContent = `${value}`;
});