class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}


// binary tree setup
var tree = new BinarySearchTree();
tree.root = new node(10);
tree.root.right = new node(15);
tree.root.left = new node(7);
tree.root.left.right = new node(9);