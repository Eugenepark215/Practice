'use strict';
exports.__esModule = true;
// eslint-disable-next-line no-unused-vars
function solution(n, firstNumber) {
  var number = ((n / 2) + firstNumber);
  if (number > n) {
    return number - n;
  } else if (number === n) {
    return 0;
  } else {
    return number;
  }
}
