const https = require('https');
const http  = require('http');
const zlib  = require('zlib');

http.createServer(function(request, response) {
  console.log ('Request Recieved');
  
  request.setEncoding('utf8');
  request.on('data', function(data) {
    console.log(data);
  });

  request.on('end', function() {
    response.writeHead(102, {'Content-Type': 'text/html'});
    response.write('<!--Pornhub Mirror Made By Jeffrey-->');
    response.end();
  });
}).listen(process.env.PORT);