var fs = require('fs')


var data = require("./user.json")
    console.log( data)
 obj = JSON.parse(fs.readFileSync('./user.json', 'utf8'))

       // console.log('the username is ==>'+obj[1].username)
    console.log(obj)

// function getJson() {
//     fs.readFile('user.json', 'utf8', function(err, data) {
//         if (err) throw err
//         obj = JSON.parse(data)
//         console.log('the username is ==>'+obj.username)
//         console.log(obj)
//     })
// }

// getJson()


