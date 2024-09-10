'use strict';
const welcomeText = document.querySelector('.bank__text');
const accountUsername = document.querySelector('.bank__username');
const accountPassword = document.querySelector('.bank__password');
const loginBtn = document.querySelector('.bank__btn');
const movement = document.querySelector('.bank__movement');
const main = document.querySelector('.main');
const container = document.querySelector('.bank__movement');
const balanceLabel = document.querySelector('.bank__balance-value');
const depositLabel = document.querySelector('.bank__summary-deposit');
const withdrawLabel = document.querySelector('.bank__summary-withdraw');
const interestLabel = document.querySelector('.bank__summary-interest ');
const transferBtn = document.querySelector('.bank__transfer-btn');
const transferInput = document.querySelector('.bank__transfer-to');
const transferAmount = document.querySelector('.bank__transfer-amount');
const loanAmount = document.querySelector('.bank__loan-amount');
const loanBtn = document.querySelector('.bank__loan-btn');
const timeLabel = document.querySelector('.bank__balance-time');
const timer = document.querySelector('.bank__timer');
const sort = document.querySelector('.bank__sort');
const deleteBtn = document.querySelector('.bank__delete-btn');
const deleteInput = document.querySelector('.bank__delete-input');
const deletePin = document.querySelector('.bank__delete-pin');

class account {
  constructor(firstName, gender, movement, password, dates, interestRate) {
    this.firstName = firstName;
    this.gender = gender;
    this.movement = movement;
    this.password = password;
    this.locale = navigator.language;
    this.dates = dates;
    this.username = '';
    this.interestRate = interestRate;
    this.balance;
  }
  createUsername() {
    this.username = this.firstName
      .toLowerCase()
      .split(' ')
      .map((curr) => curr[0])
      .join('');
  }
  setMovement(acc, sort = false) {
    container.innerHTML = '';
    const movs = sort
      ? acc.movement.slice().sort((x, y) => y - x)
      : acc.movement;
    movs.forEach((curr, i) => {
      let id = sort ? acc.movement.length - 1 - i : i;
      const type = curr > 0 ? 'deposit' : 'withdraw';
      const html = `<div class="bank__movement-box"><div class="bank__movement-details"><div class="bank__movement-${type} bank__movement-left"> ${
        type.slice(0, 1).toUpperCase() + type.slice(1)
      }</div><p class="bank__movement-date">${this.displayDate(
        new Date(acc.dates[id])
      )}</p></div><p class="bank__movement-value">${this.formatNumber(
        curr
      )}</p></div>`;

      container.insertAdjacentHTML('afterbegin', html);
    });
  }
  calcBalance() {
    const totalBalance = this.movement.reduce((all, curr) => all + curr, 0);
    balanceLabel.textContent = this.formatNumber(totalBalance);
    this.balance = totalBalance;
  }
  calcDeposit() {
    const totalDeposit = this.movement
      .filter((curr) => curr > 0)
      .reduce((all, curr) => all + curr, 0);
    depositLabel.textContent = this.formatNumber(totalDeposit);
  }
  calcWithdraw() {
    const totalWithdraw = this.movement
      .filter((curr) => curr < 0)
      .reduce((all, curr) => all + curr, 0);
    withdrawLabel.textContent = this.formatNumber(totalWithdraw);
  }
  calcInterest() {
    const interest = this.movement
      .filter((curr) => curr > 0)
      .map((curr) => (curr * this.interestRate) / 100)
      .reduce((acc, curr) => acc + curr, 0);
    interestLabel.textContent = this.formatNumber(interest);
  }
  formatNumber(value) {
    return new Intl.NumberFormat(this.locale, {
      style: 'currency',
      currency: 'usd',
    }).format(value);
  }
  formatDate(value) {
    return new Intl.DateTimeFormat(this.locale, {
      weekday: 'long',
      month: 'long',
      year: 'numeric',
      day: 'numeric',
    }).format(value);
  }
  displayDate(date) {
    const calcDate = (date1, date2) =>
      Math.trunc(Math.abs((date2 - date1) / (1000 * 24 * 3600)));
    const dayPassed = calcDate(new Date(), date);
    if (dayPassed === 0) return 'Today';
    if (dayPassed === 1) return 'Yesterday';
    if (dayPassed <= 7) return `${dayPassed} days ago`;
    else {
      return Intl.DateTimeFormat(this.locale, {
        date: 'numeric',
      }).format(date);
    }
  }
  updateBalance() {
    this.calcInterest();
    this.calcBalance();
    this.calcDeposit();
    this.calcWithdraw();
    this.setMovement(currentAccount);
    this.formatTime();
  }
  formatTime() {
    timeLabel.textContent = this.formatDate(new Date('september 26 2022'));
  }
  displayTime() {
    let time = 180;
    const tick = function () {
      const minute = String(Math.trunc((time / 60) % 60)).padStart(2, 0);
      const second = String(Math.trunc(time % 60)).padStart(2, 0);
      const getTime = `${minute}:${second}`;
      timer.textContent = getTime;
      time--;
      if (time === -1) {
        clearInterval(clearTime);
        main.style.opacity = 0;
        welcomeText.textContent = 'Login to get started!';
      }
    };
    const clearTime = setInterval(tick, 1000);
    return clearTime;
  }
}

const account1 = new account(
  'Oluwadare Isiah',
  'Male',
  [200, -350, 450, -100, 360, -270, 500, 1200],
  1111,
  [
    '2021-07-02T02:24:12.000Z',
    '2022-03-22T02:10:12.000Z',
    '2022-02-09T02:24:12.000Z',
    '2022-04-10T02:24:12.000Z',
    '2022-08-23T02:24:12.000Z',
    '2022-09-23T02:24:12.000Z',
    '2022-09-29T02:12:12.000Z',
    '2022-09-30T02:14:12.000Z',
  ],
  0.8
);
const account2 = new account(
  'Nifemi Anike Dunsin',
  'Female',
  [250, -300, 400, -150, 600, -750, 1500, 1200],
  2222,
  [
    '2022-06-10T02:24:12.000',
    '2022-02-05T02:14:12.00Z',
    '2022-03-04T02:12:12.000Z',
    '2022-05-09T02:20:12.000Z',
    '2022-04-02T02:21:12.000Z',
    '2022-05-03T02:22:12.000Z',
    '2022-09-01T02:23:12.000Z',
    '2022-08-03T02:22:12.000Z',
  ],
  1.3
);
const account3 = new account(
  'Gbemileke Ayooade',
  'Male',
  [600, -250, 200, -300, 100, -70, 1000, 500],
  3333,
  [
    '2022-01-10T02:14:12.000',
    '2022-02-02T02:02:12.00Z',
    '2022-01-06T02:11:12.000Z',
    '2022-04-09T02:10:12.000Z',
    '2022-07-04T02:11:16.000Z',
    '2022-08-09T02:21:12.000Z',
    '2022-05-07T02:20:12.000Z',
    '2022-07-03T02:21:02.000Z',
  ],
  1
);

const accounts = [account1, account2, account3];
accounts.forEach((curr) => {
  curr.createUsername();
});

let currentAccount, timeout;
loginBtn.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (curr) => curr.username === accountUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.password === Number(accountPassword.value)) {
    welcomeText.textContent = `Welcome back ${
      currentAccount.firstName.split(' ')[0]
    }!`;
    main.style.opacity = 1;

    // setMovement(currentAccount);

    currentAccount.updateBalance();
    if (timeout) clearInterval(timeout);
    timeout = currentAccount.displayTime();
  } else if (currentAccount?.password !== Number(accountPassword.value)) {
    main.style.opacity = 0;
    welcomeText.textContent = 'Sorry! Wrong login details';
  }
  accountUsername.value = accountPassword.value = '';
});
account1.calcInterest();
transferBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(transferAmount.value);
  const receiverAccount = accounts.find(
    (curr) => curr.username === transferInput.value
  );
  if (
    receiverAccount !== currentAccount &&
    amount > 0 &&
    amount <= currentAccount.balance
  ) {
    receiverAccount.movement.push(amount);
    currentAccount.movement.push(-amount);
    currentAccount.dates.push(new Date());
    receiverAccount.dates.push(new Date());
  }
  currentAccount.updateBalance();
  clearInterval(timeout);
  timeout = currentAccount.displayTime();
  transferAmount.value = transferInput.value = '';
});

loanBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(loanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movement.some((curr) => curr >= amount * 0.1)
  ) {
    currentAccount.movement.push(amount);

    currentAccount.dates.push(new Date());
  }
  setTimeout(() => {
    currentAccount.updateBalance();
  }, 3000);

  loanAmount.value = '';
});
let sorted = false;
sort.addEventListener('click', function () {
  currentAccount.setMovement(currentAccount, !sorted);
  sorted = !sorted;
});

deleteBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const index = accounts.findIndex(
    (curr) => curr.username === deleteInput.value
  );
  if (currentAccount?.password === Number(deletePin.value)) {
    deletePin.style.outline = '1px solid green';

    if (confirm('Do you want to delete the acount?')) {
      accounts.splice(index, 1);
      main.style.opacity = 0;
      welcomeText.textContent = 'Login to get started!';
    }
  } else {
    deletePin.style.outline = '1px solid red';
  }
});


