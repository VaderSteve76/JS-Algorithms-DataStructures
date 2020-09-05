// the method to create new objects must be called constructor
// the class keyword creates a constant, so you can not redifine
// it. Watch out for the syntax as well.

// Class syntax
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  // instance methods
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if(this.tardies >= 3) {
      return "YOU ARE EXPELLED!!!!";
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAvg() {
    let sum = this.scores.reduce(function(a,b) {return a+b});
    return sum/this.scores.length;
  }

}

// creating objects from classes, using the "new" keyword
let firstStudent = new Student("Joe", "Blow", 4);
let secondStudent = new Student("John", "Smith", 2);

// calling instance method
firstStudent.fullName(); // "Joe Blow"
firstStudent.markLate();
firstStudent.addScore(94);
firstStudent.calculateAvg();