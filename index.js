#!/usr/bin/env node

const exect = require('child_process').exec;
const path = require('path');
const fs = require('fs');

const mainPath = path.dirname(fs.realpathSync(__filename));
const soundPath = path.join(mainPath, './faustao-errou');

const faustaoErrou = function (){
    const linuxcmd = 'paplay '+soundPath+'.ogg';
    const windowscmd = path.join(mainPath, './forWindows.vbs')+' '+soundPath+'.mp3';

    const platform = process.platform;

    if(platform === 'linux'){
        return exec(linuxcmd);
    }
    else if(platform === 'win32'){
        return exec(windowscmd);
    }

    function exec(cmd){
        return exect(cmd, function (error, stdout, stderr) {
           if(error)
               console.error(error);
        });
    }
}

module.exports = faustaoErrou;

if (!module.parent) {
    faustaoErrou();
}
