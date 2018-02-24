var express = require('express');
var router = express.Router();
var sha1 = require('sha1');
var config = {
	wechat:{
			appID:'wxf500fe4e63922a0f', //填写你自己的appID
			appSecret:'a9e831c399987fe7fa2dfbe2c2deb789',  //填写你自己的appSecret
			token:'ahui'  //填写你自己的token
	}
};
/* GET home page. */
router.get('/', function(req, res, next) {
  	var token = config.wechat.token;
    var signature = req.query.signature;
    var nonce = req.query.nonce;
    var timestamp = req.query.timestamp;
    var echostr = req.query.echostr;
    var str = [token,timestamp,nonce].sort().join(''); //按字典排序，拼接字符串
		var sha = sha1(str); //加密
		res.send((sha === signature)? echostr + '' : 'failed')    
});
router.post('/api',function(req, res, next){
  //微信得到返回后会通过你的认证
	var query = req.query;    
	var echostr = query.echostr; 
	res.send(echostr);
})
module.exports = router;
