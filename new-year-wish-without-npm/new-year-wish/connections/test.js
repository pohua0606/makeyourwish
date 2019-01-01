var firebaseAdminDb = require('./firebase_admin');
var ref = firebaseAdminDb.ref('post_api');
ref.once('value', function(snapshot){
    console.log(snapshot.val());
})
