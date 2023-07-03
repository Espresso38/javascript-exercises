const sumAll = function(numOne, numTwo) {
    if (!Number.isInteger(numOne) || !Number.isInteger(numTwo)) { 
        return "ERROR";
    }
    else if (numOne > 0 && numTwo > 0) {
        let sum = 0;
        for (let i = 0; i <= numOne || i <= numTwo; i++) {
            sum += i;
        }
    return sum;
    }
    else if (numOne < 0 || numTwo < 0) {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
