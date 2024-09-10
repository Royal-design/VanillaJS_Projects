'use strict';
const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const article = document.querySelectorAll('.article');
const about = document.querySelector('.about');
const item = document.querySelector('.nav__item-2');
const nav = document.querySelector('.nav');
nav.addEventListener('click', function (e) {
  article.forEach((curr) => curr.classList.remove('active'));

  const active = e.target.closest('.nav__item');
  const id = active.firstElementChild.getAttribute('href');
  console.log(id);
  if (!id) return;
  document.querySelector(id).classList.add('active');
});

open.addEventListener('click', () => container.classList.add('container-show'));
close.addEventListener('click', () =>
  container.classList.remove('container-show')
);

const btn = document.querySelector('.search-btn');
const input = document.querySelector('.search__input');

btn.addEventListener('click', function () {
  input.classList.toggle('add');
  input.focus();
});

const loadText = document.querySelector('.load-text');
const loadImage = document.querySelector('.load-image');

//important scale to note for blurring or brightness
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

let num = 0;

const blur = function () {
  num++;
  loadText.textContent = `${num}%`;
  loadText.style.opacity = scale(num, 0, 100, 1, 0);
  loadImage.style.filter = `blur(${scale(num, 0, 100, 3, 0)}rem)`;
  if (num > 99) {
    clearInterval(tick);
  }
};
const tick = setInterval(blur, 30);
const labels = document.querySelectorAll('.form-label');
labels.forEach((curr) => {
  curr.innerHTML = curr.textContent
    .split('')
    .map(
      (letter, id) =>
        `<span class='form-span' style ='transition-delay: ${
          id * 30
        }ms'>${letter}</span>`
    )
    .join('');
});

const keyBox = document.querySelector('.key-box');
const anyKey = document.querySelector('.key-btn-start');
const key = document.querySelector('.key-btn-1');
const keyCode = document.querySelector('.key-btn-2');
const code = document.querySelector('.key-btn-3');

document.addEventListener('keydown', function (e) {
  keyBox.classList.remove('hide');
  anyKey.classList.add('hide');
  key.textContent = e.key;
  keyCode.textContent = e.keyCode;
  code.textContent = e.code;
});

const answer = document.querySelectorAll('.question-btn-answer');
const question = document.querySelectorAll('.question-btn-question');
const quest = document.querySelector('.question');
quest.addEventListener('click', function (e) {
  // question.forEach(curr=>{
  //   curr.addEventListener('click', function (e) {

  //   })
  // })
  answer.forEach((curr) => curr.classList.add('close'));
  const active = e.target.closest('.question-btn');
  active.nextElementSibling.classList.remove('close');
});

const randomInput = document.querySelector('.random-textarea');
const randomContainer = document.querySelector('.btn-group');
const randomBtn = document.querySelector('.random-btn');
// randomInput.focus();
const createTag = function (value) {
  const tags = value
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

  randomContainer.innerHTML = '';

  tags.forEach((tag) => {
    // const tagEl = document.createElement("span");
    // tagEl.classList.add("random-tag");
    // tagEl.innerText = tag;
    // randomContainer.appendChild(tagEl);
    const html = ` <span class="random-tag">${tag}</span>`;
    randomContainer.insertAdjacentHTML('beforeend', html);
  });
  console.log(tags);
};

const randomSelect = function () {
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);
  setTimeout(() => {
    clearInterval(interval);
    const randomTag = pickRandomTag();
    console.log(randomTag);
    highlightTag(randomTag);
  }, 2000);
};

const pickRandomTag = function () {
  const tags = document.querySelectorAll('.random-tag');
  return tags[Math.trunc(Math.random() * tags.length)];
};

const highlightTag = function (tag) {
  tag.classList.add('random-active');
};
const unHighlightTag = function (tag) {
  tag.classList.remove('random-active');
};

randomInput.addEventListener('keyup', function (e) {
  createTag(e.target.value);

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 20);
    randomSelect();
  }
});

const items = document.querySelectorAll('.animated-nav-item');
const icon = document.querySelector('.animated-nav-icon');
const animatedContainer = document.querySelector('.animated-nav');
animatedContainer.addEventListener('click', function (e) {
  const active = e.target;
  animatedContainer.classList.toggle('animated-nav-active');
  const nav = e.target.closest('.animated-nav').firstElementChild;
  items.forEach((curr) => curr.classList.toggle('animated-nav-item-active'));
  if (active.classList.contains('fa-close')) {
    active.classList.replace('fa-close', 'fa-bars');
    nav.classList.remove('animated-nav-list-active');
    // animatedContainer.classList.remove("animated-nav-active");
  } else {
    active.classList.replace('fa-bars', 'fa-close');
    nav.classList.add('animated-nav-list-active');
    // animatedContainer.classList.add("animated-nav-active");
  }
});

const bigCup = document.querySelector('.cup__jug-big');
const cups = document.querySelectorAll('.cup__jug-small');
const percentage = document.querySelector('.cup__percentage');
const remained = document.querySelector('.cup__remained');
const liter = document.querySelector('.cup__remained-value');

const highlight = function (ids) {
  if (
    cups[ids].classList.contains('cup__highlight') &&
    !cups[ids].nextElementSibling.classList.contains('cup__highlight')
  ) {
    ids--;
  }
  cups.forEach((cup, id) => {
    if (id <= ids) {
      cup.classList.add('cup__highlight');
    } else {
      cup.classList.remove('cup__highlight');
    }
  });
  updateBigCup();
};

const updateBigCup = function () {
  const fullCup = document.querySelectorAll('.cup__highlight').length;
  const totalCups = cups.length;
  // console.log(fullCup);
  if (fullCup === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = `0`;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCup / totalCups) * 100}%`;
    percentage.textContent = `${(fullCup / totalCups) * 100}%`;
  }
  if (fullCup === totalCups) {
    remained.style.visibility = `hidden`;
    remained.style.height = `0`;
  } else {
    remained.style.visibility = `visible`;
    liter.textContent = `${((100 - (fullCup / totalCups) * 100) / 100) * 2}L`;
  }
};

updateBigCup();

cups.forEach((cup, id) => {
  cup.addEventListener('click', function () {
    highlight(id);
  });
});

//quiz functionality setup

const quizContainer = document.querySelector('.quiz__container');
const quizLabel = document.querySelectorAll('.quiz__label');
const quizInput = document.querySelectorAll('.quiz__input');
const quizQuestion = document.querySelector('.quiz__question');
const quizBtn = document.querySelector('.quiz__btn');
class quiz {
  constructor(question, options, answer) {
    this.question = question;
    this.options = options;
    this.answer = answer;
  }
}

const question1 = new quiz(
  'What is your name?',
  ['Ade', 'Oluwaseun', 'Iyanuoluwa', 'Ifeoluwa'],
  'b'
);

const question2 = new quiz(
  'What is your best food?',
  ['Rice', 'Rice and Beans', 'Semovita', 'Indomie'],
  'c'
);
const question3 = new quiz(
  'What is your best color?',
  ['Blue', 'Yellow', 'White', 'Green'],
  'a'
);
const question4 = new quiz(
  'What is your hobby?',
  ['Singing', 'Dancing', 'Eating', 'Coding'],
  'd'
);

const questions = [question1, question2, question3, question4];

let score = 0;
let currentQuestion = 0;

const loadQuestion = function () {
  const getQuestion = questions[currentQuestion];
  quizQuestion.textContent = getQuestion.question;
  quizLabel.forEach((label, i) => (label.textContent = getQuestion.options[i]));
  quizInput.forEach((input) => (input.checked = false));
};
loadQuestion();

quizBtn.addEventListener('click', function () {
  let answer;
  quizInput.forEach((input) => {
    if (input.checked) answer = input.id;
  });
  console.log(answer);
  if (answer) {
    if (answer === questions[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      quizContainer.style.height = '13rem';
      quizContainer.innerHTML = `<h1 class="quiz__question"> You scored: ${score}/${questions.length}</h1>
      <button onclick="location.reload()" class="quiz__btn"> Reload</button>`;
    }
  }
});
