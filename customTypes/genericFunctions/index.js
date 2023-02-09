'use strict';
exports.__esModule = true;
function getFilledArray(value, n) {
  return Array(n).fill(value);
}
var stringArray;
var numberArray;
var personArray;
var coordinateArray;
// eslint-disable-next-line no-unused-vars
stringArray = getFilledArray('hi', 6);
// eslint-disable-next-line no-unused-vars
numberArray = getFilledArray(9, 6);
// eslint-disable-next-line no-unused-vars
personArray = getFilledArray({ name: 'J. Dean', age: 24 }, 6);
// eslint-disable-next-line no-unused-vars
coordinateArray = getFilledArray([3, 4], 6);
