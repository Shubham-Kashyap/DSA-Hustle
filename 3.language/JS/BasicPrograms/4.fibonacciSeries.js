/**
 * Fibonacci Series
 * @description Write a function that takes an integer n and returns the nth number in the Fibonacci Series using for loop
 * @param {number} n
 * @return {number}
 */
function fibbonacciSeries(n) {
  let a = 0;
  let b = 1;
  let series = "";
  for (let i = 0; i <= n; i++) {
    let temp = a;
    a = b;
    b = temp + b;
    series = series.concat(i === 0 ? "" : ",", temp);
  }
  return series;
}

console.log(fibbonacciSeries(5));

/**
 * fibonacciSeries
 * @description Write a function that takes an integer n and returns the nth number in the Fibonacci Series using while loop
 * @param {*} n
 * @returns
 */
function fibonacciSeries(n = 1) {
  let current = 0;
  let next = 1;
  let series = "" + current;

  while (next <= n) {
    series = series.concat(",", next); // Append 1, then 1, then 2...
    let temp = current + next;
    current = next;
    next = temp;
  }
  return series;
}

console.log(fibbonacciSeries(5));
