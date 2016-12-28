var getFractionalKnapsack = require('./FractionalKnapsack');

(function main() {
  var limit = 1;
  var capacity = 10;

  var list = [
    { value: 500, weight: 30 }
  ];

  console.log(getFractionalKnapsack(list, limit, capacity));

  process.exit();
}());
