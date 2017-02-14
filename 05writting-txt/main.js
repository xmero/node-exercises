var fs = require('fs')

fs.writeFile(process.argv[2], process.argv[3],'utf8',function(){
  console.log("The file was saved!")
   console.log(process.argv[3])
})