"use strict";
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");

let currSlide = 0;
let maxSlide = slides.length;

const goToSlide = function (currSlide) {
  slides.forEach((curr, i) => {
    curr.style.transform = `translateX(${100 * (currSlide - i)}%)`;
  });
};

goToSlide(1);
setInterval(() => {
  if (currSlide === maxSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  goToSlide(currSlide);
}, 3000);

const slides2 = document.querySelectorAll(".slide2");
const slider2 = document.querySelector(".slider2");

let currSlide2 = 0;
let maxSlide2 = slides.length;

const goToSlide2 = function (currSlide) {
  slides2.forEach((curr, i) => {
    curr.style.transform = `translateX(${100 * (currSlide - i)}%)`;
  });
};

goToSlide2(1);
setInterval(() => {
  if (currSlide2 === maxSlide2 - 1) {
    currSlide2 = 0;
  } else {
    currSlide2++;
  }
  goToSlide2(currSlide2);
}, 2000);
