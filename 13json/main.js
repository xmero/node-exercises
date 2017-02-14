
var fs = require('fs')


var obj

function getJson() {
    fs.readFile('user.json', 'utf8', function(err, data) {
        if (err) throw err
        obj = JSON.parse(data)
        console.log(obj)
    })
}

getJson()

console.log('this is obj post getJson ==>' + obj)
