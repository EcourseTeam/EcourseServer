var http = require('http');
var url = require("url");
var info = "通过HTTPGet方式成功加入队列";
http.createServer(function (req, res) {
    var params = url.parse(req.url, true).query;//解释url参数部分name=zzl&email=zzl@sina.com
    res.write(info);
    res.end();
    console.log(req.url);
}).listen(3000, "192.168.0.3");
console.log('Server running at http://192.168.0.3:3000/');