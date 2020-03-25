let house = {
  price: 100000,
  squareFeet: 2000,
  owner: 'Mario',
  getPrice: function() {
    return this.price / this.squareFeet;
  }
};

console.log(house.price);
console.log(house.getPrice());

// scope and self

const myCar = {
  color: 'Blue',
  logColor: function() {
    let self = this;

    console.log('in logColor - this.color refer to ' + this.color);
    console.log('in logColor - self.color refers to ' + self.color);
    (function() {
      console.log('in IIFE - this.color refers to ' + this.color);
      console.log('in IIFE - self.color refers to ' + self.color);
    })();
  }
};
myCar.logColor();
