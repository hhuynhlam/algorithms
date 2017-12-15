function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTree.prototype.find = function find(value) {
  if (value === this.value) {
    return this.value;
  }

  if (value <= this.value && !this.left) {
    return 'NA';
  }

  if (value > this.value && !this.right) {
    return 'NA';
  }

  if (value <= this.value && this.left) {
    return this.left.find(value);
  }

  return this.right.find(value);
};

BinaryTree.prototype.insert = function insert(value) {
  if (value <= this.value) {
    if (!this.left) {
      this.left = new BinaryTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (!this.right) {
    this.right = new BinaryTree(value);
  } else {
    this.right.insert(value);
  }
};

BinaryTree.prototype.preOrder = function preOrder() {
  console.log(this.value);

  if (this.left) {
    this.left.preOrder();
  }

  if (this.right) {
    this.right.preOrder();
  }
};

BinaryTree.prototype.inOrder = function inOrder() {
  if (this.left) {
    this.left.inOrder();
  }

  console.log(this.value);

  if (this.right) {
    this.right.inOrder();
  }
};

BinaryTree.prototype.postOrder = function postOrder() {
  if (this.left) {
    this.left.postOrder();
  }

  if (this.right) {
    this.right.postOrder();
  }

  console.log(this.value);
};

module.exports = BinaryTree;
