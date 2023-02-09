// eslint-disable-next-line no-unused-vars
let petOnSale = 'chinchilla';
// eslint-disable-next-line no-unused-vars
let ordersArray = [
  ['rat', 2],
  ['chinchilla', 1],
  ['hamster', 2],
  ['chinchilla', 50]
];
//unspecfied enums are given numerical values
enum Pet {
  Hamster = 'HAMSTER',
  Rat = 'RAT',
  Chinchilla = 'CHINCHILLA',
  Tarantula = 'TARANTULA'
}

// eslint-disable-next-line no-unused-vars
let petOnSaleTS: Pet = Pet.Chinchilla;
// eslint-disable-next-line no-unused-vars
let ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50]
];

export { }
