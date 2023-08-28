var PrimitiveCalculator = require('./PrimitiveCalculator');

(function main() {
  var n = 1;

  var result = PrimitiveCalculator.calculatePrimitive(n);
  console.log(result.minimum);
  console.log(PrimitiveCalculator.printOperations(result.operations));

  process.exit();
}());
