// var getGCD = require('./GCD');
var getGCDNative = require('./GCDNaive');

(function main() {
  var n = '28851538 1183019';

  console.log(n);
  // console.log(getGCD(n));
  console.log(getGCDNative(n));

  process.exit();
}());
