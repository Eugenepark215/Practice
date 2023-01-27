import products from './products';
let productName: string = 'shirt';
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = '1600 Pennsylvania Avenue NW, Washington, DC 20500'

const product = products.filter(product => product.name === productName)[0];
console.log(product);

if (product.preOrder === 'true') {
  console.log('We will send you a message when your product is on its way.');
}

if (Number(product.price) > 25) {
  shipping = 0;
  console.log('Free shipping.')
} else {
  shipping = 5;
  console.log("$5 shipping.")
}

if (shippingAddress.match('New York')) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

taxTotal = Number(product.price) * taxPercent
total = Number(product.price) + taxTotal + shipping;
console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal}
Shipping: $${shipping}
Total:    $${total}
`);
