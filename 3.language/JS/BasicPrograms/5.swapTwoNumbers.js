/**
 * Swap two numbers ( the help of third variable  )
 * @description Write a function that takes two numbers and swaps their values
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

function swapTwoNumbers(a = 0, b = 0) {
  const result = {
    before: {
      a,
      b,
    },
  };
  let temp = a;
  a = b;
  b = temp;
  result.after = {
    a,
    b,
  };
  return result;
}

/**
 * Swap two numbers ( without the help of third variable  )
 * @description Write a function that takes two numbers and swaps their values
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

function swapTwoNumbers(a = 0, b = 0) {
  let result = {
    before: {
      a,
      b,
    },
  };
  [a, b] = [b, a];
  result.after = {
    a,
    b,
  };
  return result;
}
