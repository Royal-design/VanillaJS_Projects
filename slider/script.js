"use strict";

// const accordion = document.querySelectorAll(".accordion");
// accordion.forEach((cur) => {
//   cur.addEventListener("click", function (e) {
//     e.preventDefault();
//     const sibling = this.nextElementSibling;
//     if (sibling.style.display === "block") {
//       sibling.style.display = "none";
//     } else {
//       sibling.style.display = "block";
//     }
//   });
// });
const accordion = document.querySelector(".accordion__box");

// accordion.addEventListener("click", function (e) {
//   let img = e.target.closest(".accordion").nextElementSibling.firstElementChild;

//   e.preventDefault();
//   e.target.closest(".accordion").classList.toggle("active");
//   let arrow =
//     e.target.closest(".accordion").firstElementChild.firstElementChild;
//   console.log(arrow);
//   let sibling = e.target.closest(".accordion").nextElementSibling;
//   if (sibling.style.display === "block") {
//     sibling.style.display = "none";
//     sibling.style.width = "0";
//     sibling.style.height = "0";
//     arrow.classList.replace("fa-angle-up", "fa-angle-down");
//   } else {
//     sibling.style.display = "block";
//     sibling.style.width = "100%";
//     sibling.style.height = "100%";
//     img.classList.add("opacity");
//     arrow.classList.replace("fa-angle-down", "fa-angle-up");
//   }
// });

accordion.addEventListener("click", function (e) {
  e.target.closest(".accordion").classList.toggle("active");
  let img = e.target.closest(".accordion").nextElementSibling.firstElementChild;
  img.classList.toggle("opacity");
  if (!e.target) return;
  let arrow =
    e.target.closest(".accordion").firstElementChild.firstElementChild;
  const sibling = e.target.closest(".accordion").nextElementSibling;
  sibling.classList.toggle("panel-active");
  if (arrow.classList.contains("fa-angle-down")) {
    arrow.classList.replace("fa-angle-down", "fa-angle-up");
  } else if (arrow.classList.contains("fa-angle-up")) {
    arrow.classList.replace("fa-angle-up", "fa-angle-down");
  }
});
