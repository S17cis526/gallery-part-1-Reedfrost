/**
 * server.js
 * This file defines the server for a
 * simple photo gallery web app.
 */
 
"use strict;"

var http = require('http');
var port = 2000;

var server = http.createServer(function (req, res) {
  res.end("OK");
});

server.listen(port, function(){
  console.log("Server is listening on port ", port);
});
