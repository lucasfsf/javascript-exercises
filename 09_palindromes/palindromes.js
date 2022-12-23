const reverseString = function(string) {
    let stringArray = string.split("");
    let reversedString = stringArray.reverse().join("");
    return reversedString;
};

const palindromes = function (string) {
    // remove punctuation, wordbreaks and capitalization from string
    const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ ';
    let rawString =  string;
    let rawLetters = rawString.split('');
    let cleanLetters = rawLetters.filter(function(letter) {
        return punctuation.indexOf(letter) === -1;
      });
    var cleanString = cleanLetters.join('').toLowerCase();
    console.log(cleanString);
    // created a new reversed string
    let reversedString = reverseString(cleanString);  
    // return the comparisson between then
    return cleanString === reversedString;

};

// Do not edit below this line
module.exports = palindromes;
