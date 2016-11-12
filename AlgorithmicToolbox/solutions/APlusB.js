var readline = require('readline');
var rl;

function readLine(line) {
  var a;
  var b;

  if (line !== '\n') {
    a = parseInt(line.toString().split(' ')[0], 10);
    b = parseInt(line.toString().split(' ')[1], 10);

    console.log(a + b);

    process.exit();
  }
}

process.stdin.setEncoding('utf8');

rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);
