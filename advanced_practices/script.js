'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const renderCountry = function (data, className = '') {
//   const language = Object.entries(data.languages).flat()[1];
//   const currency = Object.entries(data.currencies).flat()[1].name;
//   const html = `<article class="country ${className}">
// <img class="country__img" src="${data.flags.png}" />
// <div class="country__data">
//   <h3 class="country__name">${data.name.common}</h3>
//   <h4 class="country__region">${data.region}</h4>
//   <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
//     1
//   )} people</p>
//   <p class="country__row"><span>🗣️</span>${language}</p>
//   <p class="country__row"><span>💰</span>${currency}</p>
// </div>
// </article>`;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = '1';
// };

// const renderError = function (messg) {
//   countriesContainer.insertAdjacentHTML('beforeend', messg);
//   // countriesContainer.style.opacity = '1';
// };

// // const getCountryDataandNeigbourData = function (country) {
// //   const request1 = new XMLHttpRequest();
// //   request1.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// //   request1.send();

// //   request1.addEventListener('load', function () {
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);
// //     renderData(data);

// //     //neighbour country

// //     const [neighbour] = data.borders;
// //     if (!neighbour) return;

// //     const request2 = new XMLHttpRequest();
// //     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
// //     request2.send();
// //     request2.addEventListener('load', function () {
// //       const [data2] = JSON.parse(this.responseText);
// //       console.log(data2);
// //       renderData(data2, 'neighbour');
// //     });
// //   });
// // };

// // getCountryDataandNeigbourData('nigeria');

// ///getting response
// // const request = fetch('https://restcountries.com/v3.1/name/portugal');
// // console.log(request);

// // const getData = function (country) {
// //   fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (
// //     response
// //   ) {
// //     console.log(response);
// //   });
// // };
// // getData('portugal');

// //get json, it will result in new promises
// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

// // const getData = function (country) {
// //   fetch(`https://restcountries.com/v3.1/name/${country}`)
// //     .then(function (response) {
// //       console.log(response);
// //       return response.json();
// //     })
// //     .then(function (data) {
// //       console.log(data);
// //       renderCountry(data[0]);
// //     });
// // };

// // const getData = function (country) {
// //   fetch(`https://restcountries.com/v3.1/name/${country}`)
// //     .then((response) => {
// //       console.log(response);
// //       if (!response.ok)
// //         throw new Error(`Country not found (${response.status})`);
// //       return response.json();
// //     })
// //     .then((data) => {
// //       console.log(data[0]);
// //       renderCountry(data[0]);
// //       const [neighbour] = data[0].borders;

// //       if (!neighbour) return;

// //       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
// //     })
// //     .then((response) => response.json())
// //     .then((data) => renderCountry(data[0], 'neighbour'))
// //     .catch((err) => {
// //       console.error(err.message);
// //       renderError(`Something went wrong💥💥💥 ${err.message}. Try again!`);
// //     })
// //     .finally(() => {
// //       countriesContainer.style.opacity = '1';
// //     });
// // };
// const getJSON = function (url, errMSG = `Something went wrong`) {
//   return fetch(url).then((response) => {
//     if (!response.ok) throw new Error(`${errMSG} (${response.status})`);
//     return response.json();
//   });
// };

// const getData = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)
//     .then((data) => {
//       console.log(data[0]);
//       renderCountry(data[0]);
//       const neighbour = data[0].borders;
//       console.log(neighbour);
//       if (!neighbour) throw new Error(`Country not found`);

//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         `Country not found`
//       );
//     })
//     .then((data) => renderCountry(data[0], 'neighbour'))
//     .catch((err) => {
//       console.error(err.message);
//       renderError(`Something went wrong💥💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = '1';
//     });
// };
// btn.addEventListener('click', function () {
//   getData('canada');
// });

// //challenge where am i

// // const whereAmI = function (lat, lng) {
// //   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
// //     .then((response) => response.json())
// //     .then((data) => {
// //       console.log(data);
// //     });
// // };

// // whereAmI(52.508, 13.381);

// // console.log('test start');
// // setTimeout(() => {
// //   console.log('time o');
// // }, 0);
// // Promise.resolve('promise filfilled').then((res) => console.log(res));
// // console.log('test end');

// //building promise from scratch

// // const lotterypromise = new Promise((resolve, reject) => {
// //   console.log('Lottery is going on 🔮');
// //   setTimeout(() => {
// //     if (Math.random() >= 0.5) {
// //       resolve('You win');
// //     } else {
// //       reject(new Error('you lose'));
// //     }
// //   }, 2000);
// // })
// //   .then((res) => console.log(res))
// // .catch((err) => console.error(err));

// const wait = (seconds) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// // wait(2)
// //   .then(() => {
// //     console.log('I waited for 2 seconds');
// //     return wait(1);
// //   })
// //   .then(() => console.log('I waited for 1 sec'));

// // const promiseHer = new Promise((resolve, reject) => {
// //   console.log('Did you promise her');
// //   const questPrompt = prompt('Did you promise her');
// //   setTimeout(() => {
// //     if (questPrompt === 'yes') {
// //       resolve('Yes');
// //     } else {
// //       reject(new Error('No'));
// //     }
// //   });
// // });
// // promiseHer.then((res) => console.log(res)).catch((err) => console.error(err));

// const getPosition = function () {
//   return new Promise((resolve, reject) => {
//     // navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// getPosition().then((res) => console.log(res));

// // const imageContainer = document.querySelector('.images');
// // const createImage = function (imgPath) {
// //   return new Promise((resolve, reject) => {
// //     const img = document.createElement('img');
// //     img.src = imgPath;
// //     img.addEventListener('load', function () {
// //       imageContainer.append(img);
// //       resolve(img);
// //     });
// //     img.addEventListener('error', function () {
// //       reject(new Error('Image not found'));
// //     });
// //   });
// // };

// //creating image

// // let currentImage;
// // createImage('img/img-1.jpg')
// //   .then((img) => {
// //     currentImage = img;
// //     console.log('Image 1 loaded');
// //     return wait(2);
// //   })
// //   .then(() => {
// //     currentImage.style.display = 'none';
// //     return createImage('img/img-2.jpg');
// //   })
// //   .then((img) => {
// //     currentImage = img;
// //     console.log('image 2 loaded');
// //     return wait(2);
// //   })
// //   .then(() => {
// //     currentImage.style.display = 'none';
// //   })
// //   .catch((err) => console.error(err));

// //consuming promises by using asyn and await

// const getCountry = async function (country) {
//   const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//   const data = await res.json();
//   // console.log(data[0]);
//   renderCountry(data[0]);
//   const neighbour = data[0].borders[0];
//   // console.log(neighbour);
//   const res2 = await fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//   const data2 = await res2.json();
//   // console.log(data2[0]);
//   renderCountry(data2[0], 'neighbour');
// };
// getCountry('portugal');

// // const getGeo = async function () {
// //   try {
// //     const newGeo = await new Promise((resolve, reject) => {
// //       navigator.geolocation.getCurrentPosition(resolve, reject);
// //     });
// //     console.log(newGeo);
// //   } catch (err) {
// //     console.log(err);
// //   }
// // };
// // getGeo();

// //promise.all will short circuit when there is one reject
// const getCountries = async function (c1, c2, c3) {
//   try {
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//     ]);
//     const capital = data.flatMap((curr) => curr[0]);
//     // console.log(capital);
//     capital.forEach((curr) => renderCountry(curr));
//   } catch (err) {
//     console.error(console.log(err));
//   }
// };
// getCountries('portugal', 'nigeria', 'korea');

// //promise race

// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/italy`),
//     getJSON(`https://restcountries.com/v3.1/name/egypt`),
//     getJSON(`https://restcountries.com/v3.1/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();

// const timeOut = function (sec) {
//   return new Promise((_, reject) => {
//     setTimeout(() => {
//       reject(new Error('Request took too long'));
//     }, sec * 1000);
//   });
// };
// const getNewCountry = async function () {
//   try {
//     const data = await Promise.race([
//       getJSON(`https://restcountries.com/v3.1/name/tanzania`),
//       timeOut(1),
//     ]);
//     console.log(data[0]);
//   } catch (err) {
//     console.error(err);
//   }
// };
// getNewCountry();

// // Promise.race([
// //   getJSON(`https://restcountries.com/v3.1/name/tanzania`),
// //   timeOut(0.1),
// // ])
// //   .then((res) => console.log(res[0]))
// //   .catch((err) => console.error(err));

// //promise.allsettled will not short circuit i.e will return all

// Promise.allSettled([
//   Promise.resolve('success'),
//   Promise.reject('error'),
//   Promise.resolve('another success'),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// Promise.all([
//   Promise.resolve('success'),
//   Promise.reject('error'),
//   Promise.resolve('another success'),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// //promise.any is always fulfilled promise. return the first fulfilled promise unless everything is reject

// Promise.any([
//   Promise.resolve('success'),
//   Promise.reject('error'),
//   Promise.resolve('another success'),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// const imageContainer = document.querySelector('.images');
// const createImage = function (imgPath) {
//   return new Promise((resolve, reject) => {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener('load', function () {
//       imageContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// const loadNPause = async function () {
//   try {
//     let img = await createImage('img/img-1.jpg');
//     console.log('image 1 loaded');
//     await wait(2);
//     img.style.display = 'none';
//     img = await createImage('img/img-2.jpg');
//     console.log('image 2 loaded');
//   } catch (err) {
//     console.error(err);
//   }
// };
// // loadNPause();

// const loadAll = async function (imgarr) {
//   try {
//     const imgs = imgarr.map(async (img) => await createImage(img));

//     console.log(imgs);
//     const imgsEl = await Promise.all(imgs);
//     console.log(imgsEl);
//     imgsEl.forEach((img) => img.classList.add('parallel'));
//   } catch (err) {
//     console.error(err);
//   }
// };
// loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

// single verse
// https://bible-api.com/john 3:16
// abbreviated book name
// https://bible-api.com/jn 3:16
// verse range
// https://bible-api.com/romans+12:1-2
// multiple ranges
// https://bible-api.com/romans 12:1-2,5-7,9,13:1-9&10
// different translation
// https://bible-api.com/john 3:16?translation=kjv
// verse numbers
// https://bible-api.com/john 3:16?verse_numbers=true
// jsonp
// https://bible-api.com/john+3:16?callback=func
// random verse
// https://bible-api.com/?random=verse
// const inputValue = document.querySelector('.bible-input');
// const searchBtn = document.querySelector('.bible-search');
// const bodyBox = document.querySelector('.bible-text');

// const checkBox = document.querySelectorAll('.bible-check');

// searchBtn.addEventListener('click', async function () {
//   let version;
//   checkBox.forEach((curr) => {
//     if (curr.checked === true) {
//       version = curr.id;
//     }
//   });
//   try {
//     const res = await fetch(
//       `https://bible-api.com/${inputValue.value}?translation=${version}`
//     );
//     const data = await res.json();
//     bodyBox.textContent = data.text;
//     // console.log(data.text);
//   } catch (err) {
//     console.error(new Error(`can't find bible text`));
//   }
//   inputValue.value = '';
// });

// const getBibleVerse = async function (text, ver) {
//   try {
//     const res = await fetch(`https://bible-api.com/${text}?translation=${ver}`);
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// };
// getBibleVerse('john 3:16', 'bbe');
const avg = [2, 3, 4, 5, 6];

(() => {
  const avgg = avg.reduce((acc, curr, i, arr) => {
    const num = acc + curr;
    return num;
  }, 0);
  console.log(avg.length);
  console.log(avgg / avg.length);
})();
