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

// console.log(document.head);
// const btn = document.getElementsByTagName('button');
// console.log(btn);
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent =
// //   "we cooked for improved functionality and analytics <button class = 'btn'>Got it!</button>";
// message.innerHTML =
//   "we cooked for improved functionality and analytics <button class = 'btn btn--close-cookie'>Got it!</button>";
// header.append(message);
// // header.append(message.cloneNode(true));
// // header.after(message);

// // document
// //   .querySelector(".btn--close-cookie")
// //   .addEventListener("click", function (e) {
// //     e.preventDefault();
// //     message.remove();
// //   });
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// // message.style.height = "120px";
// // console.log(getComputedStyle(message).height);
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
// ///set property
// // document.documentElement.style.setProperty('--color-primary', 'orange');

// //attributes
// let logo = document.querySelector('.nav__logo');

// console.log(logo.src);
// console.log(logo.getAttribute('designer'));
// console.log(logo.dataset.versionNumber);
btnScrollTo.addEventListener('click', function (e) {
  const s1Coords = section1.getBoundingClientRect();
  console.log(s1Coords);
  console.log(e.target.getBoundingClientRect());
  console.log('current scroll(X/Y)', window.scrollX, window.scrollY);
  console.log(
    'X/Y',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //scrolling
  // window.scrollTo(
  //   s1Coords.left + window.scrollX,
  //   s1Coords.top + window.scrollY
  // );

  //smooth scrolling
  // window.scrollTo({
  //   left: s1Coords.left + window.scrollX,
  //   top: s1Coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
});

// const randomInt = (max, min) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('link', e.target, e.currentTarget);
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('container', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('nav', e.target, e.currentTarget);
// });

//method 1 for navigation
// document.querySelectorAll('.nav__link').forEach((el) =>
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   })
// );

//method 2 for navigation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// //going downward
// const h1 = document.querySelector('h1');
// // console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'red';

// //going upward
// console.log(h1.parentNode);
// h1.closest('.header').style.background = 'var(--gradient-secondary )';

// //going sideways
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.parentElement.children);
// const data = h1.parentElement.children;
// [...data].forEach((el) => {
//   if (el !== h1) {
//     el.style.backgroundColor = 'green';
//   }
// });

//tab

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  //guard clause
  if (!clicked) return;
  tabs.forEach((tab) => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  tabsContent.forEach((t) => t.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//animation fading

// const handleHover = function (e, opacity) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = e.target.closest('.nav').querySelectorAll('.nav__link');
//     const logo = e.target.closest('.nav').querySelector('img');
//     siblings.forEach((el) => {
//       if (el !== link) {
//         el.style.opacity = opacity;
//         logo.style.opacity = opacity;
//       }
//     });
//   }
// };
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    console.log(this);
    const link = e.target;
    const siblings = e.target.closest('.nav').querySelectorAll('.nav__link');
    const logo = e.target.closest('.nav').querySelector('img');
    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = this;
        logo.style.opacity = this;
      }
    });
  }
};

// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });
// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//sticky navigation
//old way
// const initialCoord = section1.getBoundingClientRect();
// // console.log(initialCoord);
// document.addEventListener('scroll', function () {
//   // console.log(scrollY);
//   if (window.scrollY > initialCoord.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

//new way
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

//revealing section
const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
const allSection = document.querySelectorAll('.section');

allSection.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//lazy loading images

const imgTargets = document.querySelectorAll('img[data-src]');
// console.log(imgTargets);
const loadImage = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  //replace src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imgTargets.forEach((img) => imgObserver.observe(img));

//implementing slider
const slider = function () {
  const dotContainer = document.querySelector('.dots');
  const btnRight = document.querySelector('.slider__btn--right');
  const btnLeft = document.querySelector('.slider__btn--left');
  const slide = document.querySelectorAll('.slide');

  const goToSlide = function (slides) {
    slide.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slides)}%  )`)
    );
  };

  let curSlide = 0;
  let maxSlide = slide.length;

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else curSlide++;
    goToSlide(curSlide);
    activateDots(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else curSlide--;
    goToSlide(curSlide);
    activateDots(curSlide);
  };

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  //implementing keyboard arrow key

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });

  //creating dots
  const createDots = function () {
    slide.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class = "dots__dot" data-slide = "${i}" ></button>`
      );
    });
  };

  const activateDots = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach((curr) => curr.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide = "${slide}"]`)
      .classList.add('dots__dot--active');
    goToSlide(slide);
  };
  const init = function () {
    goToSlide(0);
    createDots();
    activateDots(0);
  };
  init();
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      activateDots(slide);
    }
  });
};
slider();

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('Html parsed and dom tree built', e);
});

//use beforeunload to display leaving site message
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});
