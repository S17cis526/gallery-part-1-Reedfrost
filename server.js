"use strict;"

var http = require('http');
var fs = require('fs');
var port = 2000;

function serveImage(fileName, req, res) {
	var data = fs.readFile('images/' + fileName, function(err, data){
		if(err) {
			console.error(err);
			res.statusCode = 500;
			res.statusMessage = "Server error";
			res.end();
			return;
		}
		res.setHeader('Content-Type','image/jpeg');
		res.end(data);
	});
}

var fern = fs.readFileSync('images/fern.jpg');
var chess = fs.readFileSync('images/chess.jpg');
var ace = fs.readFileSync('images/ace.jpg');
var bubble = fs.readFileSync('images/bubble.jpg');
var mobile = fs.readFileSync('images/mobile.jpg');

var server = http.createServer(function (req, res) {
  switch(req.url) {
	case '/chess.jpg':
	case '/chess.jpeg':
	case '/chess':
		res.end(chess);
		break;
	case '/fern':
	case '/fern.jpg':
	case '/fern.jpeg':
		res.end(fern);
		break;
	case '/ace':
	case '/ace.jpg':
	case '/ace.jpeg':
		res.end(ace);
		break;
	case '/bubble':
	case '/bubble.jpg':
	case '/bubble.jpeg':
		res.end(bubble);
		break;
	case '/mobile':
	case '/mobile.jpg':
	case '/mobile.jpeg':
		res.end(mobile);
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
