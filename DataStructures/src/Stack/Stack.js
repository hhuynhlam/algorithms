function Stack() {
  this.bucket = [];

  this.pop = function pop() {
    if (this.bucket.length) {
      return this.bucket.pop();
    }

    return null;
  };

  this.push = function push(item) {
    return this.bucket.push(item);
  };

  this.size = function size() {
    return this.bucket.length;
  };

  this.top = function top() {
    if (this.size()) {
      return this.bucket[this.size() - 1];
    }

    return null;
  };
}

module.exports = Stack;
