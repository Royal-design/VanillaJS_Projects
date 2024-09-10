// var budget = [
//   { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
//   { value: -45, description: 'Groceries 🥑', user: 'jonas' },
//   { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
//   { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
//   { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
//   { value: -20, description: 'Candy 🍭', user: 'matilda' },
//   { value: -125, description: 'Toys 🚂', user: 'matilda' },
//   { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
// ];

// const { functions } = require('lodash-es');

// const { set } = require('core-js/core/dict');

// import { log10 } from 'core-js/core/number';

// var limits = {
//   jonas: 1500,
//   matilda: 100,
// };

// var add = function (value, description, user) {
//   if (!user) user = 'jonas';
//   user = user.toLowerCase();

//   var lim;
//   if (limits[user]) {
//     lim = limits[user];
//   } else {
//     lim = 0;
//   }

//   if (value <= lim) {
//     budget.push({ value: -value, description: description, user: user });
//   }
// };
// add(10, 'Pizza 🍕');
// add(100, 'Going to movies 🍿', 'Matilda');
// add(200, 'Stuff', 'Jay');
// console.log(budget);

// var check = function () {
//   for (var el of budget) {
//     var lim;
//     if (limits[el.user]) {
//       lim = limits[el.user];
//     } else {
//       lim = 0;
//     }

//     if (el.value < -lim) {
//       el.flag = 'limit';
//     }
//   }
// };
// check();

// console.log(budget);

// var bigExpenses = function (limit) {
//   var output = '';
//   for (var el of budget) {
//     if (el.value <= -limit) {
//       output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
//     }
//   }
//   output = output.slice(0, -2); // Remove last '/ '
//   console.log(output);
// };

const budgetList = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const budgetValue = {
  jonas: 1500,
  matilda: 100,
};

const addBudget = function (value, description, user = 'jonas') {
  if (user) user.toLowerCase();
  const allowedValue = budgetValue?.[user] ?? 0;
  console.log(allowedValue);
  if (value <= allowedValue)
    budgetList.push({ value: -value, description, user });
};
addBudget(2000, 'egg', 'matilda');
console.log(budgetList);
const checkBudget = function () {
  const newBudgetListCheck = budgetList.map((item) => {
    const checkValue = budgetValue?.[item.user] ?? 0;

    item.value < -checkValue ? (item.flag = 'limit') : (item.flag = 'valid');
    const { value, description, user, flag } = item;

    return {
      value,
      description,
      user,
      flag,
    };
    // const checkValue = budgetValue?.[item.user] ?? 0;
    // if (item.value < -checkValue) item.flag = 'limit';
    // console.log(item);
  });
  console.log(newBudgetListCheck);
};
checkBudget();

// const data = [
//   { name: 'Ayo', age: 22, dept: 'physics' },
//   { name: 'Ade', age: 21, dept: 'Chem' },
// ];
// const getData = {
//   search: '',
//   results: [{}],
// };
// getData.results = data.map((curr) => {
//   return {
//     myName: curr.name,
//     myAge: curr.age,
//     myDept: curr.dept,
//   };
// });
// console.log(data);
// console.log(getData.results);

// const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(newArr.slice(4));

// const dataObj = {
//   name: 'ayyo',
//   age: 22,
// };

// const data = [{ name: 'ade' }, { age: 22 }];
// const dataSet = new Set(['judge', 'judge', 'lawyer']);
// const dataMap = new Map([
//   ['name', 'bayo'],
//   ['job', 'teacher'],
// ]);
// console.log(Object.fromEntries(dataMap));
// console.log(data);
// const newData = {
//   search: {},
//   results: [],
// };
// const arrdata = function () {
//   // const data = [
//   //   { age: 20, name: 'bisi', school: 'oau' },
//   //   { age: 16, name: 'bola', school: 'ui' },
//   // ];

//   // const res = data.map((curr) => {
//   //   return {
//   //     newName: curr.name,
//   //     newAge: curr.age,
//   //   };
//   // });
//   // return res;
//   const data = { Myage: 20, Myschool: 'oau', Myname: 'ope' };
//   let search = data;
//   return (newData.search = {
//     age: search.Myage,
//     school: search.Myschool,
//   });
// };
// arrdata();
// // console.log(arrdata());
// console.log(newData.search);
