// the method to create new objects must be called constructor
// the class keyword creates a constant, so you can not redifine
// it. Watch out for the syntax as well.

// Class syntax
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// creating objects from classes, using the "new" keyword
let firstStudent = new Student("Joe", "Blow");
let secondStudent = new Student("John", "Smith");