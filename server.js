var http = require('http')

var server = http.creatServer(function (req,res)
{
	res.writeHead(200,{"Content-Type": "text/plain"})
	res.end("Hello World\n);
});

server.listen(process.env.PORT || 8001);