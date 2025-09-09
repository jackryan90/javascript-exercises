const convertToCelsius = function(tempInFahrenheit) {
  let result = (tempInFahrenheit - 32) * 5 / 9;

  const precision = 1;
  const multiplier = Math.pow(10, precision);
  return Math.round(result * multiplier) / multiplier;
};

const convertToFahrenheit = function(tempInCelsius) {
  let result = (tempInCelsius * 9 / 5) + 32;

  const precision = 1;
  const multiplier = Math.pow(10, precision);
  return Math.round(result * multiplier) / multiplier;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
