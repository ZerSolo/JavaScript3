'use strict';

// class Dog {
//   constructor(name, color, numLegs = 4) {
//     this.name = name;
//     this.color = color;
//     this.numLegs = numLegs;
//   }
// }
// const myDog = new Dog('Tarzan', 'brown');
// console.log(myDog);

class Pet {
  constructor(name, color, numLegs, sound) {
    this.name = name;
    this.color = color;
    this.numLegs = numLegs;
    this.sound = sound;
  }
  saySomething() {
    console.log('Saying: ' + this.sound); //Method
  }
}

class Dog extends Pet {
  constructor(name, color) {
    super(name, color, 4, 'wuf');
  }
}
class Bird extends Pet {
  constructor(name, color) {
    super(name, color, 2, 'chirp')
  }

}
const myDog = new Dog('Tarzan', 'brown');
console.log(myDog);
myDog.saySomething();

const myBird = new Bird('Owl', 'White', 2)
console.log(myBird);
myBird.saySomething();

class Person {
  constructor(lastName, birthYear, color, nationality) {
    this.name = lastName;
    this.birthYear = birthYear;
    this.color = color;
    this.nationality = nationality;
  }

  calcAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }
}

const Person1 = new Person('hook', 1980, 'Black', 'Eritrean');
console.log(Person1);
console.log(Person1.calcAge());

class Athlete extends Person {
  constructor(lastName, birthYear, color, nationality, olympicGames, medals) {
    super(lastName, birthYear, color, nationality)
    this.olympicGames = olympicGames;
    this.medals = medals;
  }
  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}
const JohnAthlete = new Athlete('John', 1990, 'Black', 'Eritrean', 2002, 3);
console.log(JohnAthlete);
console.log(JohnAthlete.calcAge())
console.log(JohnAthlete.wonMedal());