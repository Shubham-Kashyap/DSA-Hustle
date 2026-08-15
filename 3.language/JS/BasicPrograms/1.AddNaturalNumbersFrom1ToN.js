/**
 * Sum of all natural numbers from 1 to n
 * @description Write a function that takes an integer n and returns the sum of all natural numbers from 1 to n. using for loop
 * @param {number} n
 * @return {number}
 */
function sumOfNaturalNumbersFrom1ToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumOfNaturalNumbersFrom1ToN(10));

/**
 * Sum of all natural numbers from 1 to n
 * @description Write a function that takes an integer n and returns the sum of all natural numbers from 1 to n. using while loop
 * @param {number} n
 * @return {number}
 */
function sumOfNaturalNumbersFrom1ToN(n) {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i;
    i++;
  }
  return sum;
}
