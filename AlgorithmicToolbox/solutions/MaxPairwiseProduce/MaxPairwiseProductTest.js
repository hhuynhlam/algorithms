var getMaxPairwiseProduct = require('./MaxPairwiseProduct');
var getMaxPairwiseProductSlow = require('./MaxPairwiseProductSlow');

(function main() {
  var length = 99;
  var list = [];
  var i;

  for (i = 0; i < length; i += 1) {
    list.push(Math.floor((Math.random() * (1000)) + 1));
  }

  list = list.join(' ');

  console.log(list);
  console.log(getMaxPairwiseProduct(length, list));
  console.log(getMaxPairwiseProductSlow(length, list));

  process.exit();
}());
