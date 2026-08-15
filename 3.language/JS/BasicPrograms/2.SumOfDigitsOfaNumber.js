/**
 * Sum of digits of a number
 * @description Write a function that takes an integer n and returns the sum of digits of n
 * @param {number} n
 * @return {number}
 */
function sumOfDigitsOfANumber(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

console.log(sumOfDigitsOfANumber(12345));

/**
 * Sum of digits of a number
 * @description Write a function that takes an integer n and returns the sum of digits of n using for loop
 * @param {number} n
 * @return {number}
 */
function sumOfDigitsOfANumber(n) {
  let sum = 0;
  for (let i = n; i > 0; i = i / 10) {
    sum += i % 10;
  }
  return sum;
}
