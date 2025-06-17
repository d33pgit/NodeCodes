var http=require('http')
http.createServer(function(req,res){
    res.write('Hello Everyone')
    res.end()

}).listen(5052)