var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/api',function(req, res, next){
  //微信得到返回后会通过你的认证
	var query = req.query;    
	var echostr = query.echostr; 
	res.send(echostr);
})
module.exports = router;
