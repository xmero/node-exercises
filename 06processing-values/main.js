var fs = require('fs')
var concat = require('concat-stream')

var file = fs.createReadStream  ('text.txt', 'utf8' )


file.on('data', function(data) {
  
  console.log(data.split(' '))
  
});
