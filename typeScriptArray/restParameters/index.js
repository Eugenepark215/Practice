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
