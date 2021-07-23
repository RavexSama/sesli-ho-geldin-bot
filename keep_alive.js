var http = require('http');

http.createServer(function (req, res){
  res.write("fadnessgodden");
  res.end();
}).listen(8080);