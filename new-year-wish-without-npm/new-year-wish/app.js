var express = require('express');
var app = express();
var engine = require('ejs-locals');
var bodyParser = require('body-parser');
const nocache = require('nocache');
app.use(nocache());
app.use(function (req, res, next) {
   res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
   res.header('Expires', '-1');
   res.header('Pragma', 'no-cache');
   next()
});
//路由
// 首頁
var index = require('./routes/index');
app.use('/', index);



var feedback = require('./routes/feedback');
app.use('/feedback',feedback);

// app.get('/feedback',function(req,res){
//    res.render('feedback');
// })

// 使用firebase (firebase專案 服務帳戶 金鑰)
var admin = require("firebase-admin");
// var serviceAccount = require("./matchwish2-firebase-adminsdk-dn7i4-56ca561173.json");
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://matchwish2.firebaseio.com"
// });
// firebase-admin
var fireData = admin.database();

app.engine('ejs',engine);
app.set('views','./views');
app.set('view engine','ejs');
//增加靜態檔案的路徑
app.use(express.static('public'));

// 增加 body 解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))



// api work
app.post('/matchWish2', function(req,res){
   var wish_title = req.body.wish_title ;
   var wish_desc = req.body.wish_desc ;
   var user_name = req.body.user_name ;
   var area = req.body.area ; 
   var contact = req.body.contact; 
   var dataRef = fireData.ref('post_api').push();
   res.writeHead(200, {
      // 'Content-Type': mimeType,
      // 'Content-Length': contents.length,
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'no-cache'
    })
   dataRef.set({
      'wish_title' : wish_title,
      'wish_desc' : wish_desc,
      'user_name' : user_name,
      'area' : area,
      'contact' : contact
   });
   res.end();
});

// 監聽 port 
// process.env.post
var port = process.env.PORT || 3000;
app.listen(port);