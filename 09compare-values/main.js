var fs = require('fs')
var keyword = new RegExp(process.argv[2], 'g')

fs.readFile('text.txt', 'utf8', searchWord)

searchWord = function searchWord(error, data) {
    console.log(data.match(keyword).length)
}
