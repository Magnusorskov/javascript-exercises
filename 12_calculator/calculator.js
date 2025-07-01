const add = function (numberOne, numberTwo) {
    return numberOne + numberTwo;
};

const subtract = function (numberOne, numberTwo) {
    return numberOne - numberTwo;
};

const sum = function (array) {
    return array.reduce((sum, number) => sum + number, 0);
};

const multiply = function (array) {
    return array.reduce((sum, number) => sum * number);
};

const power = function (number, power) {
    let computedNumber = number;
    for (let i = 1; i < power; i++) {
        computedNumber *= number;
    }
    return computedNumber;
};

const factorial = function (number) {
    let computedNumber = 1;
    while (number !== 0) {
        computedNumber *= number;
        number--;
    }
    return computedNumber;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
