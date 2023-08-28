var readline = require('readline');
var rl;
var input = [];

function getMaxPairwiseProduct(length, list) {
  var max = [0, 0];

  list
    .split(' ')
    .map(function (element) {
      return parseInt(element, 10);
    })
    .forEach(function (element) {
      if (element >= max[0]) {
        max[1] = max[0];
        max[0] = element;
      } else if (element >= max[1]) {
        max[1] = element;
      }
    });

  return (max[0] * max[1]);
}

function onClose() {
  console.log(getMaxPairwiseProduct(input[0], input[1]));
}

function onLine(line) {
  if (line !== '\n') {
    input.push(line);
  }
}

(function main() {
  process.stdin.setEncoding('utf8');

  rl = readline.createInterface({
    input: process.stdin,
    terminal: false
  });

  rl.on('close', onClose);
  rl.on('line', onLine);
}());

module.exports = getMaxPairwiseProduct;
