const http = require('http');

const server = new http.Server(function(request, response) {
  response.writeHead(200, {"Content-Type":"text/html"});
  http.get('http://www.pornhub.com/', function(res) {
    res.setEncoding('utf8');
    res.on('data', function(data) {
      response.write(data);
    });

    res.on('end', function() {
      response.end();
    })
  });
});

server.listen(process.env.PORT);