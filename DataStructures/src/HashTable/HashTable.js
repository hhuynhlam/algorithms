function HashTable(size) {
  this.buckets = [];

  for (let index = 0; index < size; index += 1) {
    this.buckets.push([]);
  }
}

HashTable.prototype.get = function get(key) {
  const hashedKey = this.hash(key);

  const bucket = this.buckets[hashedKey];

  if (bucket.length === 1) {
    return bucket[0].value;
  }

  const result = bucket.find(slot => (slot.key === key));

  return (result) ? result.value : null;
};

HashTable.prototype.set = function set(key, value) {
  this.buckets[this.hash(key)].push({ key, value });

  return this.buckets;
};

HashTable.prototype.hash = function hash(key) {
  return (key % 5);
};

module.exports = HashTable;
