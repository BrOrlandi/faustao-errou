
const exect = require('child_process').exec;

const faustaoErrou = function (){
    const linuxcmd = 'paplay faustao-errou.ogg';
    const windowscmd = 'forWindows.vbs';

    const platform = process.platform;

    if(platform === 'linux'){
        exec(linuxcmd);
    }
    else if(platform === 'win32'){
        exec(windowscmd);
    }

    function exec(cmd){
        exect(cmd, function (error, stdout, stderr) {
           console.log(stdout);
        });
    }
}

module.exports = faustaoErrou;

if (!module.parent) {
    faustaoErrou();
}
