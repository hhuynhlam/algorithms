var readline = require('readline');
var rl;

function getFibonacciNumber(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  return getFibonacciNumber(n - 1) + getFibonacciNumber(n - 2);
}

function onLine(line) {
  if (line !== '\n') {
    console.log(getFibonacciNumber(line));

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
