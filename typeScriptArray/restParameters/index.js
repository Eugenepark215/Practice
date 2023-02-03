'use strict';
exports.__esModule = true;
// eslint-disable-next-line no-unused-vars
function addPower(p) {
  var numsToAdd = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    numsToAdd[_i - 1] = arguments[_i];
  }
  var answer = 0;
  for (var i = 0; i < numsToAdd.length; i++) {
    answer += Math.pow(numsToAdd[i], p);
  }
  return answer;
}
// Argument of type 'string' is not assignable to parameter of type 'number'.
// addPower('a string', 4, 5, 6);
