var getBinarySearch = require('./BinarySearch');

(function main() {
  var input = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  var search = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  console.log(getBinarySearch(input, search));

  process.exit();
}());
