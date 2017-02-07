"use strict;"

var http = require('http');
var fs = require('fs');
var port = 2000;

function serveImage(fileName, req, res) {
	var data = fs.readFile('images/' + fileName, function(err, data){
		if(err) {
			console.error(err);
		}
		res.setHeader('Content-Type','image/jpeg');
		res.end(data);
	});
}

var server = http.createServer(function (req, res) {
  switch(req.url) {
	case '/chess.jpg':
	case '/chess.jpeg':
	case '/chess':
		serveImage('chess.jpg', req, res);
		break;
	case '/fern':
	case '/fern.jpg':
	case '/fern.jpeg':
		serveImage('fern.jpg', req, res);
		break;
	default:
		res.statusCode = 404;
		res.statusMessage = "Resource not found";
		res.end("Couldn't find it");
  }
});


server.listen(port, function(){
  console.log("Server is listening on port ", port);
});
