'use strict';
class person {
  constructor(year, fullname) {
    this.fullname = fullname;
    this.year = year;
  }
  get calcAge() {
    console.log(2022 - this.year);
  }
  set fullname(name) {
    console.log(name);
    if (name.includes(' ')) this._fullname = name;
    else alert(`${name} is not a full name!`);
  }
  get fullname() {
    return this._fullname;
  }
  static greet() {
    console.log('hey there');
    console.log(this);
  }
}
