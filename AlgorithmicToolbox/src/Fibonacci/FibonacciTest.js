var getFibonacciNumber = require('./Fibonacci');
var getFibonacciNumberNative = require('./FibonacciNative');

(function main() {
  var n = 55;

  console.log(n);
  console.log(getFibonacciNumber(n));
  console.log(getFibonacciNumberNative(n));

  process.exit();
}());
