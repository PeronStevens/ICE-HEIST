$(function(){
    $(".home").fadeIn(4000);

    $(".back-to-top-link").click(function(e) {
        // e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#top").offset().top
        }, 1000);
    });
    $(".about").click(function(e) {
        // e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });
    $(".music").click(function(e) {
        // e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#music").offset().top
        }, 1000);
    });    
})
