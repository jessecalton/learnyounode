module.exports = function coolFunction(filePath, fileExt, callback) {
  const path = require('path');
  var fs = require('fs');
  var array = [];
  fs.readdir(filePath, function doneReading(err, list) {
    if (err)
      return callback(err)
    // successful scenario below
    for (i=0; i < list.length; i++) {
      if (path.extname(list[i]) === ("." + fileExt))
        { callback(err, list[i]) }
    };
  });
};