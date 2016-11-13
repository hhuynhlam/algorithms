var readline = require('readline');
var rl;

function getGCD(a, b) {
  var gcd = 1;
  var i = 2;

  while (i <= a && i <= b) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }

    i += 1;
  }

  return gcd;
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
