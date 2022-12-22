const sumAll = function(numOne, numTwo) {
    // check for validity of arguments
    if (numOne < 0 || numTwo < 0) {
        return 'ERROR';
    }
    if (typeof numOne != 'number' || typeof numTwo != 'number') {
        return 'ERROR';
    }
    // create variable to hold sum
    let sum = 0;
    // checks wich parameter is larger
    if (numOne > numTwo) {
        // reverse the numbers
        let tempNum = numOne;
        numOne = numTwo;
        numTwo = tempNum;
    }
    // starts loop from smaller to larger
    for (let i = numOne; i <= numTwo; i++) {
        // sums each value in loop to sumVariable
        sum += i;
    }
    // return sum
    return sum;
};



// Do not edit below this line
module.exports = sumAll;
