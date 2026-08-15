const arr = [7, 1, 3, 5, 6, 4, 2];

/**
 * Simplest way to find largest element in an array
 * @param {*} arr
 * @returns
 */
function findLargestElementMethod1(arr = []) {
  return Math.max(...arr);
}

/**
 * Usng reduce method
 * @param {*} arr
 * @returns
 */
function findLargestElementMethod2(arr = []) {
  return arr.reduce((acc, curr) => (acc > curr ? acc : curr));
}

/**
 * using
 * @param {*} arr
 * @returns
 */
function findLargestElementMethod3(arr = []) {
  return arr.call((...args) => Math.max(...args));
}

/**
 * Normal way of finding largest element
 * @param {*} arr
 * @returns
 */
function findLargestElementMethod4(arr = []) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

const cb = findLargestElementMethod1(arr);
console.log(cb);
