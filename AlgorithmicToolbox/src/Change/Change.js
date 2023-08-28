var readline = require('readline');
var rl;

var DENOMINATIONS = [10, 5, 1];

function getChange(amount) {
  var coins = [];

  DENOMINATIONS.forEach(function (denomination) {
    while ((amount - denomination) >= 0) {
      coins.push(denomination);

      amount -= denomination;
    }
  });

  return coins.reduce(function (sum) {
    return sum + 1;
  }, 0);
}

function onLine(line) {
  if (line !== '\n') {
    console.log(getChange(line));

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

module.exports = getChange;
