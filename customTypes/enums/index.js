'use strict';
exports.__esModule = true;
// eslint-disable-next-line no-unused-vars
var petOnSale = 'chinchilla';
// eslint-disable-next-line no-unused-vars
var ordersArray = [
  ['rat', 2],
  ['chinchilla', 1],
  ['hamster', 2],
  ['chinchilla', 50]
];
var Pet;
(function (Pet) {
  Pet[Pet.Hamster = 0] = 'Hamster';
  Pet[Pet.Rat = 1] = 'Rat';
  Pet[Pet.Chinchilla = 2] = 'Chinchilla';
  Pet[Pet.Tarantula = 3] = 'Tarantula';
})(Pet || (Pet = {}));
