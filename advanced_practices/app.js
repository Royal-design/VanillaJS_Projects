// 'use strict';

// let myName, myAge;
// myAge = 24;
// myName = 'Oluwaseun';
// console.log(myName);
// myName = 'Ayo';

// console.log(myName);
// myName = `i am ${myAge}

// I love writing code`;
// console.log(myName);
// let waecExamScore, remarks;

// let johnData, raphaelData;
// johnData = 50;
// raphaelData = 44;
// if (johnData > raphaelData) console.log(`John is more brilliant than Raphael`);
// else console.log(`raphael is more brilliant`);
// const birthYear = '1997';
// console.log(Number(`${birthYear}`) + String(23));
// console.log('1' + 1);
// const money = 1;
// if (money) console.log(`Spend as you wish`);
// else console.log(`get a job`);

// //loose equality operator is == (it converted string to number), while === is strict, it maintain the equality function

// // const age = "34";
// // if (age === 34) console.log("strict");
// // else age == 34;
// // console.log(`loose`);
// // const data = +prompt(`what is your age`);
// // console.log(typeof data, data);

// // const chelseaScore = (23 + 10) / 2;
// // const arsenalScore = (35 + 2) / 2;
// // console.log(chelseaScore, arsenalScore);
// // if (chelseaScore > arsenalScore) {
// //   console.log(`chelsea score is ${chelseaScore} and they won`);
// // } else if (chelseaScore < arsenalScore) {
// //   console.log(`arsenal score is ${arsenalScore} and they won`);
// // }

// const day = ['Tuesday', 'Monday'];
// switch (day[0]) {
//   case 'Tuesday':
//     console.log(`the day is monday`);
//     break;

//   default:
//     console.log(`input the day`);
//     break;
// }

// // function fruitProcessor(apple, orange) {
// //   console.log(apple, orange);
// //   const fruit = `i have ${apple} apple and ${orange} orange`;
// //   return fruit;
// // }
// // const appleJuice = fruitProcessor(10, 5);
// // console.log(appleJuice);
// // const ageCalculator = function (birthYear, currentYear) {
// //   const year = currentYear - birthYear;
// //   const myAge = `I am ${year} years old`;
// //   return `${myAge} and I am depending on God`;
// // };

// // const getMyAge = ageCalculator(1999, 2023);
// // console.log(getMyAge);

// // const calcAge = (birthYear) => 2023 - birthYear;
// // const age1 = calcAge(1997);
// // console.log(age1);

// const fruitPiece = function (fruit) {
//   return fruit * 4;
// };
// const newJuice = function (orange, apple) {
//   const orangePiece = fruitPiece(orange);
//   const applePice = fruitPiece(apple);
//   return `i have ${orangePiece} oranges and ${applePice} apples`;
// };
// const getJuice = newJuice(5, 4);
// console.log(getJuice);

// const calcAge = (birthYear, currentYear) => currentYear - birthYear;
// const retirementProfile = (name, birthYear, currentYear, retirementPeriod) => {
//   const age = calcAge(birthYear, currentYear);
//   console.log(age);
//   const retirementYearLeft = retirementPeriod - age;
//   if (age < retirementYearLeft) {
//     console.log(`${name} will retire in ${retirementYearLeft} years time`);
//     return retirementYearLeft;
//   } else {
//     return `${name} have retired already`;
//   }
// };
// const getRetirementYear = retirementProfile('Ade', 1999, 2023, 60);
// console.log(getRetirementYear);

// const agecalc = (currentYear, birthYear) => currentYear - birthYear;
// const getAge = (currentYear, birthYear) => {
//   const age = agecalc(currentYear, birthYear);
//   return `my age is ${age}😇`;
// };
// const ageRes = getAge(2023, 1990);
// console.log(ageRes);

// const tipCalc = (bill) => {
//   return bill >= 50 && bill < 200 ? bill * 0.3 : bill * 0.2;
// };
// const bills = [100, 500, 20];
// console.log(tipCalc(bills[2]));
// // const nameData = {
// //   name: "ayo",
// //   age: 13,
// //   birthYear: 1999,
// //   firstName: "Iyani",
// //   newAge: "",
// //   calcAge: function (currentYear) {
// //     let age = currentYear - this.birthYear;
// //     this.newAge = age;
// //   },
// // };

// // const newAge = nameData.calcAge(2025);
// // nameData.name = "emmy";
// // console.log(nameData);

// const john = {
//   name: 'john',
//   mass: 34,
//   height: 12,

//   calcBmi: function () {
//     const bmi = this.mass / this.height;
//     this.bmi = Math.round(bmi);
//     return this.bmi;
//   },
// };
// john.calcBmi();
// console.log(john.bmi);
// // const lift = "lifting weight";
// // for (let i = 1; i <= 11; i++) {
// //   console.log(`lifting weight ${i}`);
// // }

// const type = [];
// const jonas = ['jonas', 23, true, 'adels', ['peter', 'emmy', 'ife']];
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === 'string') continue;
//   console.log(jonas[i]);
//   type.push(typeof jonas[i]);
//   console.log(type);
// }
// const births = [1999, 2000, 2001];
// const ages = [];
// const calcAges = function () {
//   for (let i = 0; i < births.length; i++) {
//     ages.push(2023 - births[i]);
//   }
//   console.log(ages);
// };

// calcAges();

// const numberArr = [1, 2, 3, 4, 5];

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`........Exercise ${exercise}`);
//   for (let i = 1; i < 5; i++) {
//     console.log(`Exercise ${exercise}: lifiting weight ${i}🏋️‍♂️`);
//   }
// }

// const billss = [20, 100, 45, 50];
// const tips = [];
// const total = [];

// const tipCalcs = function (bill) {
//   return bill >= 50 && bill < 200 ? bill * 0.2 : bill * 0.1;
// };

// for (let i = 0; i < billss.length; i++) {
//   const res = tipCalcs(billss[i]);
//   tips.push(res);
//   total.push(tips[i] + billss[i]);
//   // console.log(res);
// }
// console.log(tips);
// console.log(total);

// const calcAvg = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return (sum = sum / arr.length);
// };
// console.log(calcAvg([1, 2, 3]));

// const calcTemp = function (temps) {
//   let min = [0];
//   let max = [0];
//   for (let i = 0; i < temps.length; i++) {
//     const currTemp = temps[i];
//     if (currTemp < min) min = currTemp;
//   }
//   console.log(min);
// };
// calcTemp([1, 2, 3]);

// const ade = {
//   name: 'Ade',
//   restaurant: ['Ojaja', 'Ijex', 'Lintel', 'Curly'],
//   bills: [200, 500, 400, 100],
//   barName: ['Ayo', 'Ife', 'Imisi', 'Joshua'],
//   calcTip: function () {
//     this.tips = [];
//     this.total = [];
//     this.summary = [];
//     for (let i = 0; i < this.bills.length; i++) {
//       if (this.bills[i] >= 100 && this.bills[i] < 200) {
//         this.tips[i] = this.bills[i] * 0.1;
//       } else if (this.bills[i] >= 200 && this.bills[i] < 400) {
//         this.tips[i] = this.bills[i] * 0.2;
//       } else {
//         this.tips[i] = this.bills[i] * 0.15;
//       }
//       this.total[i] = this.bills[i] + this.tips[i];
//       this.summary[
//         i
//       ] = `${this.name} gave ${this.barName[i]} the tip of ${this.tips[i]} at restaurant ${this.restaurant[i]} and paid a total sum of ${this.total[i]}`;
//     }

//     return this.summary;
//   },
// };
// const adeRes = ade.calcTip();
// console.log(adeRes);

// const restaurant = {
//   name: ['country kitchen', 'captain cook'],
//   location: ['mayfair', 'lagere'],
//   openingHour: {
//     mon: {
//       open: 12,
//       close: 5,
//     },
//     tue: {
//       open: 1,
//       close: 6,
//     },
//   },
//   order: function ({ time = '1:00', nameIndex, index }) {
//     console.log(
//       `i order exactly ${time} at ${this.location[index]}, from ${this.name[nameIndex]}`
//     );
//   },
// };

// restaurant.order({
//   time: 2,
//   nameIndex: 1,
//   index: 1,
// });
// restaurant.order({
//   // time: 2,
//   nameIndex: 0,
//   index: 0,
// });

// const a = [2, 3, 4, 345];
// const b = [1, 3, 4];
// const str = 'emmy';
// console.log([...str]);
// console.log([...a, ...b]);

// const ing = function (mainingr, ...othering) {
//   console.log(mainingr);
//   console.log(othering);
// };
// ing('pepper', 'fish', 'onion', 'curry');

// const getSpread = function (...val) {
//   console.log(val);
// };

// getSpread(2, 3, 4);

// const arr = ['ade', 'bose', 'ayo'];

// const days = ['mon', 'tue', 'wed', 'thu', 'fri'];
// for (const el of days) {
//   const time = restaurant.openingHour[el]?.open || 'closed';
//   console.log(`on ${el} we opened at ${time} `);
// }

// console.log(restaurant.openingHour['mon']);
// const restKey = Object.entries(restaurant.openingHour);
// for (const [day, { open, close }] of restKey) {
//   console.log(`on ${day} we open at ${open} and close at ${close}`);
// }
// const numb = [1, 2, 3];
// let sum = 0;

// for (const item of numb) sum += item;
// sum /= numb.length;

// console.log(sum);

// const staff = ['waiter', 'manager', 'manager', 'banker'];
// const uniqueStaff = [...new Set(staff)];
// console.log(uniqueStaff);

// const myProfile = {
//   name: ['ade', 'bose', 'ife'],
//   age: [23, 21, 22],
//   schoolHour: {
//     mon: {
//       open: 8,
//       close: 4,
//     },
//     tue: {
//       open: 9,
//       close: 5,
//     },
//   },
//   getAddress: function (index, add) {
//     return `${this.name[index]} lives around ${add}`;
//   },
// };
// const add = myProfile.getAddress(1, 'opa');
// console.log(new Set([...add]));

// const getFunction = function (...val) {
//   console.log(val);
// };
// console.log(Object.keys(myProfile.schoolHour.mon));
// const rest = new Map().set('name', ['ayo', 'iyanu', 'mide']);
// rest.set('age', 23);
// rest.delete('age');
// console.log(rest.get('name'));
// console.log(rest);

// const questions = new Map([
//   ['question', 'what is your best color'],
//   [1, 'red'],
//   [2, 'blue'],
//   [3, 'green'],
// ]);
// for (const [key, value] of questions) {
//   if (typeof key === 'number') {
//     console.log(value);
//   }
// }

// console.log([...questions.values()]);
// console.log(new Map(Object.entries(myProfile.schoolHour)).keys());
// // console.log(questions.size);
// const data = [8, 2, 5];

// const airline = 'Ali Airline';
// console.log(airline.slice());
// // console.log(airline);
// const loginEmail = '   olowo@gmail.com';
// console.log(loginEmail.trim()[0].toUpperCase() + loginEmail.trim().slice(1));

// // const password = 'george Love';

// const createPw = function (name) {
//   const nameSplit = name.split(' ');
//   let pw = [];
//   for (const n of nameSplit) {
//     const nameSplitUpper = n[0].toUpperCase();
//     pw.push(nameSplitUpper);
//   }
//   pw.join('');
//   console.log(pw);
// };
// createPw('george Love');

// console.log(123);

// document.body.appendChild(document.createElement('textarea'));
// document.body.appendChild(document.createElement('button'));
// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   for (const row of rows) {
//     const [first, last] = row.toLowerCase().split('_');
//     const output = `${first.replace(
//       first[0],
//       first[0].toUpperCase()
//     )} ${last.replace(last[0], last[0].toUpperCase())}`;
//     console.log(output);
//     // console.log(first, last);
//   }
// });
// const strPad = 'ademide';
// // console.log(strPad.padEnd(10, '+'));
// const arr1 = [1, 23, 4];
// // console.log(arr1.splice(0, 1));
// // console.log(arr1);

// const [d, ...c] = arr1;
// console.log(d, c);

// const greet = (greetings) => (name) => {
//   console.log(`${greetings} ${name}`);
// };
// greet('hey')('ayo');

// const getString = function (str) {
//   const [first, last] = str.toLowerCase().split(' ');
//   return [first[0].replace(first[0], first[0].toUpperCase()), last[0]].join('');
// };

// console.log(getString('george smith'));

// // const quest = new Map([
// //   ['gender', ['male', 'female']],
// //   ['best food', ['eba', 'rice', 'bean']],
// //   ['best color', ['blue', 'green', 'yellow']],
// // ]);
// // for (const [i, key, value] of quest) {
// //   console.log(value);
// // }

// const aliExpress = {
//   name: 'ali',
//   booking: [],
//   book: function (flightNum, flightName) {
//     console.log(
//       `${this.name} booked flight Number ${flightNum} at ${flightName} Airport`
//     );
//     this.booking.push({
//       flight: `${flightName}`,
//       name: `${this.name}`,
//       airport: `${flightName}`,
//     });
//   },
// };

// aliExpress.book(222, 'Alibaba');
// console.log(aliExpress);
// const ayoExpress = {
//   name: 'ayo',
//   booking: [],
// };
// const newBook = aliExpress.book;
// newBook.call(ayoExpress, 111, 'Ayobaba');
// console.log(ayoExpress);

// const swiss = newBook.bind(ayoExpress);
// swiss(102, 'swissAir');

// const poll = {
//   question: 'Which programming langauage are you learning',
//   option: ['a: Javascript', 'b: Rust', 'c: C++', 'd: Python'],
//   answers: new Array(4).fill(0),
//   promptQuestion() {
//     const answer = +prompt(
//       `${this.question}\n${this.option.join('\n')}\n(enter a number)`
//     );
//     if (typeof answer === 'number' && answer < this.answers.length) {
//       this.answers[answer]++;
//     }
//     this.displayResult('string');
//   },
//   displayResult(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`my answer is ${this.answers.join(', ')}`);
//     }
//   },
// };
// // poll.promptQuestion();

// const button = document.body.appendChild(document.createElement('button'));
// button.className = 'event';
// button.textContent = 'Event Button';
// document
//   .querySelector('.event')
//   .addEventListener('click', poll.promptQuestion.bind(poll));
// const dataProfile = {
//   name: 'Ayodele',
//   school: 'saint Philips',
//   dob(year) {
//     this.age = 2022 - year;
//   },
// };
// dataProfile.dob(1999);
// console.log(dataProfile);

// const ifePro = {
//   name: 'Ife',
// };
// const getIfe = dataProfile.dob.bind(ifePro);
// getIfe(1998);
// console.log(ifePro);

// const newPw = 'Iyanu Oluwaseun';

// const x = '23px';
// const y = (2, 3, 4, 5, 6, '67');
// console.log(Number.parseInt(x));
// console.log(Math.max(y));

// const randomInt = (min, max) =>
//   Math.trunc(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(10, 15));
// const p = 3;
// console.log(p.toFixed(2));
// console.log(2 ** 3);

// const getDate = new Date(2030, 10, 7, 12, 5, 20);
// console.log(getDate);
// console.log(getDate.getFullYear());
// console.log(getDate.getDate());
// console.log(getDate.getDay());

// const numx = 1234;
// // const ingrd = ['fish', 'egg'];
// setTimeout(
//   (ing1, ing2, ing3) =>
//     console.log(
//       `here is your pizza ingredients ${ing1} and ${ing2} and ${ing3}`
//     ),
//   1000,
//   'fish',
//   'egg',
//   'meat'
// );
// // let time = 28800;
// // const countdown = setInterval(() => {
// //   const day = String(Math.trunc(time / (3600 * 24))).padStart(2, '0');
// //   const hour = String(Math.trunc((time / 3600) % 24)).padStart(2, '0');
// //   const min = String(Math.trunc((time / 60) % 60)).padStart(2, '0');
// //   const sec = String(Math.trunc(time % 60)).padStart(2, '0');
// //   console.log(`${day}:${hour}:${min}:${sec}`);

// //   time--;
// // }, 1000);

// // Object oriented Programming

const car = function (driver, model, plateNumber, speed) {
  this.speed = speed;
  this.driver = driver;
  this.model = model;
  this.plateNumber = plateNumber;
};
car.prototype.getProfile = function () {
  this.speed += 10;
  this.speedInfo = `the ${this.model} car accelerates at ${this.speed}km/hr`;
  console.log(this.speedInfo);
  this.profile = `${this.driver} drives ${this.model} with plate number ${this.plateNumber}`;
};
const car1 = new car('Ife', 'Camry', 'La2345', 20);
const car2 = new car('Iyanu', 'Banz', 'S52345', 30);
const cars = [car1, car2];
car1.getProfile();
car2.getProfile();

console.log(cars);

class person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;

    this.birthYear = birthYear;
    this.calcAge();
    this.getProfile();
  }
  calcAge() {
    this.age = 2023 - this.birthYear;
  }
  getProfile() {
    this.detail = `${this._fullName}  will be ${this.age} years this year`;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
  static hey() {
    console.log(`Hey there👋`);
  }
}
// person.hey( );
const person1 = new person('Oluwaseun Emmanuel', 1999);

console.log(person1);

// const account = {
//   owner: 'Emmy',
//   movements: [200, 120, 245, 300],
//   get latest() {
//     return this.movements.slice(-1).pop;
//   },
// };

// console.log(account.latest);
// const objectProt = {
//   calcAge() {
//     this.age = 2023 - this.birthYear;
//   },
// };
// const steven = Object.create(objectProt);

// steven.name = 'steven';
// steven.birthYear = 1998;
// steven.calcAge();
// console.log(steven);

// const teacher = function (name, birthYear) {
//   this.name = name;
//   this.birthYear = birthYear;
// };

// teacher.prototype.calcAge = function () {
//   this.age = 2023 - this.birthYear;
// };

// const student = function (name, birthYear, course) {
//   teacher.call(this, name, birthYear);
//   this.course = course;
// };
// student.prototype = Object.create(teacher.prototype);
// student.prototype.getInfo = function () {
//   this.info = `${this.name} is in ${this.course} department `;
// };

// const ade = new student('Ade', 1997, 'Physics');
// ade.calcAge();
// ade.getInfo();
// console.log(ade);

// class phone {
//   constructor(model, capacity, year) {
//     this.model = model;
//     this.capacity = capacity;
//     this.year = year;
//     this.production;
//   }
//   get production() {
//     this._production = `This ${this.model} model was produced in year ${this.year}`;
//   }
// }

// class phonesub extends phone {
//   constructor(model, capacity, year, color) {
//     super(model, capacity, year);
//     this.color = color;
//     this.phoneColor;
//   }
//   get phoneColor() {
//     this._color = `This ${this.model} model has ${this.color} color`;
//   }
// }

// const samsung = new phonesub('Samsung', '4000mah', 2017, 'crimson');
// console.log(samsung);

// class account {
//   //public field
//   locale = navigator.language;
//   //private field
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     this.#movements = [];
//   }
//   getMovement() {
//     return this.#movements;
//   }
//   deposit(mov) {
//     this.#movements.push(mov);
//     return this;
//   }
//   withdraw(mov) {
//     this.deposit(-mov);
//   }
//   approveLoan() {
//     return true;
//   }
//   requestLoan(val) {
//     if (this.approveLoan()) {
//       this.deposit(val);
//       console.log('loan approved');
//     }
//   }
// }

// const account1 = new account('Seunayo', 'USD', 1111);
// account1.deposit(20);
// account1.deposit(100);
// account1.withdraw(20);
// account1.requestLoan(200);
// // console.log(account1);

class bank {
  constructor(owner, movements, pin) {
    this.owner = owner;
    this.movements = movements;
    this.pin = pin;
  }
  getUsername(acct) {
    this.username = acct.owner
      .toLowerCase()
      .split(' ')
      .map((curr) => curr[0])
      .join('');
  }
}
const acc1 = new bank('Ariyike Iyanuoluwa', [200, 150, -220, 400, 500], 1111);
const acc2 = new bank('Ayooade Daniel', [210, 180, -200, -100, 500], 2222);
const acc3 = new bank('Ojo Temi', [100, 160, -210, 320, -200], 3333);
const accts = [acc1, acc2, acc3];
accts.forEach((acct, i) => acct.getUsername(accts[i]));

// const data = {
//   search: {},
// };

// const getSearch = function () {
//   const searchData = {
//     name: 'ade',
//     age: 22,
//   };
//   let search = searchData;
//   data.search = {
//     name: search.name,
//     age: search.age,
//   };
// };

// getSearch();

// console.log(data);
// class newData {
//   renderData(data) {
//     console.log(data);
//   }
// }
// const getres = new newData();
// getres.renderData(data.search);
