var readline = require('readline');
var rl;

function getFibonacciNumber(n) {
  var i = 1;
  var results = [0, 1];

  while (i <= n) {
    results.push(results[i] + results[i - 1]);

    i += 1;
  }

  return results[n];
}

function onLine(line) {
  if (line !== '\n') {
    console.log(getFibonacciNumber(parseInt(line, 10)));

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
