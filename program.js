

var mymodule = require('./mymodule.js')
// var str = buf.toString();
// console.log(str.split('\n').length - 1);
mymodule(process.argv[2], process.argv[3], printResults)

function printResults(err, listItem) {
  if (err)
    return console.log(err)
  console.log(listItem)
}
