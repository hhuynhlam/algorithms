var readline = require('readline');
var rl;

var ADD_ONE = 0;
var MULTIPLY_TWO = 1;
var MULTIPLY_THREE = 2;

var PRIMITIVES = [
  function addOne(n) { return n + 1; },
  function multiplyTwo(n) { return n * 2; },
  function multiplyThree(n) { return n * 3; }
];

function _initializeBag(number) {
  var bag = new Array(number);

  for (var i = 0; i < number; i++) {
    bag[i] = { operations: [], minimum: 0 };
  }

  return bag;
}

function printOperations(operations) {
  var result = [1];
  var ops = operations;

  ops.reduce(function (acc, i) {
    var n = PRIMITIVES[i](acc);

    result.push(n);

    return n;
  }, 1);

  return result.join(', ');
}

function calculatePrimitive(number) {
  var bag = _initializeBag(number + 1);

  if (number === 1) {
    return { operations: [], minimum: 0 };
  }

  for (var j = 1; j <= number; j++) {
    if (j === 0) {
      continue;
    } else if (j === 1) {
      bag[j].operations.push(ADD_ONE);
      bag[j].minimum = 1;
    } else if (j === 2) {
      bag[j].operations.push(MULTIPLY_TWO);
      bag[j].minimum = 1;
    } else if (j === 3) {
      bag[j].operations.push(MULTIPLY_THREE);
      bag[j].minimum = 1;
    } else {
      var currentMinimum = bag[j - 1].minimum;
      var currentOp = ADD_ONE;
      var currentOps = bag[j - 1].operations.slice(0);

      if (j % 3 === 0 && bag[j / 3].minimum < currentMinimum) {
        currentMinimum = bag[j / 3].minimum;
        currentOp = MULTIPLY_THREE;
        currentOps = bag[j / 3].operations.slice(0);
      }

      if (j % 2 === 0 && bag[j / 2].minimum < currentMinimum) {
        currentMinimum = bag[j / 2].minimum;
        currentOp = MULTIPLY_TWO;
        currentOps = bag[j / 2].operations.slice(0);
      }

      bag[j].minimum = currentMinimum + 1;
      bag[j].operations = currentOps;
      bag[j].operations.push(currentOp);
    }
  }

  return bag[number];
}

function onLine(line) {
  var result = calculatePrimitive(parseInt(line, 10));

  console.log(result.minimum);
  console.log(printOperations(result.operations));
}

(function main() {
  process.stdin.setEncoding('utf8');

  rl = readline.createInterface({
    input: process.stdin,
    terminal: false
  });

  rl.on('line', onLine);
}());

module.exports = {
  calculatePrimitive: calculatePrimitive,
  printOperations: printOperations
};
