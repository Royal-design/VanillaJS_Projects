'use strict';

const billInput = document.querySelector('.tip__bill');
const peopleInput = document.querySelector('.tip__people');
const tipPercent = document.querySelectorAll('.tip__btn');
const totalTip = document.querySelector('.totaltip');
const totalBill = document.querySelector('.totalbill');
const tipCustom = document.querySelector('.tip__custom');
const error = document.getElementById('error');

let billValue,
  peopleValue,
  tipTotal,
  billTotal,
  billTotalResult,
  tipTotalresult;

const colorDisplay = function () {
  peopleInput.style.outline = 'none';
  error.style.color = 'black';
};

const data = function (percent, value) {
  billValue = Number(billInput.value);
  peopleValue = Number(peopleInput.value);
  billTotal = percent * billValue * value * peopleValue + billValue;
  tipTotal = percent * billValue * value * peopleValue;
  billTotalResult = billTotal.toFixed(2);
  tipTotalresult = tipTotal.toFixed(2);

  if (peopleValue !== 0) {
    totalTip.textContent = `$${tipTotalresult}`;
    totalBill.textContent = `$${billTotalResult}`;
  } else {
    error.style.color = 'red';
    peopleInput.style.outline = '1px solid red';
  }
};
for (const item of tipPercent) {
  item.addEventListener('click', function () {
    data(Number(item.value), 0.01);

    billInput.value = peopleInput.value = '';
  });
}
const reset = function () {
  totalTip.textContent = `$0.00`;
  totalBill.textContent = `$0.00`;
};

const custom = function () {
  if (typeof Number(tipCustom.value) !== 'string') {
    data(Number(tipCustom.value), 0.01);
  }
};
