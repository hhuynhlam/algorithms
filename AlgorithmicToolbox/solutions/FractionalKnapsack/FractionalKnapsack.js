var readline = require('readline');
var rl;

var firstLine = true;

var items = [];
var itemLimit;
var weightCapacity;

function pickHighestValueItem(list) {
  var currentIndex;
  var currentItem;

  list.forEach(function (item, index) {
    if (!currentItem || (item.value / item.weight) > (currentItem.value / currentItem.weight)) {
      currentIndex = index;
      currentItem = item;
    }
  });

  list.splice(currentIndex, 1);

  return currentItem;
}

function getFractionalKnapsack(list, limit, capacity) {
  var currentItems = [];
  var currentWeight = 0;
  var pickedItem;
  var ratio;
  var sum;

  while (currentItems.length < limit && currentWeight < capacity) {
    pickedItem = pickHighestValueItem(list);

    if (currentWeight + pickedItem.weight > capacity) {
      ratio = (capacity - currentWeight) / pickedItem.weight;

      currentItems.push({ value: pickedItem.value * ratio, weight: pickedItem.weight * ratio });
      currentWeight += pickedItem.weight * ratio;
    } else {
      currentItems.push(pickedItem);
      currentWeight += pickedItem.weight;
    }
  }

  sum = currentItems.reduce(function (total, item) {
    return total + item.value;
  }, 0);

  return sum.toFixed(4);
}

function onClose() {
  console.log(getFractionalKnapsack(items, itemLimit, weightCapacity));
}

function onLine(line) {
  if (line !== '\n') {
    line = line.split(' ');

    if (firstLine) {
      firstLine = false;
      itemLimit = parseInt(line[0], 10);
      weightCapacity = parseInt(line[1], 10);
    } else {
      items.push({ value: parseInt(line[0], 10), weight: parseInt(line[1], 10) });
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

module.exports = getFractionalKnapsack;
