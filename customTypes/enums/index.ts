// eslint-disable-next-line no-unused-vars
let petOnSale = 'chinchilla';
// eslint-disable-next-line no-unused-vars
let ordersArray = [
  ['rat', 2],
  ['chinchilla', 1],
  ['hamster', 2],
  ['chinchilla', 50]
];

enum Pet {
  Hamster,
  Rat,
  Chinchilla,
  Tarantula
}
// eslint-disable-next-line no-unused-vars
const petOnSaleTS: Pet = Pet.Chinchilla;

// eslint-disable-next-line no-unused-vars
const ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50]
];

export { }
