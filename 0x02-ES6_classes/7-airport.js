// 7-airport.js

class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Override default toString method
  toString() {
    return `[${this._code}]`;
  }
}

export default Airport;
