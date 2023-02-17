'use strict';
exports.__esModule = true;
var functionSolution;
functionSolution = function (a) {
  var aVSM;
  var sum;
  aVSM = [];
  for (var i = 0; i < a.length; i++) {
    sum = 0;
    for (var j = 0; j < a.length; j++) {
      sum += Math.abs(a[i] - a[j]);
    }
    aVSM.push(sum);
  }
  return a[aVSM.indexOf(Math.min.apply(Math, aVSM))];
};
functionSolution([2, 4, 7]);
