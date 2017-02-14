var request = require('request');
var fs = require('fs')


fs.readFile(process.argv[2], 'utf-8', function(error, link) {
    if (error) throw error
    request(link, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    })
})
