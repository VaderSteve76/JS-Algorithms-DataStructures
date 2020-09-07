// piece of data - val
// reference to next node - next

class node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
};

// good way
class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
};

var list = new SinglyLinkedList();
list.push("Hello");
list.push("Goodbye");


// bad way
// var first = new node("Hi");
// first.next = new node("There");
// first.next.next = new node("How");
// first.next.next.next = new node("are");
// first.next.next.next.next = new node("you?");