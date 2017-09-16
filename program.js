var http = require('http')
var bl = require('bl')
var webURL = process.argv[2]

function getWebInfo(callback) {
  for (i = 2; i < process.argv.length; i++) {
    http.get(process.argv[i], function(response) {
      response.setEncoding('utf8');
      response.pipe(bl(function (err, data){

        callback(null, data.toString());
      }));
    });  
  };
};

function logMyInfo(err, data) {
  if (err)
    {console.error(err)}
  console.log(data)
}

getWebInfo(logMyInfo)



// var mymodule = require('./mymodule.js')

// mymodule(process.argv[2], process.argv[3], printResults)

// function printResults(err, listItem) {
//   if (err)
//     return console.log(err)
//   console.log(listItem)
// }
