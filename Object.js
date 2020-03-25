//obj literal

const person = {
  name: 'Mario',
  age: 30,
  hobbies: ['Skiing', 'Football'],
  greet() {
    console.log(`Hello my name is ${this.name}`);
  }
};

person.greet();

//with keyword new

const anotherPerson = new Object();

anotherPerson.name = 'Ivan';
anotherPerson.age = '30';
anotherPerson.classes = ['Math', 'English'];
anotherPerson.getClasses = function() {
  return this.classes;
};

console.log(anotherPerson.getClasses());

//OOP

class Person {
  name = 'Miro';

  age = 30;

  hobbies = ['Eating', 'Fucking'];

  printHobbies() {
    console.log(this.hobbies);
  }
}

const p = new Person();
console.log(p.age);
p.printHobbies();

//Constructor function

function Cars(color, brand, year) {
  this.color = color;
  this.brand = brand;
  this.year = year;
}

Cars.prototype.getTheColor = function() {
  console.log(this.color);
};

const marioCar = new Cars('red', 'lada', '1999');
console.log(marioCar.getTheColor());
