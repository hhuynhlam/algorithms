var readline = require('readline');
var rl;

var firstLine = true;
var sequence;

function _parseInt(n) {
  return parseInt.call(this, n, 10);
}

function hasMajority(dictionary, length) {
  for (var key in dictionary) {
    if (dictionary[key] > Math.floor(length / 2)) {
      return 1;
    }
  }

  return 0;
}

function getMajorityElement(input) {
  var hash = {};

  input.forEach(function (element) {
    if (!hash[element]) {
      hash[element] = 1;
    } else {
      hash[element] += 1;
    }
  });

  return hasMajority(hash, input.length);
}

function onClose() {
  console.log(getMajorityElement(sequence));
}

function onLine(line) {
  if (line !== '\n') {
    line = line.split(' ').map(_parseInt);

    if (firstLine) {
      firstLine = false;
    } else {
      sequence = line;
    }
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

module.exports = getMajorityElement;
