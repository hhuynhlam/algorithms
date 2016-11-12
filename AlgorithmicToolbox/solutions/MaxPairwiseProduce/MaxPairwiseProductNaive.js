var readline = require('readline');
var rl;
var input = [];

function getMaxPairwiseProduct(length, list) {
  var i;
  var j;
  var result = 0;

  list = list.split(' ');

  for (i = 0; i < length; i += 1) {
    for (j = 0; j < length; j += 1) {
      if (list[i] * list[j] >= result && i !== j) {
        result = list[i] * list[j];
      }
    }
  }

  return (result);
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
