console.log('export module');

export const cart = [];

export const addToCart = function (quantity, product) {
  cart.push({ quantity, product });
  console.log(`${quantity} ${product} added to the cart`);
};

const totalPrice = 237;
const totalQuantity = 23;
export { totalPrice, totalQuantity as tq };

//how to export default 'dont add any name'

export default function (quantity, product) {
  cart.push({ quantity, product });
  console.log(`${quantity} ${product} added to the cart`);
}
