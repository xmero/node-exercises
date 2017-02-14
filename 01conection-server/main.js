var http = require('http')

var server = http.createServer()
var PORT = process.argv[2]

server.on("request", function(req, res) {
    res.end("Success, i'm listening from port:" + PORT)
})

server.listen(PORT)
