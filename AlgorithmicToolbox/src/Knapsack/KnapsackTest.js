var getKnapsack = require('./Knapsack');

(function main() {
  var capacity = 20;
  var list = [5, 7, 12, 18];

  console.log(getKnapsack(list, capacity));

  process.exit();
}());
