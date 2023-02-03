jQuery(function($){
    $(window).scroll(function() {
        var hT = $('.blogroll').offset().top,
            hH = $('.blogroll').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
            if (wS > (hT+hH-wH)){
                console.log('H1 on the view!');
                $('.card').css('display', 'block');
            }
         });
});