const reverseString = function(string) {
    let stringArray = string.split("");
    let reversedString = stringArray.reverse().join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
