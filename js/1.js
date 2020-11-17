

$( document ).ready(function() {
    //stop next slide
    $('.carousel').carousel('pause');
    //close menu
    $('.close-menu').click(function(){
        $('.tab-menu').removeClass("move-menu");
    });
     //open menu
    $('.open-menu').click(function(){
        $('.tab-menu').addClass("move-menu");
    });
});
