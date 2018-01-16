const fs = require('fs');

exports.readDir = function(path='/share') {
    let currentDir = fs.readdirSync(path);
    return currentDir[0]?currentDir:null;
}

exports.isDir = function(file) {
    let stat = fs.statSync(file);
    return stat.isDirectory();
}

exports.fomrmatDir = function(file,path) {
    let allFile = [];
	file&&file.forEach((v,i)=>{
		let oneFile = {};
		oneFile.name = v;
		oneFile.path = `/${path}`;
		oneFile.type = 1;
		allFile.push(oneFile);
    })
    return allFile;
}

exports.readFile = function(path) {
   return fs.readFileSync(path).toString()
}