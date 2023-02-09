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
// unspecfied enums are given numerical values
var Pet;
(function (Pet) {
  Pet.Hamster = 'HAMSTER';
  Pet.Rat = 'RAT';
  Pet.Chinchilla = 'CHINCHILLA';
  Pet.Tarantula = 'TARANTULA';
})(Pet || (Pet = {}));
// eslint-disable-next-line no-unused-vars
var petOnSaleTS = Pet.Chinchilla;
// eslint-disable-next-line no-unused-vars
var ordersArrayTS = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50]
];
