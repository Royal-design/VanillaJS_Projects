'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const header = document.querySelector('.header');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
const logo = document.querySelector('.nav__logo');
console.log(logo.getAttribute('src'));
console.log(logo.src);
btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

const handleOver = function (e) {
  e.preventDefault();
  const link = e.target;

  const siblings = e.target.closest('.nav').querySelectorAll('.nav__link');
  const logo = e.target.closest('.nav').querySelector('img');
  siblings.forEach((el) => {
    if (el !== link) {
      el.style.opacity = this;
      logo.style.opacity = this;
    }
  });
};
nav.addEventListener('mouseover', handleOver.bind(0.5));
nav.addEventListener('mouseout', handleOver.bind(1));
const links = document.querySelectorAll('.nav__link');
links.forEach((curr) =>
  curr.addEventListener('click', function (e) {
    e.preventDefault();
    const link = this.getAttribute('href');
    document.querySelector(link).scrollIntoView({ behavior: 'smooth' });
  })
);
tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  const tab = e.target.closest('.operations__tab');
  if (!tab) return;
  tabs.forEach((curr) => curr.classList.remove('operations__tab--active'));
  tabsContent.forEach((curr) =>
    curr.classList.remove('operations__content--active')
  );
  tab.classList.add('operations__tab--active');
  const content = document.querySelector(
    `.operations__content--${tab.dataset.tab}`
  );
  content.classList.add('operations__content--active');
});
const obsCallBack = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};
const obsOption = {
  root: null,
  threshold: 0,
  rootMargin: '-90px',
};

const observer = new IntersectionObserver(obsCallBack, obsOption).observe(
  header
);

const allSection = document.querySelectorAll('.section');
const revealSecton = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSecton, {
  root: null,
  threshold: 0.15,
});

allSection.forEach((curr) => {
  sectionObserver.observe(curr);
  // curr.classList.add('section--hidden');
});

const revealImage = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};
const imageObserver = new IntersectionObserver(revealImage, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
const imageObserve = document.querySelectorAll('img[data-src]');
imageObserve.forEach((image) => imageObserver.observe(image));

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.slider__btn--right');
const prevBtn = document.querySelector('.slider__btn--left');

const dotContainer = document.querySelector('.dots');
const createDots = function () {
  slides.forEach((_, i) => {
    let html = `<button class="dots__dot" data-slide =${i}></button>`;
    dotContainer.insertAdjacentHTML('beforeend', html);
  });
};
createDots();
let currSlide = 0;
let maxSlide = slides.length;

const goToSlide = function (currSlide) {
  slides.forEach((curr, i) => {
    curr.style.transform = `translateX(${100 * (currSlide - i)}%)`;
  });
};
const activateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach((curr) => curr.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};
const nextSlide = function () {
  if (currSlide === maxSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  goToSlide(currSlide);
  activateDot(currSlide);
};
const prevSlide = function () {
  if (currSlide === 0) {
    currSlide = maxSlide - 1;
  } else {
    currSlide--;
  }
  goToSlide(currSlide);
  activateDot(currSlide);
};
goToSlide(0);
activateDot(0);
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
});

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const slide = e.target.dataset.slide;
    goToSlide(slide);
    activateDot(slide);
  }
});
