const fibonacci = function (number) {

    let count
    if (typeof number !== 'number') {
        count = parseInt(number)
    } else {
        count = number
    }
    if (count === 0) return 0;
    if (count < 0) return "OOPS";


    let firstNumber = 1;
    let secondNumber = 0;
    for (let i = 2; i <= number; i++) {
        let current = firstNumber + secondNumber;
        secondNumber = firstNumber;
        firstNumber = current;
    }
    return firstNumber;
};

// Do not edit below this line
module.exports = fibonacci;
