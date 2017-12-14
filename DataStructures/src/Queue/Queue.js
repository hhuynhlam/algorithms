function Queue() {
  this.bucket = [];

  this.dequeue = function dequeue() {
    if (this.size === 0) {
      return 'Queue is empty.';
    }

    return this.bucket.splice(0, 1)[0];
  };

  this.enqueue = function enqueue(item) {
    return this.bucket.push(item);
  };

  this.front = function front() {
    return this.bucket[0];
  };

  this.size = function size() {
    return this.bucket.length;
  };
}

module.exports = Queue;
