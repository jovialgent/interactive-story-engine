var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var page = require('./models/page');
mongoose.connect('mongodb://localhost/CYOA');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback){
	console.log("CYOA connected successfully on: " + Date.now());
});


var Page = mongoose.model('Page', page.schemaStructure);

router.get('/getPage', function(req, res, next){
	page.getPage({
		page : req.query.page,
		chapter: req.query.chapter,
		model : Page
	}, function(err, data){
		if(err){ 
			res.sendStatus(422); 
			return;
		}
		res.send(data[0]);
	});


})

router.post('/:chapter/:page', function(req, res){

})



module.exports = router;
