'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const movementsDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}:  you ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDate: [
    '2019-11-01T13:15:33.035Z',
    '2017-04-25T14:18:46.235Z',
    '2019-12-25T06:04:23.907Z',
    '2010-02-25T14:18:46.235Z',
    '2021-02-05T16:33:06.386Z',
    '2023-08-23T14:43:26.374Z',
    '2023-08-28T18:49:59.371Z',
    '2023-08-25T12:01:20.894Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDate: [
    '2019-11-01T13:15:33.035Z',
    '2017-02-25T14:18:46.235Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-us',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDate: [
    '2019-11-01T13:15:33.035Z',
    '2016-02-25T14:18:46.235Z',
    '2019-12-25T06:04:23.907Z',
    '2010-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-us',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDate: [
    '2011-11-01T13:15:33.035Z',
    '2017-02-25T14:18:46.235Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2021-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2010-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'EUR',
  locale: 'en-us',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const formatDate = function (date, locale) {
  const calcsDayPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 3600 * 24)));
  const dayPassed = calcsDayPassed(new Date(), date);
  console.log(dayPassed);
  if (dayPassed === 0) return 'Today';
  if (dayPassed === 1) return 'Yesterday';
  if (dayPassed <= 7) return `${dayPassed} days ago`;

  // const day = `${date.getDate()}`;
  // const month = `${date.getMonth()}`.padStart(2, '0');
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;

  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (val, locale, currency) {
  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(val);
};

const displayMovement = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDate[i]);
    const displayDate = formatDate(date, acc.locale);

    const formatNumber = formatCur(mov, acc.locale, acc.currency);
    const html = `
    <div class="movements__row"> 
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div> 
          <div class="movements__value">${formatNumber}</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

console.log(movementsDescription);
const createUsername = function (accts) {
  accts.forEach((acct) => {
    acct.username = acct.owner
      .toLowerCase()
      .split(' ')
      .map((curr) => curr[0])
      .join('');
  });
};
createUsername(accounts);
console.log(accounts);
const calcDisplayBalance = function (acct) {
  acct.balance = acct.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${formatCur(
    acct.balance,
    acct.locale,
    acct.currency
  )}`;
};

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${formatCur(income, acc.locale, acc.currency)}`;
  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${formatCur(
    Math.abs(out),
    acc.locale,
    acc.currency
  )}`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((dep) => (dep * acc.interestRate) / 100)
    .filter((curr) => curr > 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${formatCur(
    interest,
    acc.locale,
    acc.currency
  )}`;
};

const updateUi = function (currentAccount) {
  displayMovement(currentAccount);
  calcDisplayBalance(currentAccount);
  calcDisplaySummary(currentAccount);
};

const startLogout = function () {
  const tick = function () {
    time--;
    const min = String(Math.trunc(time / 60) % 60).padStart(2, '0');
    const sec = String(Math.trunc(time % 60)).padStart(2, '0');
    labelTimer.textContent = `${min}:${sec}`;
    if (time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = '0';
      labelWelcome.textContent = `Welcome back ${
        currentAccount.owner.split(' ')[0]
      }`;
    }
  };
  let time = 10;
  tick();
  timer = setInterval(tick, 1000);
  return timer;
};

//fake login
let currentAccount, timer;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === +inputLoginPin.value) {
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;

    const now = new Date();
    const option = {
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      month: 'long',
      weekday: 'long',
      year: 'numeric',
    };
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      option
    ).format(now);

    containerApp.style.opacity = '1';
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.focus();
    if (timer) clearInterval(timer);
    timer = startLogout();

    updateUi(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAcc);
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    console.log('transfer');

    inputTransferAmount.value = inputTransferTo.value = '';
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    currentAccount.movementsDate.push(new Date().toISOString());
    receiverAcc.movementsDate.push(new Date().toISOString());

    updateUi(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +Math.floor(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(() => {
      currentAccount.movements.push(amount);
      currentAccount.movementsDate.push(new Date().toISOString());
      updateUi(currentAccount);
    }, 4000);
  }
  inputLoanAmount.value = '';
});
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    +inputClosePin.value === currentAccount.pin &&
    inputCloseUsername.value === currentAccount.username
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    containerApp.style.opacity = '0';

    accounts.splice(index, 1);
    labelWelcome.textContent = 'You have successfully close your account';
  }
  inputClosePin.value = inputCloseUsername.value = '';
});
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovement(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// const overAllBalance = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overAllBalance);

// console.log(movements);
// const sortMov = movements.sort((x, y) => x - y);
// console.log(sortMov);

// const balance = movements.reduce((acc, curr, i, arr) => {
//   console.log(`Itereation ${i}: ${acc}`);
//   return acc + curr;
// }, 0);
// console.log(balance);
// const movMax = movements.reduce((acc, mov) => {
//   if (acc < mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);
// console.log(movMax);
