'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//refactoring using oop

class workout {
  date = new Date();

  id = (Date.now() + '').slice(-10);
  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }
  setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    }${this.date.getDate()}`;
  }
}

class running extends workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this.setDescription();
  }
  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class cycling extends workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this.setDescription();
  }
  calcSpeed() {
    this.speed = this.duration / this.distance;
    return this.speed;
  }
}

////////////////////////////////////////////
//APPLICATION ARCHITECTURE
class App {
  #map;
  #mapEvent;
  #mapZoom = 10;
  #workouts = [];
  constructor() {
    this.getPosition();
    form.addEventListener('submit', this.newWorkout.bind(this));
    inputType.addEventListener('change', function () {
      inputElevation
        .closest('.form__row')
        .classList.toggle('form__row--hidden');
      inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    });
    containerWorkouts.addEventListener('click', this.moveToPopup.bind(this));
  }
  //we bind loadmap so as to have this property in it
  getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this.loadMap.bind(this),
        function () {
          alert('could not get your positions');
        }
      );
  }
  loadMap(position) {
    console.log(this);
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    console.log(`https://www.google.com/maps/@${latitude},${longitude} `);
    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, this.#mapZoom);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this.showForm.bind(this));
  }

  showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }
  hideForm() {
    // prettier-ignore
    inputDuration.value =inputDistance.value =inputCadence.value =inputElevation.value ='';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => {
      form.style.display = 'grid';
    }, 1000);
  }
  toggleElevationField() {}
  newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every((inp) => Number.isFinite(inp));

    const allPositive = (...inputs) => inputs.every((inp) => inp > 0);
    e.preventDefault();

    //get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const cadence = +inputCadence.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;
    //if workout running, create running object

    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      ) {
        return alert('Inputs have to be positive numbers');
      }

      workout = new running([lat, lng], distance, duration, cadence);
    }

    //if workout cycling, create running object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration)
      ) {
        return alert('Inputs have to be positive numbers');
      }
      workout = new cycling([lat, lng], distance, duration, elevation);
    }

    //add new object to workout array
    this.#workouts.push(workout);
    // console.log(workout);

    //render workout on map as marker
    this.renderWorkoutMarker(workout);

    //render workout list
    this.renderWorkout(workout);

    //hide form or clear input fields
    this.hideForm();
  }
  renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? `🏃‍♂️` : `🚴‍♂️`}${workout.description}`
      )
      .openPopup();
  }
  renderWorkout(workout) {
    let html;
    html = `<li class="workout workout--${workout.type} data-id=${workout.id}>
    <h2 class="workout__title">${workout.description}</h2>
    <div class="workout__details">
      <span class="workout__icon">${
        workout.type === 'running' ? `🏃‍♂️` : `🚴‍♂️`
      }</span>
      <span class="workout__value">${workout.distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${workout.duration}</span>
      <span class="workout__unit">min</span>
    </div>`;

    if (workout.type === 'running')
      html += `<div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.pace.toFixed(1)}</span>
      <span class="workout__unit">min/km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">💫</span>
      <span class="workout__value">${workout.cadence}</span>
      <span class="workout__unit">spm</span>
    </div>
  </li>`;

    if (workout.type === 'cycling')
      html += `<div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.speed.toFixed(1)}</span>
      <span class="workout__unit">km/h</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⛰</span>
      <span class="workout__value">${workout.elevationGain}</span>
      <span class="workout__unit">m</span>
    </div>
  </li>`;
    form.insertAdjacentHTML('afterend', html);
  }
  moveToPopup(e) {
    const workOutEl = e.target.closest('.workout');
    console.log(workOutEl);
    // if (!workOutEl) return;
    // const workout = this.#workouts.find(
    //   (work) => work.id === workOutEl.dataset.id
    // );
    // console.log(workout);
    // this.#map.setView(workout.coords, 5, {
    //   animate: true,
    //   pan: {
    //     duration: 1,
    //   },
    // });
  }
}

const app = new App();

//before refactoring

// if (navigator.geolocation)
//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       const { latitude } = position.coords;
//       const { longitude } = position.coords;

//       console.log(`https://www.google.com/maps/@${latitude},${longitude} `);
//       const coords = [latitude, longitude];
//       map = L.map('map').setView(coords, 10);

//       L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution:
//           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//       }).addTo(map);

//       map.on('click', function (mapE) {
//         mapEvent = mapE;
//         form.classList.remove('hidden');
//         inputDistance.focus();
//         // console.log(mapEvent);
//         // const { lat, lng } = mapEvent.latlng;

//         // L.marker([lat, lng])
//         //   .addTo(map)
//         //   .bindPopup(
//         //     L.popup({
//         //       maxWidth: 250,
//         //       minWidth: 100,
//         //       autoClose: false,
//         //       closeOnClick: false,
//         //       className: 'running-popup',
//         //     })
//         //   )
//         //   .setPopupContent('Workout')
//         //   .openPopup();
//       });
//     },
//     function () {
//       alert('could not get your positions');
//     }
//   );
