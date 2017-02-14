var fs = require('fs')
var html = require('html')
var http = require('http')

var server = http.createServer()
var PORT = 8080

var data = "<ul><li><%SCRIPT%></li><li>is awesome</li></ul>"

var jsInject = require('./hello.js')

data = data.replace('<%SCRIPT%>', jsInject)



//var data = process.argv[2]


fs.writeFileSync('myHtml.html', prettify(data.toString()))

function prettify(str) {
  return html.prettyPrint(str, {indent_size: 2})
}


fs.readFile('myHtml.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});