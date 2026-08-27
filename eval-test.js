const http = require("http");
 
http.createServer((req, res) => {
    const action = req.url.substring(1);
    const allowedCommands = {
        health: { file: "echo", args: ["ok"] },
        date: { file: "date", args: [] }
    };

    const selected = allowedCommands[action];
    if (!selected) {
        res.statusCode = 400;
        res.end("invalid command");
        return;
    }

    require("child_process").execFile(selected.file, selected.args, (error) => {
        if (error) {
            res.statusCode = 500;
            res.end("command failed");
            return;
        }

        res.end("done");
    });
}).listen(3000);
