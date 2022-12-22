const leapYears = function(year) {
    // if not divisible by 4, return false
    if (year % 4 !== 0) {
        return false;
    // if divisible by 100 but not by 400, return false
    } else if (year % 100 === 0 && year % 400 !== 0) {
        return false;
    // else return true
    } else {
        return true;
    }
};

// Do not edit below this line
module.exports = leapYears;
