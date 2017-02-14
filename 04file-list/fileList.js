var fs = require('fs')

var listFiles = fs.readdirSync(__dirname)

listFiles.forEach(function(item){
var stats = fs.lstatSync(item)
if (stats.isDirectory()){
console.log( 'DIR==>' + item)
}else {
  console.log( 'FILE==>' + item)
}
})

