'use script';

const formClick = document.querySelector('.form__click');
const formClose = document.querySelectorAll('.form__exit');

const formOpen = document.querySelector('.form');

const openForm = function () {
  formOpen.classList.remove('hidden');
  formClick.style.color = 'red';
};
const closeForm = function () {
  formOpen.classList.add('hidden');
  formClick.style.color = 'white';
};
formClick.addEventListener('click', openForm);

for (let i = 0; i < formClose.length; i++) {
  formClose[i].addEventListener('click', closeForm);
}

const panels = document.querySelectorAll('.panel');

const panelDisplay = function (e) {
  let icon = e.target.closest('.panel').firstElementChild.firstElementChild;
  let image = e.target.closest('.panel').nextElementSibling.firstElementChild;
  let height = e.target.closest('.panel').nextElementSibling;

  image.classList.toggle('opacity');
  height.classList.toggle('height');
  this.classList.toggle('active');

  if (icon.classList.contains('fa-plus')) {
    icon.classList.replace('fa-plus', 'fa-minus');
  } else if (icon.classList.contains('fa-minus')) {
    icon.classList.replace('fa-minus', 'fa-plus');
  }
};
for (let i = 0; i < panels.length; i++) {
  const panel = panels[i];

  panel.addEventListener('click', panelDisplay);
}

// const calcAvg = function (values) {
//   let sum = 0;
//   for (const item of values) {
//     console.log;
//     sum += item;
//   }
//   return sum / values.length;
// };
// console.log(calcAvg([1, 2, 9]));
const value = [1, 2, 3];
for (const item of value) {
  // console.log(item);
}

const convert = document.querySelector('.conversion__input-kg');
const gram = '.conversion__input-g';
const milligram = '.conversion__input-mg';

const getResult = function () {
  const result = function (dom, values) {
    document.querySelector(dom).value = (convert.value * values).toFixed(2);
  };
  result(gram, 1000);
  result(milligram, 1000 * 1000);
};

convert.addEventListener('input', getResult);
const expand = document.querySelectorAll('.image1');
const getExpand = function (e) {
  const img = e.target.closest('.image1');
  img.classList.toggle('actives');
};
// for (let i = 0; i < expand.length; i++) {
//   const ex = expand[i];
//   ex.addEventListener('click', getExpand);
// }
// expand.forEach(function (curr) {
//   curr.addEventListener('click', getExpand);
// });
for (const item of expand) {
  item.addEventListener('click', getExpand);
}

var a = 1 + 2;
const calc = function (val) {};
const screen = document.querySelector('.calculator__screen');
const enter = document.querySelector('.enter');
const getValues = document.querySelectorAll('.calculator-value');
const getValue = function () {
  getValues.forEach(function (curr) {
    let str = '';
    // console.log(curr);
    curr.addEventListener('click', function (e) {
      const value = +e.target.id;
      str += value;
      console.log(str);
    });
  });
};
getValue();
enter.addEventListener('click', getValue);

const getInput = document.querySelector('.form__container-input');
const addBtn = document.querySelector('.form__container-add');
const clearBtn = document.querySelector('.form__container-clear');
const container = document.querySelector('.form__container-list');
container.innerHTML = '';
const addInput = function (e) {
  let newInput, html;
  newInput = getInput.value;
  html = `  <li class="form__container-item">
${newInput} <span class="form__container-times">x</span>
</li>`;
  if (newInput !== '') {
    container.insertAdjacentHTML('beforeend', html);
    getInput.value = '';
  } else {
    alert(`Input can't be empty`);
  }
};
const deleteBtn = function (e) {
  if (e.target.classList.contains('form__container-times')) {
    const deleteList = this.firstElementChild.firstElementChild;
    deleteList.parentElement.remove();
  } else {
    return;
  }
};
const clear = function () {
  container.innerHTML = '';
};
container.addEventListener('click', deleteBtn);
addBtn.addEventListener('click', addInput);
clearBtn.addEventListener('click', clear);
