/**
 * Count number of digits in a number
 * @description Write a function that takes an integer n and returns the number of digits in n
 * @param {number} n
 * @return {number}
 */

function countNumberOfDigits(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

console.log(countNumberOfDigits(12345));

/**
 * Count number of digits in a number
 * @description Write a function that takes an integer n and returns the number of digits in n using for loop
 * @param {number} n
 * @return {number}
 */
function countNumberOfDigits(n) {
  let count = 0;
  for (let i = n; i > 0; i = i / 10) {
    count++;
  }
  return count;
}

/**
 * simplest of all solutions
 * @description Write a function that takes an integer n and returns the number of digits in n using Math.floor
 * @param {*} n
 * @returns
 */
function countNumberOfDigits(n = 0) {
  let count = 0;
  const length = n.toString().length;
  return length;
}

console.log(countNumberOfDigits(123123132));
