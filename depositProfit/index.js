'use strict';
exports.__esModule = true;
var functionSolution;
functionSolution = function (deposit, rate, threshold) {
  var i = 0;
  do {
    i++;
    deposit += deposit * (rate / 100);
  } while (deposit > threshold);
  return i;
};
functionSolution(100, 20, 170);
