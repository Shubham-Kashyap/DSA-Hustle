/**
 * Calculate Simple interst
 * @description Write a function that takes principal, rate and time as parameters and returns the simple interest
 * @param {number} principal
 * @param {number} rate
 * @param {number} time
 * @return {number}
 */
function calculateSimpleIntrest(principal = 0, rate = 0, time = 0) {
  const result = (principal * rate * time) / 100;
  return result;
}
console.log(calculateSimpleIntrest(1000, 10, 2));
/**
 * Calculate Compound interst
 * @description Write a function that takes principal, rate and time as parameters and returns the compound interest
 * @param {number} principal
 * @param {number} rate
 * @param {number} time
 * @param {number} n - number of times interest is compounded per year
 *                 n=1 - annually
 *                 n=2 - semi-annually
 *                 n=4 - quarterly
 *                 n=12 - monthly
 *                 n=365 - daily
 * @return {number}
 *
 */
function calculateCompoundInterest(principal = 0, rate = 0, time = 0, n = 1) {
  const result = principal * (1 + rate / (100 * n)) ** (n * time);
  return result;
}
console.log(calculateCompoundInterest(1000, 10, 2, 2));
/**
 * caclculate power without using Math.pow
 * @description Write a function that takes base and exponent as parameters and returns the power
 * @param {number} base
 * @param {number} exponent
 * @return {number}
 */
function calculatePower(base = 0, exponent = 0) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

function calculatePower(base = 0, exponent = 0) {
  return base ** exponent;
}

function calculatePower(base = 0, exponent = 0) {
  return Math.pow(base, exponent);
}

console.log(calculatePower(2, 3));

/**
 * ----------------------------------------------------------------------------
 * Mathematical operations for conversion
 * ----------------------------------------------------------------------------
 */

/**
 * Convert Fahrenheit to Celsius
 * @description Write a function that takes Fahrenheit as a parameter and returns the equivalent Celsius
 * @param {number} fahrenheit
 * @return {number}
 *  fahrenheit = 32
 *  celsius = 0
 *  formula = 5/9 * (fahrenheit - 32) NOTE : 5/9 = 0.5555555555555556
 */
function convertFahrenheitToCelsius(fahrenheit = 0) {
  const result = (5 / 9) * (fahrenheit - 32);
  return result;
}
console.log(convertFahrenheitToCelsius(32));

/**
 * Convert Celsius to Fahrenheit
 * @description Write a function that takes Celsius as a parameter and returns the equivalent Fahrenheit
 * @param {number} celsius
 * @return {number}
 *  celsius = 0
 *  fahrenheit = 32
 *  formula = 9/5 * celsius + 32 NOTE : 9/5 = 1.8
 */
function convertCelsiusToFahrenheit(celsius = 0) {
  const result = (9 / 5) * celsius + 32;
  return result;
}
console.log(convertCelsiusToFahrenheit(0));

/**
 * covert kilometers to miles
 * @description Write a function that takes kilometers as a parameter and returns the equivalent miles
 * @param {number} kilometers
 * @return {number}
 * Note : 1 kilometer = 0.621371 miles and 1 mile = 1.609344 kilometers
 */

function convertKilometersToMiles(kilometers = 0) {
  const result = kilometers * 0.621371;
  return result;
}
console.log(convertKilometersToMiles(10));

/**
 * covert miles to kilometers
 * @description Write a function that takes miles as a parameter and returns the equivalent kilometers
 * @param {number} miles
 * @return {number}
 * Note : 1 kilometer = 0.621371 miles and 1 mile = 1.609344 kilometers
 */
function convertMilesToKilometers(miles = 0) {
  const result = miles * 1.609344;
  return result;
}
console.log(convertMilesToKilometers(10));

/**
 * convert days to years / months / weeks / hours / minutes / seconds
 * @description Write a function that takes days as a parameter and returns the equivalent years / months / weeks / hours / minutes / seconds
 * @param {number} days
 * @return {number}
 * Note : 1 day = 24 hours
 *        1 year = 365 days
 *        1 month = 30 days
 *        1 week = 7 days
 *        1 hour = 60 minutes
 *        1 minute = 60 seconds
 *        1 second = 1000 milliseconds
 *        1 millisecond = 1000 microseconds
 */
function convertDaysToOthers(days = 0) {
  const result = {
    years: days / 365,
    months: days / 30,
    weeks: days / 7,
    hours: days * 24,
    minutes: days * 24 * 60,
    seconds: days * 24 * 60 * 60,
    milliseconds: days * 24 * 60 * 60 * 1000,
    microseconds: days * 24 * 60 * 60 * 1000 * 1000,
  };
  return result;
}
