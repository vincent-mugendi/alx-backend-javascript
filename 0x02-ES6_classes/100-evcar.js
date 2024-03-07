// 100-evcar.js
import Car from './10-car.js';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Override the cloneCar method to return an instance of Car
  cloneCar() {
    const clonedCar = super.cloneCar();
    Object.setPrototypeOf(clonedCar, Car.prototype);
    return clonedCar;
  }
}

export default EVCar;
