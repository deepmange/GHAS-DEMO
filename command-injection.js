const { exec } = require("child_process");
function runCommand(command){ exec(command); }
runCommand("dir");
