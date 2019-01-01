var wish_title = document.getElementById('wish_title');
var wish_desc = document.getElementById('wish_desc');
var user_name = document.getElementById('user_name');
var area = document.getElementById('area');
var contact = document.getElementById('contact');
var send = document.getElementById('send');


send.addEventListener('click', function(e){
        // e.preventDefault();
    // put form value into wish_obj
        var wish_title_content = wish_title.value;
        var wish_desc_content = wish_desc.value;
        var user_name_content = user_name.value;
        var area_content = area.value ;
        var contact_content = contact.value;
        
        // AJAX to send data to firebase
        var xhr = new XMLHttpRequest();
        xhr.open('post','/matchWish2');
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.setRequestHeader('cache-control', 'no-cache, must-revalidate, post-check=0, pre-check=0');
        xhr.setRequestHeader('cache-control', 'max-age=0');
        xhr.setRequestHeader('expires', '0');
        xhr.setRequestHeader('expires', 'Tue, 01 Jan 1980 1:00:00 GMT');
        xhr.setRequestHeader('pragma', 'no-cache');
        var user_wish = JSON.stringify({
            'wish_title': wish_title_content,
            'wish_desc': wish_desc_content,
            'user_name' : user_name_content,
            'area' : area_content,
            'contact' : contact_content
        }); 
        xhr.send(user_wish);
        window.location = "/feedback";    
});

