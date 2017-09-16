var http = require('http')
var bl = require('bl')
var webURL = process.argv[2]

http.get(webURL, function(response) {
  response.setEncoding('utf8');
  response.pipe(bl(function (err, data){
    console.log(data.toString().length);
    console.log(data.toString());
  }));
});




// var mymodule = require('./mymodule.js')

// mymodule(process.argv[2], process.argv[3], printResults)

// function printResults(err, listItem) {
//   if (err)
//     return console.log(err)
//   console.log(listItem)
// }
