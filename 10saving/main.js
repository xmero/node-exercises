var fs = require('fs')
var numberSelector = new RegExp([0 - 9], 'g')

fs.readFile('numbers.txt', 'utf8', searchNumbers)

function searchNumbers(error, data) {
    var numArray = data.split(' ')
    var total = 0
    numArray.forEach(addToTotal)
    console.log(total)

    function addToTotal(number) {
        total += parseInt(number)
    }
}
