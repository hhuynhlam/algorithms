var readline = require('readline');
var rl;

function getGCD(a, b) {
  var max = (a > b) ? a : b;
  var min = (a > b) ? b : a;

  if (max === 0) { return min; }
  if (min === 0) { return max; }

  return getGCD(min, max % min);
}

function onLine(line) {
  if (line !== '\n') {
    line = line.split(' ');

    console.log(getGCD(line[0], line[1]));

    process.exit();
  }
}

(function main() {
  process.stdin.setEncoding('utf8');

  rl = readline.createInterface({
    input: process.stdin,
    terminal: false
  });

  rl.on('line', onLine);
}());

module.exports = getGCD;
