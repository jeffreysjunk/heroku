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
    console.log('Writing Response')
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<html><body>This is a working http response</body></html>');
    response.end();
  });
}).listen(process.env.PORT);