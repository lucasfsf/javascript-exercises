const add = function(x, y) {
	return x + y;
};

const subtract = function(x , y) {
	return x - y;
};

const sum = function(array) {
	return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(array) {
  return array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function(number, power) {
  if (power == 1) {
    return number;
  }
  return number * arguments.callee(number, power-1);
};

const factorial = function() {
	
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
