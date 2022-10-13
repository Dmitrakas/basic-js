const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  
  let result = 0;

  for (let i = 1; parseInt(n / i) > 0; i *= 10) {
    
    const high = parseInt(n / (i * 10)) * i;
    const low = n % i;
    const number = high + low;

    result = Math.max(result, number);
  }

  return result;
}

module.exports = {
  deleteDigit
};
