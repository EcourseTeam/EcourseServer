var http = require('http');
//var url = require('url');
var dao = require('./dao');
var info = "通过HTTPGet方式成功加入队列";
http.createServer(function (req, res) {
	var myDao = new dao();
    /*var params = url.parse(req.url, true).query;//解释url参数部分name=zzl&email=zzl@sina.com
    console.log('----------------------------------------------------------');
    console.log(params);
    console.log('----------------------------------------------------------');
    //console.log(req);
    console.log('----------------------------------------------------------');
    res.write(info);
    res.end();
    console.log(req.url);*/
    req.setEncoding('utf-8');
    var postData = "";
    req.addListener("data", function(postDataChunk) {
    	postData += postDataChunk;
    });
    req.addListener("end", function() {
    	//console.log("finished!");
    	console.log(postData);
    	res.writeHead(500, {
            "Content-Type": "text/plain;charset=utf-8"
        });
        myDao.doSQL(postData, function(ret) {
        	myDao = new dao();
        	if (!ret) {
        		res.write("error");
	        	res.end();
	        	console.log("SQL出错！");
	        } else {
	        	res.write(ret);
	        	res.end();
	        	console.log("ret: " + ret);
	        }
	        myDao.closeDB();
        });
    });
}).listen(3000, "192.168.0.3");
console.log('Server running at http://192.168.0.3:3000/');
