function AvlTree(value, parent, position) {
  this.parent = parent;
  this.value = value;
  this.left = null;
  this.right = null;
  this.position = position;
}

AvlTree.prototype.find = function find(value) {
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

AvlTree.prototype.insert = function insert(value, position) {
  if (value <= this.value) {
    if (!this.left) {
      this.left = new AvlTree(value, this, 'left');
    } else {
      this.left.insert(value, position);
    }
  } else if (!this.right) {
    this.right = new AvlTree(value, this, 'right');
  } else {
    this.right.insert(value, position);
  }
};

AvlTree.prototype.preOrder = function preOrder() {
  console.log(this.value);

  if (this.left) {
    this.left.preOrder();
  }

  if (this.right) {
    this.right.preOrder();
  }
};

AvlTree.prototype.inOrder = function inOrder() {
  if (this.left) {
    this.left.inOrder();
  }

  console.log(this.value);

  if (this.right) {
    this.right.inOrder();
  }
};

AvlTree.prototype.postOrder = function postOrder() {
  if (this.left) {
    this.left.postOrder();
  }

  if (this.right) {
    this.right.postOrder();
  }

  console.log(this.value);
};

AvlTree.prototype.singleRotation = function singleRotation(node, direction) {
  const grandparent = node.parent.parent;
  const { parent } = node;

  parent[node.position] = null;

  if (grandparent) {
    grandparent[parent.position] = node;
    node.parent = grandparent;
    node.position = parent.position;
  } else {
    node.parent = null;
    node.position = null;
  }

  node[direction] = parent;
  parent.position = direction;
  parent.parent = node;
};

AvlTree.prototype.doubleRotation = function doubleRotation(node, directions) {
  this.singleRotation(node, directions[0]);
  this.singleRotation(node, directions[1]);
};

AvlTree.prototype.rebalance = function rebalanace(node) {

};

AvlTree.prototype.isLeftLeft = function isLeftLeft(node) {
  return (node.parent && node.position === 'left' && node.parent.position === 'left');
};

AvlTree.prototype.isRightRight = function isLeftLeft(node) {
  return (node.parent && node.position === 'right' && node.parent.position === 'right');
};

AvlTree.prototype.isLeftRight = function isLeftRight(node) {
  return (node.parent && node.position === 'left' && node.parent.position === 'right');
};

AvlTree.prototype.isRightLeft = function isRightLeft(node) {
  return (node.parent && node.position === 'right' && node.parent.position === 'left');
};

module.exports = AvlTree;

t = new AvlTree(10);
t.insert(5);
t.insert(6);

debugger;
