var getFibonacciNumber = require('./FibonacciHuge');
var getFibonacciNumberNative = require('./FibonacciHugeNative');

(function main() {
  var n = 55;

  console.log(n);
  console.log(getFibonacciNumber(n));
  console.log(getFibonacciNumberNative(n));

  process.exit();
}());
