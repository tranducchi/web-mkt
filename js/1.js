

$( document ).ready(function() {
    //stop next slide
    $('.carousel').carousel('pause');

    //open menu
       $('.menu-button').click(function(){
        $('span.btn1').toggleClass('rotate-right');
        $('span.btn2').toggleClass('rotate-left');
        $('.tab-menu').toggleClass("move-menu");
    });
    //close mennu click body
    $('body').click(function(evt){    
        if(evt.target.id == "list-menutab")
          return;
               if($(evt.target).closest('#list-menutab').length){
                  return;
        }
        if(evt.target.id == "menu")
          return;
               if($(evt.target).closest('#menu').length){
                  return;
        }          
        $('.tab-menu').removeClass("move-menu");
        $('span.btn1').removeClass('rotate-right');
        $('span.btn2').removeClass('rotate-left');
    });
    
});
