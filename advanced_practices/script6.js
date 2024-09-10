// import './shoppingCart.js';
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// // import { totalPrice as price } from './shoppingCart.js';
// console.log('import module');

// addToCart(3, 'fish');
// console.log(price, tq);

//we can import all using *

import * as shoppingCart from './shoppingCart.js';
console.log('import module');

shoppingCart.addToCart(5, 'fish');
console.log(shoppingCart.totalPrice, shoppingCart.tq);

//dont mix the default and normal name import together eventhough it will work
// import add, { totalPrice as price, tq } from './shoppingCart.js';
// console.log(price); // dont do that

// inporting default
import add from './shoppingCart.js';
add(3, 'egg');
import { cart } from './shoppingCart.js';
console.log(cart);

//module pattern private function
// const shoppingCart2 = (function () {
//   const shippingCost = 10;
//   const cart = [];
//   const totalPrice = 235;
//   const totalQuantity = 23;
//   const addToCart = (quantity, product) => {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to the cart`);
//   };
//   const orderFromStock = (quantity, product) => {
//     console.log(`${quantity} ${product} ordered from the stock`);
//   };
//   return {
//     cart,
//     totalPrice,
//     totalQuantity,
//     addToCart,
//   };
// })();

// shoppingCart2.addToCart(2, 'egg');
// shoppingCart2.addToCart(3, 'meat');

// console.log(shoppingCart2);

// //how to export and import using common.js

// export.addToCart = (quantity, product) => {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to the cart`);
//   };

// //import
//   const { addToCart } = require('./shoppingCart.js')

import cloneDeep, { first, functions } from 'lodash-es';

const state = {
  cart: [
    { product: 'Bread', quantity: 2 },
    { product: 'fish', quantity: 4 },
    { product: 'shoe', quantity: 2 },
  ],
  user: { loggedIn: true },
};

const stateCopy = Object.assign({}, state);
//how to use cloneDeep
const stateCloneDeep = cloneDeep(state);
console.log(stateCloneDeep);

stateCopy.user.loggedIn = false;

console.log(stateCopy);
if (module.hot) {
  module.hot.accept();
}
class person {
  greeting = 'hey';
  constructor(firstname) {
    this.firstname = firstname;
    console.log(`${this.greeting} ${this.firstname}`);
  }
}

const ade = new person('ade');
console.log(ade);
console.log(cart.find((el) => el.quantity > 3));
Promise.resolve('Test').then((res) => console.log(res));
import 'core-js/stable';

//polifilling
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

(async function () {
  try {
    const data = await Promise.all([
      Promise.resolve('good to go'),
      Promise.resolve('ready to go'),
      Promise.resolve('good'),
    ]);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
})();

Promise.resolve('her').then((res) => console.log(res));
