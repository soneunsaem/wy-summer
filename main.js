//main.js

//포토갤러리
$(function(){
    $('.img-list > li > a').on('click', function(e){
        e.preventDefault(); //기본이벤트 제거
        var src = $(this).children().attr('src');
        $('.main-photo > img').attr('src', src);
    })
})