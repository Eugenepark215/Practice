'use strict';
exports.__esModule = true;
var products = require('./products');
var productName = 'shirt';
var shipping;
var taxPercent;
var taxTotal;
var total;
var shippingAddress = '1600 Pennsylvania Avenue NW, Washington, DC 20500';
var product = products.default.filter(function (product) { return product.name === productName; })[0];
// eslint-disable-next-line no-console
console.log(product);
if (product.preOrder === 'true') {
  // eslint-disable-next-line no-console
  console.log('We will send you a message when your product is on its way.');
}
if (Number(product.price) > 25) {
  shipping = 0;
  // eslint-disable-next-line no-console
  console.log('Free shipping.');
} else {
  shipping = 5;
  // eslint-disable-next-line no-console
  console.log('$5 shipping.');
}
if (shippingAddress.match('New York')) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
// eslint-disable-next-line no-console
console.log('\nProduct:  '.concat(product.name, '\nAddress:  ').concat(shippingAddress, '\nPrice:    $').concat(product.price, '\nTax:      $').concat(taxTotal, '\nShipping: $').concat(shipping, '\nTotal:    $').concat(total, '\n'));
