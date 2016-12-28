var readline = require('readline');
var rl;

var firstLine = true;
var inputList;
var searchFor;

function _parseInt(n) {
  return parseInt.call(this, n, 10);
}

function search(list, item) {
  var max = list.length - 1;
  var min = 0;
  var index;

  while (min <= max) {
    index = Math.floor((max + min) / 2);

    if (list[index] === item) {
      return index;
    } else if (item < list[index]) {
      max = index - 1;
    } else {
      min = index + 1;
    }
  }

  return -1;
}

function getBinarySearch(input, searchList) {
  var result = [];

  searchList.forEach(function (item) {
    result.push(search(input, item));
  });

  return result.join(' ');
}

function onClose() {
  console.log(getBinarySearch(inputList, searchFor));
}

function onLine(line) {
  if (line !== '\n') {
    line = line.split(' ').map(_parseInt);

    if (firstLine) {
      inputList = line.slice(1);

      firstLine = false;
    } else {
      searchFor = line.slice(1);
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

module.exports = getBinarySearch;
