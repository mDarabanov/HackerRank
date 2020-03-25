const car = {
  brand: 'Audi',
  getCarDescription(coast, year, color) {
    console.log(
      `This car is a ${this.brand}. The price is ${coast}. The year is ${year}. And it is color is ${color}\n`
    );
  }
};

const car2 = {
  brand: 'BMW'
};

car2.description = car.getCarDescription;

// car.getCarDescription(100, 2000, 'red');
car.getCarDescription.call(car2, 200, 1999, 'yellow');
car.getCarDescription.apply(car2, [100, 2020, 'green']);
// car2.description(200, 1900, 'green');
console.log(car);
console.log(car2);
