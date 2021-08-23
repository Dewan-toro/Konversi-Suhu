class Convert {
  constructor() {}
  fromCelcius(to, num1) {
    if (to == "C") {
      return num1;
    }
    if (to == "R") {
      return (4 / 5) * num1;
    }
    if (to == "F") {
      return (9 / 5) * num1 + 32;
    }
  }
  fromReamur(to, num1) {
    if (to == "R") {
      return num1;
    }
    if (to == "C") {
      return (5 / 4) * num1;
    }
    if (to == "F") {
      return (9 / 4) * num1 + 32;
    }
  }
  fromFarenheit(to, num1) {
    if (to == "F") {
      return num1;
    }
    if (to == "C") {
      return (5 / 9) * (num1 - 32);
    }
    if (to == "R") {
      return (4 / 9) * (num1 - 32);
    }
  }
}

module.exports = Convert;
