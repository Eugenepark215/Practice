'use strict';
exports.__esModule = true;
var solutionFunction;
// eslint-disable-next-line no-unused-vars
solutionFunction = function solution(n, firstNumber) {
  var number = ((n / 2) + firstNumber);
  if (number > n) {
    return number - n;
  } else if (number === n) {
    return 0;
  } else {
    return number;
  }
};
