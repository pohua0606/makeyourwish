var express = require('express');
var router = express.Router();

// var firebaseAdminDb = require('../connections/firebase_admin');

// var ref = firebaseAdminDb.ref('post_api');
// ref.once('value', function(snapshot){
//     console.log(snapshot.val());
// })

router.get('/',function(req,res){
    res.render('feedback');
})

module.exports = router;