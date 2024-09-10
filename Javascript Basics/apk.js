'use strict';

// function fruitsProcessor(apple, mango) {
//     console.log(apple, mango);

//     const fruit = `she has ${apple} apple and ${mango} mango `
//     return fruit;
// }

// const fruitLog = fruitsProcessor(2, 4)
// console.log(fruitLog);

// const calcAge = birthYear => 2022 - birthYear;
// const age = calcAge(1990)
// console.log(age);

// const yearUntilRetirement = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retirementYear = 65 - age
//     return `${firstName} will retire in ${retirementYear} years time at age ${age}`;
// }
// console.log(yearUntilRetirement(1990, 'Ade'));

// const calcAverage = (a, b, c) => (a + b + c) / 3
// console.log(calcAverage(1, 2, 3));

// // const data = {
// //     firstName: 'Olamide',
// //     lastName: 'Ayodele',
// //     birthYear: 1998,
// //     calcAge: function() {
// //         this.age = 2022 - this.birthYear

// //     }
// // }

// // console.log(data.calcAge());
// const info = 'lifting weight'

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`${info} ${rep} 🏋️‍♂️ `);

// }
// const years = [1990, 1999, 1997, 1982];
// const newAge = [];

// for (let i = 0; i < years.length; i++) {

//     let year = years[i]
//     newAge.push(2022 - year)

// }
// console.log(newAge);

// // let tip = [];
// // const calcTip = (bills) => {
// //     for (let i = 0; i < bills.length; i++) {
// //         let percentage;
// //         let bill = bills[i];

// //         if (bill <= 50) {
// //             percentage = 0.1;
// //         } else if (bill > 50 && bill <= 100) {
// //             percentage = 0.2;
// //         } else {
// //             percentage = 0.3;
// //         }
// //         // tip[i] = bill * percentage;
// //         tip.push(percentage * bill);
// //     }

// // }
// // const bills = [200, 40, 80]
// // calcTip(bills)

// // console.log(`${bills}
// // ${tip}`);

// // // const dataInfo = {
// // //     bills: [50, 200, 80],
// // //     calcTip: function(bills) {
// // //         this.tip = [];
// // //         this.totalBill = [];

// // //         for (let i = 0; i < this.bills.length; i++) {
// // //             let percentage;
// // //             let bill = this.bills[i]
// // //             if (bill <= 50) {
// // //                 percentage = 0.1;
// // //             } else if (bill > 50 && bill <= 100) {
// // //                 percentage = 0.2
// // //             } else {
// // //                 percentage = 0.3
// // //             }
// // //             this.tip[i] = bill * percentage;
// // //             this.totalBill[i] = bill + (bill * percentage)
// // //         }
// // //     }
// // // }

// // // dataInfo.calcTip();
// // // console.log(dataInfo);

// const billData = function(firstName, bills, restaurant, product) {
//     this.bills = bills;
//     this.firstName = firstName;
//     this.restaurant = restaurant;
//     this.product = product

// }

// billData.prototype.calculateTip = function() {
//     this.tip = [];
//     this.totalTip = [];

//     for (let i = 0; i < this.bills.length; i++) {
//         let percentage;
//         let bill = this.bills[i];

//         if (bill <= 50) {
//             percentage = 0.1;
//         } else if (bill > 50 && bill <= 100) {
//             percentage = 0.2
//         } else {
//             percentage = 0.3
//         }
//         this.tip[i] = bill * percentage;
//         this.totalTip[i] = bill + (bill * percentage)

//         console.log(`${this.firstName[i]} bought ${this.product[i]} at ${this.restaurant[i]} restaurant and paid tip of ${this.tip[i]}, totalbill is therefore ${this.totalTip[i]}`);
//     }

// }

// const newData = new billData(['Tola', 'Bisi', 'ade', 'yemi'], [200, 300, 50, 80], ['Peace', 'RealWealth', 'FreeHouse', 'Limos'], ['Milo', 'Bournvita', 'Cowbell', 'Books']);

// newData.calculateTip();
const temperature1 = [1, 2, 3, 4, 5, 'error', 15, 6, 8];
const temperature2 = [2, 3, 5, 6, 'error', 1];
const calcTemp = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(`max is (${max}) and min is (${min})`);

  return max - min;
};

const amplitude = calcTemp(temperature1, temperature2);
console.log(amplitude);

// const calcMeasurement = function() {
//     const measurement = {
//         firstName: 'Iyanu',
//         value: parseInt(prompt('enter value'))
//     }
//     const temptConv = measurement.value + 273
//     return temptConv;
// }
// console.log(calcMeasurement());

const arrays = [17, 21, 23];

const arrayDetail = function (value) {
  let str = '';
  for (let i = 0; i < value.length; i++) {
    str = str + `...${value[i]} in ${i + 1} days`;
  }
  console.log(str);
};
arrayDetail(arrays);

class dataBox {
  constructor(year, firstname) {
    this.year = year;
    this.firstname = firstname;
  }
  calcAge() {
    this.age = 2022 - this.year;
    console.log(this.age);
  }
}

const debby = new dataBox(2000, 'debby');

debby.calcAge();

function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function info() {
    const message = `your age is ${age}, and born in ${birthYear} `;
    console.log(message);

    if (birthYear > 1994 && birthYear < 2000) {
      const info = `${firstName}, you are a millenial`;
      console.log(info);
    }

    function calcVal(a, b) {
      console.log(a + b);
    }
    calcVal(2, 5);
  }

  info();
}
const firstName = 'bisi';
calcAge(1999);

const data = {
  firstName: 'Iyanu',
  birthYear: 1998,
  calage: function () {
    this.age = 2022 - this.birthYear;
  },
};
data.calage();
console.log(data);

const profile = {
  firstName: 'emmy',
  birthYear: 1999,
  calcAge: function () {
    console.log(2022 - this.birthYear);
    const self = this;
    const newCalc = function () {
      console.log(self.birthYear >= 1999 && self.birthYear <= 1998);
    };
    newCalc();
  },
};
profile.calcAge();

const add = function (val) {
  console.log(arguments);
  let sum = 0;
  for (let i = 0; i < val.length; i++) {
    sum = sum + val[i];
  }
  return sum;
};
console.log(add([1, 2, 3, 4]));

const average = [1, 2, 4];

const aver = function (value) {
  let sum = 0;
  for (let i = 0; i < value.length; i++) {
    sum = sum + value[i];
  }
  // return sum / value.length;
  console.log(sum);
};
const calc = aver(average);

const me = {
  firstName: 'ani',
  age: 30,
};
const friend = me;
friend.firstName = 'ade';
console.log(me);
console.log(friend);

const friendCopy = Object.assign({}, me);
friendCopy.firstName = 'tife';
console.log(me);
console.log(friendCopy);

//destructuring
const restaurant = {
  name: 'Classsico Italiano',
  location: 'via Angelo Tavanti 23. Firenze, Italy',
  categories: ['italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({
    time = '20:00',
    address,
    mainIndex = 1,
    starterIndex = 1,
  }) {
    console.log(
      `${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${time} to ${address}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

//object destructuring

restaurant.orderDelivery({
  time: '22:30',
  address: 'via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'via del sole, 21',
  mainIndex: 1,
});
restaurant.orderDelivery({
  address: 'via del sole, 21',
  mainIndex: 2,
});

// const { name, openingHours, categories, mainMenu } = restaurant;
// console.log(name, openingHours, categories);

// const {
//     name: restaurantName,
//     openingHours: hours,
//     categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //default values
// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// //mutating variables
// let a = 119;
// let b = 100;

// const obj = { a: 20, b: 15, c: 30 };
// ({ a, b } = obj);
// console.log(a, b);

// const {
//     fri: { open, close },
// } = openingHours;
// console.log(open, close);

// //array destructuring
// // const arr = [1, 2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];
// // const d = arr[3];

// // const [x, y, z, p] = arr;
// // console.log(x, y, z, p);

// // let [first, second] = restaurant.categories;
// // console.log(first, second);
// // console.log(restaurant.categories);

// // //switching
// // let [main, secondary] = restaurant.categories;
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // [first, second] = [second, first];
// // console.log(first, second);
// // console.log(restaurant.order(2, 0));

// // const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse);

// // const nested = [1, 2, [3, 4]];
// // // const [, , j] = nested;
// // // console.log(j);

// // const [i, , [j, k]] = nested;
// // console.log(i, j, k);

// // const [m = 4, q = 1, r = 2] = [2, 3];
// // console.log(m, q, r);

// //spread operator (...)

// const arr = [1, 2, 3];
// const newarr = [1, 2, ...arr];
// console.log(...newarr);

// const newMenu = [...restaurant.mainMenu, "groccio"];
// console.log(newMenu);
// const menus = [...newMenu, ...restaurant.starterMenu];
// console.log(...menus);

// //Iterables: arrays, strings, maps, sets. not objects

// //realworld examples
// // const ingredients = [
// //     prompt(`let's make pasta ingredient 1`),
// //     prompt(`let's make pasta ingredient 2`),
// //     prompt(`let's make pasta ingredient 3`),
// // ];

// // console.log(ingredients);

// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// // restaurant.orderPasta(...ingredients);

// const newRestaurant = { ...restaurant, founder: 'Antonio' };
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant };
// restaurantCopy.name = "Illiano Drake";
// console.log(restaurantCopy.name);
// console.log(newRestaurant.name);

// //rest operator
// const [Pizza, , Risotto, ...otherFood] = [
//     ...restaurant.mainMenu,
//     ...restaurant.starterMenu,
// ];
// console.log(Pizza, Risotto, otherFood);

// //for objects
// const { sat, ...weekdays } = openingHours;
// console.log(sat, weekdays);

// //for functions

// const adds = function(...value) {
//     let sum = 0;
//     for (let i = 0; i < value.length; i++) sum += value[i];
//     console.log(sum);
// };
// adds(1, 2, 3);
// adds(1, 2, 3, 4);
// adds(1, 2, 3, 4, 5);

// //short circuiting
// console.log(null || undefined || 0 || "emmy");
// restaurant.orderPizza("curry", "thyme", "tomatoes", "ginger");

// console.log("bolu" && "temmy");

// //nullish value null and undefined (0 or '')

// restaurant.numGuest = 23;
// const guest = restaurant.numGuest || 10;
// console.log(guest);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);
for (const item of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`);

console.log('..........................destructuring..............');
for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);

const family = {
  children: ['ayo', 'bisi', 'kemi'],
  dob: [1990, 1997, 2001],
  calcAge: function () {
    this.age = [];
    for (let i = 0; i < this.dob.length; i++) {
      let dobs = this.dob[i];
      this.age[i] = 2022 - dobs;
      console.log(
        `${this.children[i]} was born in year ${this.dob[i]} and will graduate at age ${this.age[i]}`
      );
    }
  },
  childInfo: function ({ address, time = '1:00', childIndex, friendIndex }) {
    console.log(
      `${this.children[childIndex]} always visit ${this.friend[friendIndex]} at exactly ${time} around ${address} street `
    );
  },
};
family.friend = ['Nike', 'Shade', 'Iyanu'];
family.calcAge();
console.log(family);
const { age, children, friend: friends } = family;
console.log(...age, ...children, ...friends);

family.childInfo({
  address: 'Off 23 Oluwabamise',
  time: '2:00',
  childIndex: 2,
  friendIndex: 1,
});
family.childInfo({
  address: [],
  childIndex: 1,
  friendIndex: 1,
});

const value = [2, 3, [4, 5]];
const [i, , [j]] = value;
console.log(i, j);

const weekdays = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

const week = {
  [weekdays[0]]: {
    open: '10:00',
    close: '24',
  },
};
console.log(week);

//optional chaining
console.log(restaurant.openingHours?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day} we are ${open}`);
}
const close = restaurant.openingHours.thu?.open;
console.log(close);

const user = [
  { name: 'Emmy', email: 'olowookereseun123@gmail.com' },
  { dob: 0 },
];

console.log(user[1]?.dob ?? 'user does not exist');

//object Keys
for (const obj of Object.keys(restaurant.openingHours)) console.log(obj);

const properties = Object.keys(restaurant.openingHours);
let str = `we are open on ${properties.length} days:`;

for (const days of properties) str += ` ${days}`;
console.log(str);
console.log(restaurant);

//object values
const values = Object.values(restaurant.openingHours);
console.log(values);
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

//object entries
for (const [key, { open, close }] of entries)
  console.log(`on ${key} we open at ${open} and close at ${close}`);

const weekend = ['mon', 'tue', 'wed', 'thu'];
for (const week of weekend) {
  const time = restaurant.openingHours[week]?.open ?? 'closed';
  console.log(`i open every ${week} at ${time} `);
}

const dataSet = [
  { name: 'Ayomi', view: { age: 23, dob: 1999 } },
  { name: 'Itunu', age: 23 },
];

const accept = dataSet[0].view?.dob ?? 'wrong';
console.log(accept);

// const number = [1, 2, 3, 4, 5];
// let sum = 0;

// for (const item of number) sum += item;
// sum = sum / number.length;
// console.log(sum);

const number = {
  odds: [2, 3, 4, 1],
};

let sum = 0;
for (const item of number.odds) sum += item;
sum /= number.odds.length;
console.log(sum);

const game = {
  team1: 'Manchester United',
  player: ['adidas', 'nike'],
  team2: 'Arsenal',
  player: ['ferdinard', 'Hussein'],

  goal: ['ferdinard', 'Nike'],
  odds: {
    team1: 2.4,
    x: 3,
    team2: 2.5,
  },
};

for (const [i, player] of game.goal.entries())
  console.log(`Goal ${i + 1}: ${player}`);

const getNumber = Object.values(game.odds);

let sums = 0;
for (const item of getNumber) sums += item;
sums /= getNumber.length;
console.log(sums);

for (const [team, score] of Object.entries(game.odds)) {
  let teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`odd of ${teamStr} ${score}`);
}

//set
const orderSet = new Set(['fish', 'fish', 'egg', 'meat']);
console.log(orderSet);

//set size we use add and delete for set - no indexes in set i.e orderSet[0] or any value will not work unlike array
console.log(orderSet.size);
//has
console.log(orderSet.has('milk'));
console.log(orderSet.has('fish'));
orderSet.add('milk');
orderSet.add('milk');
orderSet.delete('milk');
console.log(orderSet);

//to clear set use clear
// orderSet.clear();
// console.log(orderSet);

//they are iterable like array
for (const order of orderSet) console.log(order);

//array we use push and pop for array
const foodArr = ['fish', 'fish', 'egg', 'meat'];

foodArr.push('milk');
foodArr.push('milk');

console.log(foodArr);

const staff = new Set(['waiter', 'Manager', 'Cook', 'waiter']);
console.log(staff);
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

//map
const rest = new Map();
rest.set('Name', 'Oludare');
rest.set(1, 'france');
console.log(rest.set(2, 'spain'));

//get properties

rest
  .set('categories', ['fish', 'egg'])
  .set('open', 12)
  .set('close', 24)
  .set(true, 'we are open')
  .set(false, 'we are close');
console.log(rest.get('categories'));
console.log(rest.get(true));
const time = 21;

console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//has and delete, clear, size
console.log(rest.has('categories'));
rest.delete(1);
console.log(rest);

const arr = [1, 2];
rest.set(arr, 'test');
console.log(rest);

const questions = new Map([
  ['question', 'what is the best programming language?'],
  [1, 'java'],
  [2, 'python'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'correct answer 🎉'],
  [false, 'wrong answer💥'],
]);
console.log(questions);

//converting object to map
const hourMaps = new Map(Object.entries(restaurant.openingHours));
console.log(hourMaps);

//loop
console.log(questions.get('question'));
for (const [key, value] of questions) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('choose your answer'));
// console.log(answer);

// const res = questions.get('correct') === answer;
// console.log(res ? questions.get(true) : questions.get(false));

//convert map to array

console.log([...questions]);
console.log([...questions.keys()]);
console.log([...questions.values()]);
console.log([...questions.entries()]);

const result = new Map([
  ['chemistry', 81],
  ['physics', 75],
]);
// result.set(['physics', 'biology'], [62, 74]);
console.log([...result]);
// for (const item of result) console.log(item);

// for (const [[i, k], [l, m]] of result)
//   console.log(`${i}: ${l},
// ${k}: ${m}`);

const newTip = [];
const bill = [200, 100, 50];

for (const item of bill) {
  let percentage;
  if (item <= 50) {
    percentage = 0.1;
  } else if (item > 50 && item <= 100) {
    percentage = 0.2;
  } else {
    percentage = 0.3;
  }
  newTip.push(percentage * item);
}
console.log(newTip);

const task = new Set(['jumping', 'singing', 'dancing', 'singing']);
console.log(task);

//challenge

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔃 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔃 Substitution'],
  [64, '🔶 Yellow Card'],
  [69, '🔴 Red Card'],
  [70, '🔃 Substitution'],
  [72, '🔃 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow Card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(36);
const times = [...new Set(gameEvents.keys())].pop();

console.log(
  `An event happened on average, every ${times / gameEvents.size} minutes`
);
for (const [min, event] of gameEvents) {
  let half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

//strings

const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('r'));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

const checkMiddleSeat = function (seat) {
  let E = seat.slice(-1);
  let B = seat.slice(-1);

  if (E === 'E' || B === 'B') console.log('you got the middle seat🤪');
  else console.log('you got lucky seat 😊');
};
checkMiddleSeat('112E');
checkMiddleSeat('112A');
checkMiddleSeat('112B');

console.log(new String('emmy'));
console.log(typeof new String('emmy').slice(1));

const passenger = 'eMmy';
console.log(passenger.toUpperCase());
console.log(passenger.toLowerCase());
const passengerLower = passenger.toLowerCase();
const correct = passenger[0].toUpperCase() + passengerLower.slice(1);
console.log(correct);

const email = 'olowookere@gmail.com';
const loginEmail = '  Olowookere@gmail.com \n';
//trim remove all unnecessary spaces
console.log(loginEmail.trim());

//replace
const priceGB = '127,334£';
const priceUS = priceGB.replace('£', '$').replace(',', '.').replace('1', '3');
console.log(priceUS);

const announce = 'all doors to the passage doors should be closed';
const announceReplace = announce.replace('doors', 'gate'); // this will replace only one door
console.log(announceReplace);
console.log(announce.replace(/doors/g, 'gates')); // using /with g will replace all;

//includes

const planes = '2Boleee';
console.log(planes.includes('Bo'));
console.log(planes.startsWith('1'));

const checkBaggages = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('you are not allowed on board');
  } else console.log('you are allowed on board');
};
checkBaggages('I have Gun for protection, and food to eat');
checkBaggages('Socks and sweets');
checkBaggages('i have knife to cut my oranges');

//split and join
const [firstname, lastName] = 'Oluwaseun Emmanuel'.split(' ');
// console.log(firstname, lastName);
const newName = ['Mr.', firstname.toUpperCase(), lastName].join(' ');
console.log(newName);

const capitalize = function (name) {
  const names = name.split(' ');
  // console.log(names);
  const namesArr = [];
  for (const item of names) {
    namesArr.push(item[0].toUpperCase() + item.slice(1));
  }
  console.log(namesArr.join(' '));
};
capitalize('emmy ayo');
capitalize('ife seun');

//padding a string
const message = 'Go to gate 1';
console.log(message.padStart(15, '+').padEnd(24, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-3);
  console.log(last.padStart(str.length, '*'));
};
maskCreditCard(12345);
maskCreditCard('89365278893');

//repeat
const messg = 'wheather is bad... everybody leave!';
console.log(messg.repeat(3));

const planeNumber = function (n) {
  console.log(`There are ${n} planes in the line ${'✈'.repeat(n)} `);
};
planeNumber(3);
planeNumber(4);

const camelCase = function (name) {
  let names = name.toLowerCase();
  names = names.split('_');
  let newItem = [];
  console.log(
    names[0] + names[1].slice(0, 1).toUpperCase() + names[1].slice(1)
  );
};
camelCase('Tayo_Boy');
camelCase('Ade_ayo');
// underscore_case
//   first_name
// some_variable
//    calculate_Age
// delayed_departure
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     // console.log(first, second);
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20, ' ')} ${'✅'.repeat(i + 1)}`);
//   }
// });

const LogBox = {
  studentNames: ['Olaide Pelumi', 'Ayoola Rebecca', 'Oluseye Ademidun'],
  entryYear: [2014, 2016, 2020],
  birthYear: [1992, 1998, 2001],
  parentName: [
    'Mr and Mrs Olaide',
    'Mr and Mrs. Ayoola',
    'Mr. and Mrs. Oluseye',
  ],
  ageCalc: function () {
    this.age = [];
    for (const item of this.birthYear) {
      this.age.push(2022 - item);
    }
  },
  studentInfo: function () {
    this.info = [];
    for (let i = 0; i < this.studentNames.length; i++) {
      this.info.push(`${this.studentNames[i]} age is ${this.age[i]}`);
    }
  },
  studentAddress: function ({ index, address }) {
    console.log(`${this.studentNames[index]} lives at ${address}`);
  },
};

LogBox.ageCalc();
LogBox.studentInfo();
LogBox.studentAddress({
  index: 0,
  address: 'No 31, Oluooogbo street',
});
LogBox.studentAddress({
  index: 1,
  address: 'No 1, Mokuro street',
});
LogBox.studentAddress({
  index: 2,
  address: 'No 3, Ifesowapo street',
});
console.log(LogBox);

const name1 = ['ade', 'ife', 'sayo'];
let string = ' ';
for (const [i, value] of name1.entries()) {
  let plane = i > 0 ? 'planes' : 'plane';
  const display = ` ${value} bought ${i + 1} ${plane} ${'✈'.repeat(i + 1)}`;
  string += display;
}
console.log(string.trim());

const bookings = [];
const createBooking = function (
  flightnumber,
  numpassenger = 1,
  price = numpassenger * 199
) {
  const booking = {
    flightnumber,
    numpassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH13', 2);
createBooking('H123', undefined, 100);

const flight = 'LH234';
const emmy = {
  name: 'Oluwaseun Emmanuel',
  passport: 1234567,
};

// const checkIn = function (flightNumber, passenger) {
//   (flightNumber = 'Lh111'), (passenger.name = 'Mr.' + ' ' + passenger.name);
//   if (passenger.passport === 1234567) {
//     alert('check in');
//   } else {
//     alert('wrong passport id');
//   }
// };
// // checkIn(flight, emmy);
// // console.log(flight);
// // console.log(emmy);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000);
// };
// newPassport(emmy);
// checkIn(flight, emmy);

const fileName = 'ade please can you change the tag name in the tag name box';
const newfile = fileName.replace(/tag name/g, ' ');
console.log(newfile);

const str1 = 'Javascript is the best programming language';
const [first, ...others] = str1.split(' ');
let joined = [first, ...others];
console.log(joined.join(' '));

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
const transormer = function (str, fn) {
  console.log(`original string: ${str}`);
  console.log(`transformed string: ${fn(str)}`);
  console.log(`transformed by: ${fn.name}`);
};
transormer('Javascript is the best programming language', upperFirstWord);
transormer('Javascript is the best programming language', oneWord);

const high5 = function () {
  console.log('👋');
};
['ade', 'bless'].forEach(high5);

const luth = {
  airline: 'Luth',
  iataCode: 'LU',
  booking: [],
  book: function (flightNum, name) {
    console.log(
      `${name} book a sit on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
luth.book(199, 'Emmanuel');
console.log(luth);

const mike = {
  airline: 'mike',
  iataCode: 'Mi',
  booking: [],
};

//call
const books = luth.book;
books.call(mike, 23, 'Seun');
console.log(mike);
books.call(luth, 111, 'Iyanu');
console.log(luth);

const ariyike = {
  airline: 'ariyike',
  iataCode: 'AR',
  booking: [],
};
//apply

const flightData = [234, 'Ariyike'];
books.apply(ariyike, flightData);
console.log(ariyike);

//spread with call also work as apply

books.call(ariyike, ...flightData);

//store bind in new variable

const mikeAir = books.bind(mike);
const arik = books.bind(ariyike);
mikeAir(231, 'Mide');
const mikeAir2 = books.bind(ariyike, 22);
mikeAir2('Oluwaseun');
mikeAir2('Iyanu');

const addVat = function (value, rate) {
  return value + value * rate;
};
console.log(addVat(2, 22));

const addTax = addVat.bind(undefined, 3);
console.log(addTax(21));
console.log(addTax(23));

const osun = {
  airline: 'Osun Airline',
  iataCode: 'OS',
  bookings: [],
  booking: function (name, number, passport) {
    console.log(
      `${name} boarded ${this.airline} with flight number ${this.iataCode}${number}`
    );
    this.bookings.push({ FirstName: name, passportNumber: passport });
  },
};
osun.booking('Emmanuel', 231, 123456871);
console.log(osun);

const oyo = {
  airline: 'Oyo Airline',
  iataCode: 'OY',
  bookings: [],
};
const bookCall = osun.booking;
const bookApply = ['Iyanu', 201, 234567898];
bookCall.call(oyo, ...bookApply);
console.log(oyo);

// const addTax2 = function (value) {
//   return function (rate) {
//     return value + value * rate;
//   };
// };
// const addTaxConst = addTax2(3);
// console.log(addTaxConst(3));
// console.log(addTaxConst(7));

const poll = {
  question: 'what is your best programming language',
  option: ['0: Python', '1: Java', '2: Javascript', '3: Rust'],
  answers: new Array(4).fill(0), //this generate [0,0,0,0]
  register: function () {
    const answer = Number(
      prompt(
        `${this.question}\n ${this.option.join('\n')}\n choose your answer`
      )
    );
    console.log(answer);
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    // console.log(this.answers);
    this.displaResult('string');
  },
  displaResult: function (type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`the poll results are: ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.register.bind(poll));

//closure
const passengers = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`passenger ${passengerCount}`);
  };
};
const passengerClosure = passengers();
passengerClosure();
passengerClosure();
passengerClosure();

//directory
console.dir(passengerClosure);
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(2 * a);
  };
};

const h = function () {
  const b = 54;
  f = function () {
    console.log(2 * b);
  };
};
g();
f();
//re assigning
h();
f();
//closure with timeout
// const boardPassenger = function (n, wait) {
//   const passengersPerGroup = n / 3;

//   setTimeout(function () {
//     console.log(`we are now boarding all ${n} passengers`);
//     console.log(`there are three groups with ${passengersPerGroup} passengers`);
//   }, 1000);

//   console.log(`will start boarding in ${wait} seconds...`);
// };
// boardPassenger(300, 2);

// const buy = {
//   questions: 'What is your best color?',
//   option: ['0: red', '1: blue', '2: green', '3: purple', '4: white'],
//   answers: new Array(5).fill(0),
//   register() {
//     const answer = Number(
//       prompt(
//         `${this.questions}\n ${this.option.join('\n')} \n enter your answer`
//       )
//     );
//     console.log(answer);
//     if (typeof answer === 'number' && answer < this.answers.length) {
//       this.answers[answer]++;
//       this.displayString('string');
//     }
//   },
//   displayString(type = 'array') {
//     if (type == 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`your answer is: ${this.answers.join(', ')}`);
//     }
//   },
// };
// // buy.register();
// document
//   .querySelector('.buy')
//   .addEventListener('click', buy.register.bind(buy));

document.querySelector('.btnn').addEventListener('click', function () {
  let x = document.querySelector('.content');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }

  console.log('click');
});
//three methods to calculate average
const data1 = [1, 2, 3, 4, 5, 6];

const average1 = function (data) {
  let sum = 0;
  let avg;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
    avg = sum / data.length;
  }
  console.log(avg);
};
average1(data1);

const average2 = function (data) {
  let sum = 0;
  let avg = 0;
  for (const item of data) {
    sum += item;
    avg = sum / data.length;
  }
  console.log(avg);
};
average2(data1);

const average3 = data1.reduce((acc, curr) => acc + curr / data1.length, 0);
console.log(average3);

const info = {
  name: 'Ayoola David',
  data: [],
  test1: [1, 2, 4, 5, 6],
  test2: [1, 3, 6, 7, 8, 10],
  test3: [2, 7, 9, 0, 6],
};

const calculateTest = function (info) {
  const sum1 = info.test1.reduce((acc, curr) => acc + curr, 0);
  const sum2 = info.test2.reduce((acc, curr) => acc + curr, 0);
  const sum3 = info.test3.reduce((acc, curr) => acc + curr, 0);
  const sum4 = info.data.reduce((acc, curr) => acc + curr, 0);
  console.log(sum4);
  info.data.push(sum1, sum2, sum3);
  const sum5 = info.data.reduce((acc, curr) => acc + curr, 0);
  console.log(sum1, sum2, sum3, sum5);
  console.log(info);
};
calculateTest(info);
// document
//   .querySelectorAll('.toggle__btn')
//   .addEventListener('click', function (e) {
//     e.preventDefault();

//     let x = document.querySelector('.toggle__text');

//     if (x.style.display === 'none') {
//       x.style.display = 'block';
//       document.querySelectorAll('.toggle__btn').textContent = '+';
//     } else {
//       x.style.display = 'none';
//       document.querySelectorAll('.toggle__btn').textContent = '-';
//     }
//   });

// const toggle = document.querySelectorAll('.toggle__btn');

// for (const item of toggle) {
//   item.addEventListener('click', function (e) {
//     e.preventDefault();

//     let x = document.querySelectorAll('.toggle__text');
//     for (const item of x) {
//     }
//     if (x.style.display === 'none') {
//       x.style.display = 'block';
//       document.querySelector('.toggle__btn').textContent = '+';
//     } else {
//       x.style.display = 'none';
//       document.querySelector('.toggle__btn').textContent = '-';
//     }
//   });
// }

// const getTime = function () {
//   const time = Intl.DateTimeFormat('en-US', {

//   })
// }

const format = {
  hour: 'numeric',
  minute: 'numeric',
};

// const setTime = function () {
//   let time = 60;
//   let min = time/60;
//   let second = time % 60

//   console.log(`${min}:${second}`);
//   time --

// }
// let test = document.querySelector('.test');
// const getTime = function () {
//   let time = 0;

//   setInterval(() => {
//     let min = Math.trunc(time / 10);
//     let second = time % 10;
//     console.log(`${min}:${second}`);
//     time++;
//   }, 1000);
// };

const timeHour = document.querySelector('.time__hour');
const timeSecond = document.querySelector('.time__sec');
const timeMinute = document.querySelector('.time__min');
const displayTime = function () {
  let time = 0;

  const tick = function () {
    let hour = String(Math.trunc(time / 3600)).padStart(2, 0);
    let min = String(Math.trunc(time / 60)).padStart(2, 0);
    let second = String(time % 60).padStart(2, 0);

    console.log(`${hour}:${min}:${second}`);
    timeSecond.textContent = second;
    timeMinute.textContent = min + ':';
    timeHour.textContent = hour + ':';
    time++;
  };
  setInterval(tick, 1000);
};

// displayTime();

const countDown = function () {
  // let time = 172800;
  let time = 3600;
  const tick = function () {
    let day = String(Math.trunc(time / (3600 * 24))).padStart(2, 0);
    let hour = String(Math.trunc((time / 3600) % 24)).padStart(2, 0);
    let min = String(Math.trunc((time / 60) % 60)).padStart(2, 0);
    let sec = String(time % 60).padStart(2, 0);

    // console.log(`${day}:${hour}:${min}:${sec}`);
    // console.log(`${day}:${hour}:${min}:${sec}`);
    time--;
  };
  setInterval(tick, 1000);
};
countDown();
//getter and setter (they work like properties)
const account = {
  owner: 'Emmy',
  movement: [200, 100, 300, 250],
  age: 1999,

  get latest() {
    return this.movement.slice(-1).pop();
  },
  set latest(mov) {
    return this.movement.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movement);

class person {
  constructor(year, fullname) {
    this.fullname = fullname;
    this.year = year;
  }
  get calcAge() {
    console.log(2022 - this.year);
    this.age = 2022 - this.year;
    console.log();
  }
  set fullname(name) {
    console.log(name);
    if (name.includes(' ')) this._fullname = name;
    else alert(`${name} is not a full name!`);
  }
  get fullname() {
    return this._fullname;
  }
  static greet() {
    console.log('hey there');
    console.log(this);
  }
}

const mark = new person(1990, 'Adebayo Mark');
mark.calcAge;
person.greet();
// mark.fullName;

//object create

const personProto = {
  get calcAge() {
    console.log(2022 - this.year);
  },
};

const newProto = {
  init(firstName, year) {
    this.firstName = firstName;
    this.year = year;
  },
};
const steve = Object.create(personProto);
steve.year = 1997;
steve.name = 'stephen';
console.log(steve);
steve.calcAge;

const tayo = Object.create(newProto);
// tayo.name = 'tayo';
tayo.init('ade', 1994);
console.log(tayo);

const tolu = {
  name: 'ade',
  birthYear: 1990,
  calcage() {
    this.age = 2022 - this.birthYear;
  },
};
tolu.calcage();
console.log(tolu);
const dayo = {
  name: 'dayo',
  birthYear: 1998,
};

const dat = tolu.calcage;
dat.call(dayo);
console.log(dayo);

//constructor and inheritance

const personBox = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

personBox.prototype.calcAge = function () {
  this.age = 2022 - this.birthYear;
  console.log(
    `This is ${this.firstName}, i majored in ${this.course}, ${this.age} years`
  );
};

const student = function (firstName, birthYear, course) {
  personBox.call(this, firstName, birthYear);
  this.course = course;
};
student.prototype = Object.create(personBox.prototype);
student.prototype.introduce = function () {};
const john = new student('John', 1998, 'Biology');
john.introduce();
john.calcAge();

//inheritance es6

class studentCl extends person {
  constructor(year, fullname, course) {
    super(year, fullname);
    this.course = course;
  }
  get introduce() {
    console.log(`This is ${this.fullname}, i majored in ${this.course}`);
  }
}
const pelu = new studentCl(1990, 'John Love', 'physics');
pelu.introduce;
pelu.calcAge;

//public field
//private field
//public method
//private method

class acc {
  //public field without any this, or let, const behind it
  locale = navigator.language;

  //private field proposed one in js
  #movement = [];
  #pin;
  constructor(name, currency, pin) {
    this.name = name;
    this.currency = currency;

    //for private data use convention of _behind all the data i.e
    this.#pin = pin;
    // this._movement = [];
    // this.locale = navigator.language;
    console.log(`You have successfully opened your account ${this.name}`);
  }

  //public interfaces

  deposit(val) {
    // this._movement.push(val);
    this.#movement.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  _approveLoan(val) {
    return true;
    // if (val > 1000) {
    //   return true;
    // }
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('loan approved');
      return this;
    }
  }
  getMovement() {
    return this.#movement;
  }
}

const acc1 = new acc('Emmy', 'USD', 111);
// acc1.movement.push(200);
acc1.deposit(200);
acc1.withdraw(20);
console.log(acc1);
acc1.requestLoan(2000);
// acc1.approveLoan(2000);

//chaining (to use chaining apply return this to the needed methods)

acc1.deposit(300).deposit(1000).withdraw(2000).requestLoan(10000);
console.log(acc1.getMovement());

//practice
class Account {
  constructor(name, gender, password) {
    this.name = name;
    this.gender = gender;
    this.password = password;
    this.locale = navigator.language;
    this.movement = [];
    this.username = '';
    this.balance = -1;
  }
  getUsername() {
    this.username = this.name
      .toLowerCase()
      .split(' ')
      .map((curr) => curr[0])
      .join('');
  }
  deposit(val) {
    this.movement.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  calcBalance() {
    this.balance = this.movement.reduce((acc, curr) => acc + curr, 0);
  }
}

const account1 = new Account('Iyanuoluwa Ariyike', 'Female', 222);
const account2 = new Account('Oluwaseun Emmanuel', 'Male', 123);

account1.getUsername();
account2.getUsername();
account1
  .deposit(1000)
  .deposit(400)
  .deposit(100)
  .withdraw(300)
  .withdraw(150)
  .deposit(200);
account2
  .deposit(100)
  .deposit(450)
  .deposit(150)
  .withdraw(400)
  .withdraw(170)
  .deposit(290);
account1.calcBalance();
account2.calcBalance();
console.log(account1);
console.log(account2);
