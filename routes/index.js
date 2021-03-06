var express = require('express');
var router = express.Router();
// var fs = require('fs');

var pt = '/home/dyxuan${pt}';
var util = require('../util');


/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index');
});

router.get('/read/*',function(req,res,next){
	res.render('index');
})

router.get('/down/*',function(req,res,next){
	let path = req.params[0];
	res.download(`${pt}/${path}`)
})

router.get('/getFile', function (req, res, next) {
	var file = util.readDir(`${pt}`);
	let allFile = [];
	file&&file.forEach((v,i)=>{
		let oneFile = {};
		oneFile.name = v;
		oneFile.path = `${pt}`;
		oneFile.type = util.isDir(`${pt}/${v}`)? 1:2;
		allFile.push(oneFile);
	})
	// res.render('index', { title: 'Express' });
	res.status(200).json({ file: allFile,type:1})
	
});

router.get('/getFile/*', function (req, res, next) {
	let path = req.params[0];
	console.log(`/${path}`);
	if(util.isDir(`${pt}/${path}`)) {
		var file = util.readDir(`${pt}/${path}`);
		console.log(util.fomrmatDir(file,path))
		res.status(200).json({ file: util.fomrmatDir(file,path),type:1})
	} else {
		res.status(200).json({ file: util.readFile(`${pt}/${path}`),type:2})
		// res.download(`/${path}`)
	}
	
});



module.exports = router;
