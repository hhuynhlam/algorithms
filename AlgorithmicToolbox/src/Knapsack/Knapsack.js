var readline = require('readline');
var rl;

var firstLine = true;

var items = [];
var bagCapacity;

function _parseInt(n) {
  return parseInt.call(this, n, 10);
}

function _initializeBag(row, col) {
  var bag = [];

  for (var i = 0; i < row; i++) {
    bag.push(new Array(col));

    for (var j = 0; j < col; j++) {
      bag[i][j] = 0;
    }
  }

  return bag;
}

function getKnapsack(list, capacity) {
  var bag = _initializeBag(list.length, capacity + 1);

  for (var col = 1; col <= capacity; col++) {
    for (var row = 0; row < list.length; row++) {
      var currentCapacity = col;
      var currentItem = list[row];

      if (row === 0) {
        if (currentItem > currentCapacity) {
          bag[row][col] = 0;
        } else {
          bag[row][col] = currentItem;
        }
      } else if (currentItem > currentCapacity) {
        bag[row][col] = bag[row - 1][col];
      } else {
        bag[row][col] = Math.max(
          currentItem + bag[row - 1][col - currentItem],
          bag[row - 1][col]
        );
      }
    }
  }

  return bag[list.length - 1][capacity];
}

function onClose() {
  console.log(getKnapsack(items, bagCapacity));
}

function onLine(line) {
  if (line !== '\n') {
    line = line.split(' ');

    if (firstLine) {
      firstLine = false;
      bagCapacity = parseInt(line[0], 10);
    } else {
      items = line.map(_parseInt);
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

module.exports = getKnapsack;
