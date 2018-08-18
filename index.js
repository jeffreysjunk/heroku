const https = require('https');
const zlib  = require('zlib');

https.createServer(function(request, response) {
  if (request.headers.method == 'GET') {
    new https.request({
      host: 'www.pornhub.com',
      headers: {
        'Host': 'www.pornhub.com',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        'Cookie': 'platform=pc; bs=1vxp25ffmsym8zn57vw1ompooer5i5kv; ss=222298962466567665; ua=4b99469f75dff92a3e9ca3ceb91d211c; RNLBSERVERID=ded6884; FPSRN=2',
        'DNT': '1',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache'
      }
    }, function(_response) {
      let body = [];
    
      _response.on('data', function(data) {
        body.push(Buffer(data));
      });
      
      _response.on('end', function() {
        body = Buffer.concat(body);
        if (_response.headers['content-encoding'] == 'gzip') {
          response.writeHead(200, {'Content-Type': 'text/html'});
          response.write(zlib.gunzipSync(body).toString());
          response.end();
        }
      });
    }).end();
  }
}).listen(porcess.env.PORT);