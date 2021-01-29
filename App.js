var {execSync} = require('child_process'),
os = require('os');
module.exports = () => {
if(process.platform=='win32') return process.env.COMPUTERNAME
else if(process.platform=='darwin') return execSync('scutil --get ComputerName').toString()
else return os.hostname()
}