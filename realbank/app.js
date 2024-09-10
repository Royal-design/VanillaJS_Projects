"use strict";
const signinBtn = document.querySelector(".btn-signin");
const signupBtn = document.querySelector(".btn-signup");
const blurCont = document.querySelector(".container");
const foreground = document.querySelectorAll(".static");
const logBox = document.querySelectorAll(".signup");
const signin = document.querySelector(".signin");
const signup = document.querySelector(".signups");
const close = document.querySelectorAll(".signup-close");
const labelPass = document.querySelector(".pass-label");
const labelUser = document.querySelector(".label-user");

//create bank class

const container = document.querySelector(".movement");
const balanceLabel = document.querySelector(".account-balance");
const labelInc = document.querySelector(".summary-deposit");
const labelOut = document.querySelector(".summary-withdraw");
const labelInt = document.querySelector(".summary-interest");
const loginUsername = document.querySelector(".signin-inp");
const loginPassword = document.querySelector(".signin-pass");
const loginBtn = document.querySelector(".sign-in");
const account = document.querySelector(".account-box");
const welcomeLabel = document.querySelector(".welcome-text");
const labelDate = document.querySelector(".account-date");
const timer = document.querySelector(".timer");

const init = function () {
  labelPass.style.color = "white";
  labelUser.style.color = "white";
  labelUser.textContent = "Username";
  account.classList.add("hide");
  labelPass.textContent = "Password";
  loginUsername.style.border = "2px solid rgb(138, 228, 255)";
  loginPassword.style.border = "2px solid rgb(138, 228, 255)";
};

signinBtn.addEventListener("click", function (e) {
  e.preventDefault();

  blurCont.classList.add("blur");
  foreground.forEach((curr) => curr.classList.remove("visibility"));
  signin.classList.remove("hidden");
  loginUsername.focus();
});

signupBtn.addEventListener("click", function (e) {
  e.preventDefault();
  blurCont.classList.add("blur");
  foreground.forEach((curr) => curr.classList.remove("visibility"));

  signup.classList.remove("hidden");
});

close.forEach((curr) =>
  curr.addEventListener("click", function (e) {
    e.preventDefault();
    blurCont.classList.remove("blur");
    foreground.forEach((curr) => curr.classList.add("visibility"));
    logBox.forEach((curr) => curr.classList.add("hidden"));
    labelPass.style.color = "white";
    labelUser.style.color = "white";
    labelUser.textContent = "Username";
    labelPass.textContent = "Password";
    loginUsername.style.border = "2px solid rgb(138, 228, 255)";
    loginPassword.style.border = "2px solid rgb(138, 228, 255)";
  })
);

class bank {
  constructor(
    owner,
    movements,
    interestRate,
    pin,
    movementsDate,
    currency,
    locale
  ) {
    this.owner = owner;
    this.movements = movements;
    this.interestRate = interestRate;
    this.pin = pin;
    this.movementsDate = movementsDate;
    this.currency = currency;
    this.locale = locale;
  }
  createUsername() {
    this.username = this.owner
      .toLowerCase()
      .split(" ")
      .map((curr) => curr[0])
      .join("");
  }
  formatNumber(number) {
    return new Intl.NumberFormat(this.locale, {
      style: "currency",
      currency: this.currency,
    }).format(number);
  }
  formatLabelDate() {
    const newTime = new Date();
    return new Intl.DateTimeFormat(this.locale, {
      month: "long",
      year: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour: "numeric",
    }).format(newTime);
  }
  displayTime() {
    let time = 120;
    const tick = function () {
      time--;
      const min = String(Math.trunc((time / 60) % 60)).padStart(2, 0);
      const sec = String(Math.trunc(time % 60)).padStart(2, 0);
      timer.textContent = `You will be logged out in ${min}:${sec}`;
      if (time === 0) {
        clearInterval(setTimer);
        init();
      }
    };
    setTimer = setInterval(tick, 1000);
    return setTimer;
  }
  formatDate(date) {
    const calcDayPassed = function (date1, date2) {
      return Math.round(Math.abs((date2 - date1) / (1000 * 3600 * 24)));
    };
    const dayPassed = calcDayPassed(new Date(), date);

    if (dayPassed === 0) return "Today";
    if (dayPassed === 1) return "Yesterday";
    if (dayPassed <= 7) return `${dayPassed} days ago`;

    return new Intl.DateTimeFormat(this.locale).format(date);
  }
  sortMovement() {
    this.movements.sort((x, y) => x - y);
  }
  displayMovement(sort = false) {
    container.innerHTML = "";
    const movs = sort
      ? this.movements.slice().sort((x, y) => y - x)
      : this.movements;
    movs.forEach((mov, i) => {
      let id = sort ? this.movementsDate.length - 1 - i : i;
      const newDate = this.formatDate(new Date([this.movementsDate[id]]));
      const type = mov > 0 ? "deposit" : "withdraw";
      const html = `<div class="movement-${type}">
    <div class="${type}-box">
      <p class="${type}">${type}</p>
      <p class="${type}-date">${newDate}</p>
    </div>
    <p class="${type}-amount">${this.formatNumber(mov)}</p>
  </div>`;

      container.insertAdjacentHTML("afterbegin", html);
    });
  }
  calcBalance() {
    labelDate.textContent = `You logged in as at ${this.formatLabelDate()}`;
    this.balance = this.movements.reduce((acc, curr) => acc + curr, 0);
    balanceLabel.textContent = this.formatNumber(this.balance);
  }
  calcIncome() {
    this.income = this.movements
      .filter((mov) => mov > 0)
      .reduce((acc, curr) => acc + curr, 0);
    labelInc.textContent = this.formatNumber(this.income);
  }
  calcExpense() {
    this.expense = this.movements
      .filter((mov) => mov < 0)
      .reduce((acc, curr) => acc + curr, 0);
    labelOut.textContent = this.formatNumber(Math.abs(this.expense));
  }
  calcInterest() {
    this.interest = this.movements
      .filter((mov) => mov > 0)
      .map((curr) => (curr * this.interestRate) / 100)
      .reduce((acc, curr) => acc + curr, 0);
    labelInt.textContent = this.formatNumber(Math.trunc(this.interest));
  }
  update() {
    this.sortMovement();
    this.calcInterest();
    this.displayMovement();
    this.calcBalance();
    this.calcIncome();
    this.calcExpense();
  }
}

const account1 = new bank(
  "Ifeoluwa Philip",
  [200, 250, -400, 3000, -610, -130, 70, 1100],
  1.2,
  1111,
  [
    "2023-09-02T13:15:33.035Z",
    "2023-09-03T14:18:46.235Z",
    "2023-09-04T06:04:23.907Z",
    "2022-02-25T14:18:46.235Z",
    "2022-02-05T16:33:06.386Z",
    "2022-08-23T14:43:26.374Z",
    "2023-08-28T18:49:59.371Z",
    "2022-08-25T12:01:20.894Z",
  ],
  "Eur",
  "pt-PT"
);
const account2 = new bank(
  "Adebayo Joshua",
  [160, 210, -100, 3000, -610, -130, 70, 800],
  1.1,
  2222,
  [
    "2023-02-01T13:15:33.035Z",
    "2023-05-25T14:18:46.235Z",
    "2022-11-25T06:04:23.907Z",
    "2022-01-25T14:18:46.235Z",
    "2022-02-05T16:33:06.386Z",
    "2022-07-23T14:43:26.374Z",
    "2023-06-28T18:49:59.371Z",
    "2022-05-25T12:01:20.894Z",
  ],
  "USD",
  "en-us"
);
const account3 = new bank(
  "Ariyike Oluwaseun",
  [260, 230, -400, 4000, -610, -10, 80, 500],
  1.3,
  3333,
  [
    "2023-05-01T13:15:33.035Z",
    "2023-07-25T14:18:46.235Z",
    "2022-05-25T06:04:23.907Z",
    "2022-02-25T14:18:46.235Z",
    "2022-04-05T16:33:06.386Z",
    "2022-03-23T14:43:26.374Z",
    "2023-06-28T18:49:59.371Z",
    "2022-01-25T12:01:20.894Z",
  ],
  "EUR",
  "en-us"
);

const accounts = [account1, account2, account3];

let currentAccount, setTimer;

accounts.forEach((acc) => acc.createUsername());

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find((acc) => acc.username === loginUsername.value);

  if (currentAccount?.username !== loginUsername.value) {
    loginUsername.style.border = "2px solid red";
    labelUser.textContent = "Wrong Username!";
    labelUser.style.color = "red";
  }
  if (currentAccount?.pin === +loginPassword.value) {
    loginUsername.style.border = "2px solid green";
    loginPassword.style.border = "2px solid green";
    account.classList.remove("hide");

    signin.classList.add("hidden");
    foreground.forEach((curr) => curr.classList.add("visibility"));
    blurCont.classList.remove("blur");
    welcomeLabel.textContent = `Welcome back ${
      currentAccount.owner.split(" ")[0]
    }!`;

    if (setTimer) clearInterval(setTimer);
    setTimer = currentAccount.displayTime();
    currentAccount.update();
    loginPassword.value = loginUsername.value = "";
    loginUsername.focus();
  } else {
    loginPassword.style.border = "2px solid red";
    labelPass.textContent = "Wrong Password!";
    labelPass.style.color = "red";
    loginPassword.value = loginUsername.value = "";
  }
});

const back = document.querySelector(".nav-btn");
const transferBtn = document.querySelector(".transfer-btn");
const transferInput = document.querySelector(".transfer-username");
const trasferAmount = document.querySelector(".transfer-amount");

back.addEventListener("click", function (e) {
  e.preventDefault();
  init();
});

transferBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +trasferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => acc.username === transferInput.value
  );
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    console.log(receiverAcc, amount);
    receiverAcc.movementsDate.push(new Date().toISOString());
    currentAccount.movementsDate.push(new Date().toISOString());
    receiverAcc.movements.push(amount);
    currentAccount.movements.push(-amount);
    console.log(currentAccount.movements);
    currentAccount.update();
    transferInput.value = trasferAmount.value = "";
  }
});
const loanBtn = document.querySelector(".loan-btn");
const loanInput = document.querySelector(".loan-amount");
const deleteInput = document.querySelector(".delete-username");
const deletePin = document.querySelector(".delete-pin");
const deleteBtn = document.querySelector(".delete-btn");
const sort = document.querySelector(".sort");

loanBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +loanInput.value;
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(() => {
      currentAccount.movements.push(amount);
      currentAccount.movementsDate.push(new Date().toISOString());
      currentAccount.update();
    }, 2000);

    loanInput.value = "";
  }
});

deleteBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const accountIndex = accounts.findIndex(
    (acc) => acc.username === deleteInput.value
  );
  if (
    deleteInput.value === currentAccount.username &&
    currentAccount?.pin === +deletePin.value
  ) {
    if (confirm("Do you want to delete this account?")) {
      accounts.splice(accountIndex, 1);
      init();
    }
    deleteInput.value = deletePin.value = "";
  }
});

let sorted = false;
sort.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount.displayMovement(!sorted);
  sorted = !sorted;
});

const arr = [100, 20, -199, -2929, 34];

// const sortedA = arr.sort((x, y) => x - y);
// console.log(sortedA);
