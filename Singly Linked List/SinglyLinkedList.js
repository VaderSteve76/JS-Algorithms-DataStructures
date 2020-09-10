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

  push(val) {
    var newNode = new node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if(!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if(!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0) {
      this.tail = null;
    }
    return currentHead;
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