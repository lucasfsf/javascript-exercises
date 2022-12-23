const roundToDecimal = (number, decimalPlaces) => Math.round(number*(10**decimalPlaces))/10**decimalPlaces;

const convertToCelsius = function(temperature) {
  // formula for conversion = (x - 32) x 5/9
  let newTemperature = (temperature - 32) * 5/9;
  return roundToDecimal(newTemperature, 1);
};

const convertToFahrenheit = function(temperature) {
  // formula for conversion = (x . 9/5 + 32)
  let newTemperature = (temperature * 9/5 + 32);
  return roundToDecimal(newTemperature, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
