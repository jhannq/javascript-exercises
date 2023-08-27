const convertToCelsius = function(temp) {
  let celsius = Math.round((temp - 32) *(5/9) * 10) /10;

  return celsius;
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = (temp * 1.8) + 32;
  let fahrenheitRounded = Math.round(fahrenheit*10)/10;
  return fahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
